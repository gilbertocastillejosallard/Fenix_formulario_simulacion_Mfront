const sonarqubeScanner = require('sonarqube-scanner')

sonarqubeScanner(
  {
    serverUrl: process.env.SONAR_SERVER_URL,
    options: {
      'sonar.projectKey': process.env.SONAR_PROJECT_KEY,
      'sonar.projectVersion': '1.0.0',
      'sonar.sources': 'src',
      'sonar.tests': 'src',
      'sonar.test.inclusions': 'src/**/*.test.js,src/**/*.test.jsx',
      'sonar.sourceEncoding': 'UTF-8',
      'sonar.login': process.env.SONAR_LOGIN,
      'sonar.javascript.file.suffixes': '.js,.jsx',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info'
      // 'sonar.testExecutionReportPaths': 'reports/report.xml'
    }
  },
  () => {}
)
