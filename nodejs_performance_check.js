const checkSpecArrayAndObjectAccess = require('./list_hash_performance');

const PARAMETER_CHECK_TYPE = {
    LIST_HASH_DIFF: '--list-hash',
}

function usage () {
    const toolName = 'nodejs_performance_check';
    console.log(`usage:`);
    console.log(`  $ node ${toolName} ${PARAMETER_CHECK_TYPE.LIST_HASH_DIFF}`);
    console.log(`      check list and hash performance diffrence`);
}

function main () {
    console.log(`tool started`);
    if (process.argv.length !== 3) {
        console.log(`E: invalid parameter`);
        usage();
        return;
    }
    if (process.argv[2] === PARAMETER_CHECK_TYPE.LIST_HASH_DIFF) {
        checkSpecArrayAndObjectAccess();
    } else {
        console.log(`E: invalid parameter`);
        usage();
        return;
    }
    console.log(`tool ended`);
}

main();
