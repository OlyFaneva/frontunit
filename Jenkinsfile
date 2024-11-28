pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'node:18'
        PROJECT_NAME = 'Pipeline_for_React' // Nom sans espaces pour éviter les conflits
    }

    stages {
        stage('Clone Repository') {
            steps {
                script {
                    // Afficher les informations Git pour le débogage
                    echo "Cloning repository..."
                    git branch: 'main',
                        url: 'https://github.com/OlyFaneva/frontunit.git',
                        credentialsId: 'github'
                }
            }
        }

        stage('Verify Repository Structure') {
            steps {
                script {
                    // Vérifiez la structure des fichiers dans le workspace pour déboguer
                    echo "Listing files in the workspace"
                    sh 'ls -l /var/jenkins_home/workspace/Pipeline pour React'
                }
            }
        }

        stage('Run Tests in Docker') {
            steps {
                script {
                    // Vérification de la structure du répertoire dans le conteneur Docker
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
                    // Construction de l'image Docker
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
