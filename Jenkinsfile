pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'node:18'
        PROJECT_NAME = 'Pipeline_for_React' // Nom sans espaces pour éviter les conflits
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/OlyFaneva/frontunit.git',
                    credentialsId: 'github'
            }
        }

        stage('Run Tests in Docker') {
            steps {
                script {
                    sh '''
                        echo "Running tests in a Docker container"
                        docker run --rm \
                            -v "$PWD:/app" \
                            -w /app \
                            node:18 bash -c "npm install && npm test"
                    '''
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh '''
                        echo "Building Docker Image"
                        docker build -t olyfaneva/react-app .
                    '''
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                withDockerRegistry(credentialsId: 'docker', url: 'https://index.docker.io/v1/') {
                    sh 'docker push olyfaneva/react-app'
                }
            }
        }

        stage('Deploy to VPS') {
            steps {
                sshagent(credentials: ['vps']) {
                    sh '''
                        echo "Connecting to VPS and deploying..."
                        ssh root@<VPS_IP> "docker pull olyfaneva/react-app && docker run -d -p 80:3000 olyfaneva/react-app"
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
            echo 'Pipeline failed.'
        }
    }
}
