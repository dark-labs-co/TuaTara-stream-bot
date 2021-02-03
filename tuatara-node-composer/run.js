const fetch = require('node-fetch')
global.fetch = fetch
global.Headers = fetch.Headers
var fs = require('fs')
var feedSegment = require("./feedSegment.json")
const MarketWatch = require('./marketWatch/marketWatch')
const PostProcess = require('./postProcess')
const AaveScript = require('./aave/AaveScript')
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

    function parseFeedSegment(dat) {
        let segI = dat.segI
        let segments = dat.segments

        let segIndex = segI + 1

        //? Reset Segment Index
        if (segI >= (segments.length - 2)) {
            segIndex = 0
        }


        let curSegment = segments[segIndex]
        let nextSegment = segments[(segIndex + 1)]

        //? Write to tuatara-right
        //? Pause Audio
        function writePause(nextSeg, segI, segments) {
            setTimeout(function () {
                var stream = fs.createWriteStream("D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scroll/src/segment0.json");
                stream.on('error', console.error);
                stream.write(`{ "segment": "${nextSeg}Pause" }`);
                stream.end();
                console.log(0)

            }, 5000);

            setTimeout(function () {
                var stream = fs.createWriteStream("D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scene-left/src/segment0.json");
                stream.on('error', console.error);
                stream.write(`{ "segment": "${nextSeg}Pause" }`);
                stream.end();
                console.log(1)
            }, 1000);

            setTimeout(function () {
                var stream = fs.createWriteStream("D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scene-right/src/segment0.json");
                stream.on('error', console.error);
                stream.write(`{ "segment": "${nextSeg}Pause" }`);
                stream.end();
                console.log(2)

            }, 3000);


            setTimeout(function () {
                var stream = fs.createWriteStream("D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-node-composer/feedSegment.json");
                stream.on('error', console.error);
                stream.write(JSON.stringify({ "segI": segI, "curSegment": nextSeg, "segments": segments }));
                stream.end();
                console.log(3)

            }, 4000);
        }

        writePause(nextSegment, segIndex, segments)


        if (curSegment === 'aave') {
            AaveScript()
            console.log('aave')
            PostProcess()

        }

        if (curSegment === 'marketWatch') {
            // MarketWatch()
            console.log('Market Watch')
            PostProcess()
        }


    }
}
// Run()