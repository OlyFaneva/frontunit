pipeline {
    agent any

    environment {
        // Configuration de l'environnement Docker
        DOCKER_IMAGE = 'olyfaneva/nextproject'
        DOCKER_TAG = 'latest'
        REPO_URL = 'https://github.com/OlyFaneva/frontunit.git'
    }

    stages {
        // Étape 1: Cloner le dépôt Git
        stage('Clone Repository') {
            steps {
                script {
                    // Cloner le code source depuis GitHub
                    echo "Cloning repository: ${REPO_URL}"
                    git url: "${REPO_URL}", branch: 'main'
                }
            }
        }
        stage('Check Node.js and npm') {
            steps {
                script {
                    sh 'node -v'
                    sh 'npm -v'
                }
            }
        }

        // Étape 2: Installer les dépendances
        stage('Install Dependencies') {
            steps {
                script {
                    // Installer les dépendances Next.js avec npm
                    echo 'Installing dependencies...'
                    sh 'npm install'
                }
            }
        }

        // Étape 3: Exécuter les tests
        stage('Run Tests') {
            steps {
                script {
                    // Exécuter les tests Next.js
                    echo 'Running Next.js tests...'
                    sh 'npm test -- --watchAll=false'
                }
            }
        }

        // Étape 4: Construire l'image Docker
        stage('Build Docker Image') {
            steps {
                script {
                    // Construire une image Docker
                    echo "Building Docker image: ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    sh 'docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .'
                }
            }
        }

        // Étape 5: Pousser l'image Docker vers Docker Hub
        stage('Push to Docker Hub') {
            steps {
                script {
                    // Pousser l'image Docker vers Docker Hub
                    echo 'Pushing Docker image to Docker Hub'
                    withDockerRegistry([credentialsId: 'docker', url: 'https://index.docker.io/v1/']) {
                        sh 'docker push ${DOCKER_IMAGE}:${DOCKER_TAG}'
                    }
                }
            }
        }
    }
}
