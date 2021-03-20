const fetch = require('node-fetch')
global.fetch = fetch
global.Headers = fetch.Headers
var fs = require('fs')
var feedSegment = require("./feedSegment.json")
const PostProcess = require('./postProcess')
const Zora = require('./zora/zora')
const { parse } = require('path')

module.exports = function Run() {
    //function Run() {
    fs.readFile('./feedSegment.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        parseFeedSegment(JSON.parse(data))
    })


    let segIndex = 0
    function parseFeedSegment(dat) {
        let segI = dat.segI
        let segments = dat.segments

        let curSegment = dat.nextSegment
        if (segI <= (segments.length - 1)) {
            segIndex = segI
        }
        else {
            segIndex = 0
        }
        let nextSegment = dat.segments[segIndex]

        //? Pause and initiate video transition
        //? Write to tuatara-right
        function writePause(curSeg, nextSeg, indexSeg, segments) {
            setTimeout(function () {
                var stream = fs.createWriteStream("D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scroll/src/segment0.json");
                stream.on('error', console.error);
                stream.write(`{ "segment": "${nextSeg}Pause" }`);
                stream.end();
            }, 8000);

            setTimeout(function () {
                var stream = fs.createWriteStream("D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-node-composer/feedSegment.json");
                stream.on('error', console.error);
                stream.write(JSON.stringify({ "segI": (indexSeg + 1), "curSegment": curSeg, "nextSegment": nextSeg, "segments": segments }));
                stream.end();
            }, 7000);
        }

        // writePause(curSegment, nextSegment, segIndex, segments)

        //? Add New Segments Here
        // if (curSegment === 'intro') {
        //     console.log('Intro')
        //     PostProcess()
        // }

        // if (curSegment === 'zora') {
        //     console.log('Zora')
        //     Zora()
        //     PostProcess()
        // }

    }
}
// Run()