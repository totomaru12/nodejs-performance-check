const crypto = require('crypto');
const { performance } = require('perf_hooks');

function randomNumber() {
    return parseInt(crypto.randomBytes(8).toString('hex'), 16);   
}

function checkSpecArrayAndObjectAccess() {
    const SUM＿ACCESS_COUNT = 1000 * 100;
    const array = makeArray(SUM＿ACCESS_COUNT);
    const map = makeHashMap(SUM＿ACCESS_COUNT);

    console.log(`access count: ${SUM＿ACCESS_COUNT}`);

    console.log(`map compute start`);
    const mapStartTime = performance.now();
    for (let i = 0; i < SUM＿ACCESS_COUNT; i++) {
        findByHash(map, i);
    }
    const mapEndTime = performance.now();
    const mapTimeMsRaw = mapEndTime - mapStartTime;
    const mapTimeMs = Math.floor(mapTimeMsRaw);
    console.log(`map compute end`);
    
    console.log(`array compute start`);
    const arrayStartTime = performance.now();
    for (let i = 0; i < SUM＿ACCESS_COUNT; i++) {
        findBySequential(array, i);
    }
    const arrayEndTime = performance.now();
    const arrayTimeMsRaw = arrayEndTime - arrayStartTime;
    const arrayTimeMs = Math.floor(arrayTimeMsRaw);
    console.log(`array compute end`);

    console.log(`RESULT`);
    console.log(`  map    (ms) : ${mapTimeMs}`);
    console.log(`  array  (ms) : ${arrayTimeMs}`);
    console.log(`  array / map : ${Math.floor(arrayTimeMs / mapTimeMsRaw)}`);
}

function makeHashMap(size) {
    const map = {};
    for (let i = 0; i < size; i++) {
        map[i] = randomNumber();
    }
    return map;
}

function makeArray(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array[i] = i;
    }
    return array;
}

function findByHash(map, key) {
    return map[key];
}

function findBySequential(array, key) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === key) {
            return i;
        }
    }
    return null;
}

module.exports = checkSpecArrayAndObjectAccess
