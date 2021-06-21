const checkSpecArrayAndObjectAccess = require('./list_hash_performance')
const { program } = require('commander')

function main () {
  const options = program
    .description('check nodejs performance')
    .option('-l --list-hash', 'check performance difference between list and hash')
    .addHelpText('after',
`
Example:
  $ nodejs_performance_check --list-hash
`)
    .parse(process.argv)
    .opts()

  if (options.listHash) {
    checkSpecArrayAndObjectAccess()
  }
}

main()
