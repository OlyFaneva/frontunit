pipeline {
    agent any
    triggers {
        // Cette section s'assure que le pipeline s'exécute lorsque un push est effectué sur la branche 'main'
        githubPush() // Assurez-vous que le webhook GitHub est correctement configuré
    }
    environment {
        GITHUB_REPO = 'https://github.com/OlyFaneva/frontunit.git'
        DOCKER_HUB_REPO = 'olyfaneva/repository'
        VPS_IP = '89.116.111.200'
        SSH_CREDENTIALS = credentials('vps')
    }
    stages {
        stage('Clone Repository') {
            steps {
                script {
                    git url: GITHUB_REPO, branch: 'main'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    sh 'npm install'
                    sh 'npm run test'
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
                script {
                    sh 'docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}'
                    sh 'docker push ${DOCKER_HUB_REPO}:latest'
                }
            }
        }
        stage('Deploy to VPS') {
            steps {
                script {
                    sh '''
                        sshpass -p "${SSH_CREDENTIALS_PSW}" ssh -o StrictHostKeyChecking=no ${SSH_CREDENTIALS_USR}@${VPS_IP} "
                            docker pull ${DOCKER_HUB_REPO}:latest && 
                            docker run -d --restart always -p 80:80 ${DOCKER_HUB_REPO}:latest"
                    '''
                }
            }
        }
    }
}
