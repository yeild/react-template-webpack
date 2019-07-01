module.exports = {
  transform: {
    {{#typescript}}
    '^.+\\.(tsx?|jsx?)$': 'ts-jest'
    {{else}}
    '^.+\\.js$': 'babel-jest'
    {{/typescript}}
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '.(css|png|gif|svg|jpe?g)$': '<rootDir>/fileStub.js'
  }
}
