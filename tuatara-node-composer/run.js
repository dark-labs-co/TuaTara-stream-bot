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

    let segIndex = 0

    function parseFeedSegment(dat) {
        let segI = dat.segI
        let segments = dat.segments

        let curSegment = dat.nextSegment



        //? Reset Segment Index
        if (segI <= (segments.length - 1)) {
            segIndex = segI
        }
        else {
            segIndex = 0
        }
        let nextSegment = dat.segments[segIndex]



        //? Write to tuatara-right
        //? Pause Audio
        function writePause(curSeg, nextSeg, indexSeg, segments) {
            setTimeout(function () {
                var stream = fs.createWriteStream("D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scroll/src/segment0.json");
                stream.on('error', console.error);
                stream.write(`{ "segment": "${nextSeg}Pause" }`);
                stream.end();
                console.log(0)

            }, 8000);

            // setTimeout(function () {
            //     var stream = fs.createWriteStream("D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scene-left/src/segment0.json");
            //     stream.on('error', console.error);
            //     stream.write(`{ "segment": "${nextSeg}Pause" }`);
            //     stream.end();
            //     console.log(1)
            // }, 7000);

            // setTimeout(function () {
            //     var stream = fs.createWriteStream("D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scene-right/src/segment0.json");
            //     stream.on('error', console.error);
            //     stream.write(`{ "segment": "${nextSeg}Pause" }`);
            //     stream.end();
            //     console.log(2)

            // }, 7000);


            setTimeout(function () {
                var stream = fs.createWriteStream("D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-node-composer/feedSegment.json");
                stream.on('error', console.error);
                stream.write(JSON.stringify({ "segI": (indexSeg + 1), "curSegment": curSeg, "nextSegment": nextSeg, "segments": segments }));
                stream.end();
                console.log(3)

            }, 7000);
        }

        writePause(curSegment, nextSegment, segIndex, segments)


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