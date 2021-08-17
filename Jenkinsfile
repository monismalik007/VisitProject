pipeline {
    agent any   
     environment {
            CI = 'true'
        }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
            
        }
        stage('Image Build') {
            agent { Dockerfile true }
            steps {
                sh 'node --version'
            }
        }               
    }
}
