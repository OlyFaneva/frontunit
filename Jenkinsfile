pipeline {
    agent any
    
    environment {
        // Vous pouvez définir des variables d'environnement ici si nécessaire
    }
    
    stages {
        stage('Declarative: Checkout SCM') {
            steps {
                checkout scm
            }
        }
        
        stage('Clone Repository') {
            steps {
                script {
                    echo "Cloning repository from https://github.com/OlyFaneva/frontunit.git"
                    git url: 'https://github.com/OlyFaneva/frontunit.git', branch: 'main'
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

                        echo "Running Docker command to install dependencies and test"
                        docker run --rm -v $WORKSPACE:/app -w /app node:18-alpine sh -c "
                            echo 'Listing files inside the container:'
                            ls -l /app
                            echo 'Checking for package.json in /app...'
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
                    echo "Building Docker image"
                    sh '''
                        docker build -t my-docker-image .
                    '''
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    echo "Pushing Docker image to Docker Hub"
                    sh '''
                        docker tag my-docker-image myusername/my-docker-image:latest
                        docker push myusername/my-docker-image:latest
                    '''
                }
            }
        }

        stage('Deploy to VPS') {
            steps {
                script {
                    echo "Deploying Docker container to VPS"
                    sh '''
                        ssh user@your-vps 'docker pull myusername/my-docker-image:latest && docker run -d myusername/my-docker-image'
                    '''
                }
            }
        }
    }
    
    post {
        always {
            echo "Pipeline finished."
        }
        success {
            echo "Pipeline succeeded."
        }
        failure {
            echo "Pipeline failed. Please check the logs."
        }
    }
}
