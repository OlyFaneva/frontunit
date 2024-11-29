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
                    echo "Current working directory in Jenkins: ${pwd()}"
                    echo 'Listing files in the current directory in Jenkins:'
                    sh "ls -l ${pwd()}"

                    echo 'Running docker container to copy package.json and run tests'
                    sh '''
                        docker run --rm -v ${pwd()}:/app -w /app node:18-alpine sh -c "
                            # Utilisation de bash au lieu de sh
                            echo 'Listing files in /app within the container:';
                            ls -l /app;

                            # Copier package.json dans le conteneur
                            cp /app/package.json /tmp/package.json;

                            # Vérifier que le fichier a bien été copié
                            ls -l /tmp;

                            if [ ! -f /tmp/package.json ]; then
                                echo 'Error: package.json not found in /tmp';
                                exit 1;
                            fi;

                            # Installer les dépendances et exécuter les tests
                            npm install && npm run test
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
                    echo 'Pushing Docker image to Docker Hub'
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
                    echo 'Deploying to VPS'
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
