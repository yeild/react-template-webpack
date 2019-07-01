const exec = require('child_process').execSync
const {sortDependencies, printMessage} = require('./utils')

let version = ''

try {
  version = exec('react -V')
} catch (e) {}

if (version.toString().trim() === '1.0.0') {
  throw new Error('current init-react version doesn\'t support this template, ' +
    'please run `npm i init-react@latest -g` and try again!')
}

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
    },
    test: {
      type: 'confirm',
      message: 'Set up unit test with Jest?'
    }
  },
  filters: {
    lint: ['.eslintrc.js'], // if key = false, the listed files will be removed
    typescript: [
      // if key = true, keep arr[0] and remove arr[1]
      // if key = false, remove arr[0] and keep arr[1]
      [
        'modules.d.ts',
        'tsconfig.json',
        'src/components/header/index.tsx',
        'src/views/about/index.tsx',
        'src/views/home/index.tsx',
        'src/views/app.tsx',
        'src/index.tsx',
        'src/index.test.tsx'
      ],
      [
        'src/components/header/index.jsx',
        'src/views/about/index.jsx',
        'src/views/home/index.jsx',
        'src/views/app.jsx',
        'src/index.jsx',
        'src/index.test.jsx'
      ]
    ],
    test: [
      'jest.config.js',
      'stub.js',
      'src/index.test.tsx',
      'src/index.test.jsx'
    ]
  },
  complete: function (data) {
    sortDependencies(data)
    printMessage(data)
    try {
      const version = exec('react -V')
      if (version === '1.0.0') {
        console.log('can\'t remove unused file, please update init-react to latest version!')
      }
    } catch (e) {
      console.log('can\'t remove unused file, please update init-react to latest version!')
      console.log(e)
    }
  }
}
