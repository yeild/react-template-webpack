const path = require('path')
const fs = require('fs')

exports.sortDependencies = function sortDependencies(data) {
  const packageJsonFile = path.join(
    data.inPlace ? "" : data.destDirName,
    "package.json"
  )
  const packageJson = JSON.parse(fs.readFileSync(packageJsonFile))
  packageJson.devDependencies = sortObject(packageJson.devDependencies)
  packageJson.dependencies = sortObject(packageJson.dependencies)
  fs.writeFileSync(
    packageJsonFile,
    JSON.stringify(packageJson, null, 2) + "\n"
  )
}

exports.printMessage = function printMessage(data) {
  console.log('---------------')
  console.log('To get started:')
  console.log('$  cd', data.name)
  console.log('$  npm install')
  console.log('$  npm run dev')
}

function sortObject(object) {
  const sortedObject = {}
  Object.keys(object).sort().forEach(item => {
    sortedObject[item] = object[item]
  })
  return sortedObject
}