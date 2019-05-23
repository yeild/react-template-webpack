const {sortDependencies, printMessage} = require('./utils')

module.exports = {
  prompts: {
    name: {
      type: 'input',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'input',
      required: false,
      message: 'Project description',
      default: 'A React project'
    },
    author: {
      type: 'input',
      message: 'Author'
    },
    lint: {
      type: 'confirm',
      message: 'Use ESLint to lint your code? '
    },
    lintConfig: {
      when: 'lint',
      type: 'list',
      message: 'Pick an ESLint preset',
      choices: [
        {
          name: 'Standard (https://github.com/standard/standard)',
          value: 'standard',
          short: 'Standard'
        },
        {
          name: 'Airbnb (https://github.com/airbnb/javascript)',
          value: 'airbnb',
          short: 'Airbnb'
        },
        {
          name: 'none (configure it yourself)',
          value: 'none',
          short: 'none'
        }
      ]
    }
  },
  filters: {
    '.eslintrc.js': 'lint'
  },
  complete: function (data) {
    sortDependencies(data)
    printMessage(data)
  }
}
