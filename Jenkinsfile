pipeline {
    agent {
        docker {
            image 'node:18'
        }
    }
    triggers {
        githubPush()
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
                git url: GITHUB_REPO, branch: 'main'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm install'
                sh 'npm run test'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${DOCKER_HUB_REPO}:latest .'
            }
        }
        stage('Push Docker Image to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    sh '''
                        docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}
                        docker push ${DOCKER_HUB_REPO}:latest
                    '''
                }
            }
        }
        stage('Deploy to VPS') {
            steps {
                sh '''
                    sshpass -p "${SSH_CREDENTIALS_PSW}" ssh -o StrictHostKeyChecking=no ${SSH_CREDENTIALS_USR}@${VPS_IP} "
                        docker pull ${DOCKER_HUB_REPO}:latest && 
                        docker run -d --restart always -p 80:80 ${DOCKER_HUB_REPO}:latest"
                '''
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
