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
    },
    typescript: {
      type: 'confirm',
      message: 'Use TypeScript? '
    }
  },
  filters: {
    lint: ['.eslintrc.js'],
    typescript: [
      [
        'modules.d.ts',
        'tsconfig.json',
        'src/components/header/index.tsx',
        'src/views/about/index.tsx',
        'src/views/home/index.tsx',
        'src/views/app.tsx',
        'src/index.tsx'
      ],
      [
        'src/components/header/index.js',
        'src/views/about/index.js',
        'src/views/home/index.js',
        'src/views/app.js',
        'src/index.js',
      ]
    ]
  },
  complete: function (data) {
    sortDependencies(data)
    printMessage(data)
  }
}
