pipeline {
    agent any
    triggers {
        // Ce trigger lance le pipeline à chaque push sur GitHub
        githubPush()
    }
    environment {
        GITHUB_REPO = 'https://github.com/OlyFaneva/frontunit.git'
        DOCKER_HUB_REPO = 'olyfaneva/repository'
        VPS_IP = '89.116.111.200'
        SSH_CREDENTIALS = credentials('vps') // Assurez-vous que 'vps' est bien configuré dans Jenkins
    }
    stages {
        stage('Clone Repository') {
            steps {
                git url: GITHUB_REPO, branch: 'main'
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    // Vérifiez que Node.js est bien installé sur l'agent Jenkins
                    sh '''
                        echo "Installing dependencies"
                        npm install
                        echo "Running tests"
                        npm run test
                    '''
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Construit l'image Docker
                    sh 'docker build -t ${DOCKER_HUB_REPO}:latest .'
                }
            }
        }
        stage('Push Docker Image to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    sh '''
                        echo "Logging into Docker Hub"
                        docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}
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
                        echo "Deploying to VPS"
                        sshpass -p "${SSH_CREDENTIALS_PSW}" ssh -o StrictHostKeyChecking=no ${SSH_CREDENTIALS_USR}@${VPS_IP} "
                            docker pull ${DOCKER_HUB_REPO}:latest && 
                            docker run -d --restart always -p 80:80 ${DOCKER_HUB_REPO}:latest"
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
