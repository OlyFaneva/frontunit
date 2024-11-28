pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'olyfaneva/mon-pic'
        DOCKER_TAG = 'latest'
        REPO_URL = 'https://github.com/OlyFaneva/frontunit.git'
        SSH_CREDENTIALS = credentials('vps')
    }

    stages {
        stage('Clone Repository') {
            steps {
                script {
                    echo "Cloning repository from ${REPO_URL}"
                    git branch: 'main', url: "${REPO_URL}"
                }
            }
        }

        stage('Install Dependencies and Test') {
            steps {
                script {
                    echo "Installing dependencies and running tests"
                    sh '''
                        echo "Listing files in workspace:"
                        ls -l

                        docker run --rm -v $WORKSPACE:/app -w /app node:18-alpine sh -c "
                            echo 'Checking for package.json in $(pwd)...'
                            if [ ! -f /app/package.json ]; then
                                echo 'Error: package.json not found in /app';
                                exit 1;
                            fi;
                            npm install &&
                            npm run test
                        "
                    '''
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building Docker image: ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    sh '''
                        docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .
                    '''
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    echo "Pushing Docker image to Docker Hub"
                    withDockerRegistry([credentialsId: 'docker', url: 'https://index.docker.io/v1/']) {
                        sh '''
                            docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
                        '''
                    }
                }
            }
        }

        stage('Deploy to VPS') {
            steps {
                script {
                    echo "Deploying application to VPS"
                    sh '''
                        sshpass -p "${SSH_CREDENTIALS_PSW}" ssh -o StrictHostKeyChecking=no ${SSH_CREDENTIALS_USR}@89.116.111.200 << EOF
                            docker pull ${DOCKER_IMAGE}:${DOCKER_TAG}
                            docker stop my-app || true
                            docker rm my-app || true
                            docker run -d --name my-app -p 80:3000 ${DOCKER_IMAGE}:${DOCKER_TAG}
                        EOF
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}
