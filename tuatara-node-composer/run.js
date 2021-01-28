const fetch = require('node-fetch')
global.fetch = fetch
global.Headers = fetch.Headers
var fs = require('fs')
const segmentFeed = require("./feedSegment.json")
const MarketWatch = require('./marketWatch')
const AaveScript = require('./aave/AaveScript')

let segI = segmentFeed.segI
function Run() {
    // module.exports = function Run() {
    //? Reset Segment Index
    if (segI >= (segmentFeed.segment.length)) {
        console.log('more than length');
        console.log(segmentFeed.segment.length);
        segI = 0
    }

    //? Check Segment Index
    let segment = segmentFeed.segment[segI]
    console.log(segment)

    //? Write to tuatara-right
    //? Pause Audio
    fs.writeFile('D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scene-left/src/segment0.json', '{ "segment": "pause" }', function (err) {
        if (err) throw err;
        console.log('Paused TuaTara Right');
    });

    fs.writeFile('D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scene-right/src/segment0.json', '{ "segment": "pause" }', function (err) {
        if (err) throw err;
        console.log('Paused TuaTara Left');
    });

    if (segment === 'marketWatch') {
        MarketWatch()
        console.log('Market Watch')
    }

    if (segment === 'aave') {
        AaveScript()
        console.log('aave')
    }

    fs.writeFile('D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-node-composer/feedSegment.json', JSON.stringify({ "segI": (segI++), "segment": segmentFeed.segment }), function (err) {
        if (err) throw err;
        console.log('Saved!');
    })
}
Run()