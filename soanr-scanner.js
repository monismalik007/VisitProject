const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://localhost:9000",
        token: "b16f5e2efee3e41069d5c8f5d04dd62dad7c012f",
        options: {
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
)