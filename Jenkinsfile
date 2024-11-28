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
                    echo "Cloning repository: ${REPO_URL}"
                    git url: "${REPO_URL}", branch: 'main'
                }
            }
        }

        stage('Install Dependencies and Test') {
            steps {
                script {
                    echo "Installing dependencies and running tests"
                    sh '''
                        echo "Current working directory in Jenkins: $(pwd)"
                        echo "Listing files in the current directory:"
                        ls -l $(pwd)

                        docker run --rm -v $(pwd):/app -w /app node:18-alpine sh -c "
                            echo 'Listing files in the /app directory in the container:'
                            ls -l /app

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
                    echo "Deploying to VPS"
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
}
