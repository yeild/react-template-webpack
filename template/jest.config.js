module.exports = {
  transform: {
    {{#typescript}}
    '^.+\\.(tsx?|jsx?)$': 'ts-jest'
    {{else}}
    '^.+\\.jsx?$': 'babel-jest'
    {{/typescript}}
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '.(css|png|gif|svg|jpe?g)$': '<rootDir>/stub.js'
  }
}
