pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'node:18'
    }

    stages {
        stage('Clone Repository') {
            steps {
                script {
                    echo "Cloning repository..."
                    git branch: 'main',
                        url: 'https://github.com/OlyFaneva/frontunit.git',
                        credentialsId: 'git'
                }
            }
        }

        stage('Verify Repository Structure') {
            steps {
                script {
                    echo "Listing files in the workspace"
                    // Utilisation de guillemets pour éviter les problèmes avec les espaces
                    sh 'ls -l "/var/jenkins_home/workspace/frontunit"'
                }
            }
        }

        stage('Run Tests in Docker') {
            steps {
                script {
                    echo "Running tests in a Docker container"
                    sh '''
                        docker run --rm \
                            -v "$PWD:/frontunit" \
                            -w /frontunit \
                            node:18 bash -c "echo Listing files in /frontunit && ls -l /frontunit && npm install && npm test"
                    '''
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building Docker Image"
                    sh '''
                        docker build -t olyfaneva/front-app .
                    '''
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                withDockerRegistry(credentialsId: 'docker', url: 'https://index.docker.io/v1/') {
                    sh 'docker push olyfaneva/front-app'
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
