pipeline {
    agent any
    environment {
        GITHUB_REPO = 'https://github.com/OlyFaneva/frontunit.git'
        DOCKER_HUB_REPO = 'olyfaneva/repository'
        VPS_IP = '89.116.111.200'
        SSH_CREDENTIALS = credentials('vps')
    }
    stages {
        stage('Clone Repository') {
            steps {
                git url: GITHUB_REPO, branch: 'main'
            }
        }
        stage('Run Tests in Docker') {
            steps {
                script {
                    sh '''
                        echo "Running tests in a Docker container"
                        docker run --rm -v $(pwd):/app -w /app node:18 bash -c "
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
                    sh 'docker build -t ${DOCKER_HUB_REPO}:latest .'
                }
            }
        }
        stage('Push Docker Image to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    sh '''
                        echo "Logging into Docker Hub"
                        echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin
                        echo "Pushing Docker image to Docker Hub"
                        docker push ${DOCKER_HUB_REPO}:latest
                    '''
                }
            }
        }
        stage('Deploy to VPS') {
            steps {
                script {
                    sh '''
                        ssh -o StrictHostKeyChecking=no root@${VPS_IP} <<EOF
                        docker pull ${DOCKER_HUB_REPO}:latest
                        docker stop react-app || true
                        docker rm react-app || true
                        docker run -d --restart always -p 80:80 --name react-app ${DOCKER_HUB_REPO}:latest
                        EOF
                    '''
                }
            }
        }
    }
    post {
        always {
            echo 'Pipeline terminé.'
        }
        success {
            echo 'Pipeline exécuté avec succès.'
        }
        failure {
            echo 'Pipeline échoué.'
        }
    }
}
