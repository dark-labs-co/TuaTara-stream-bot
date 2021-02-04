var fs = require('fs');

module.exports = function PostProcess() {
    //function PostProcess(fSeg) {
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
        let currentSegment = dat.curSegment
        let nextSegment = dat.nextSegment

        function w1(fIndex) {
            setTimeout(function () {
                var stream = fs.createWriteStream("D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scene-left/src/segment0.json");
                stream.on('error', console.error);
                stream.write(JSON.stringify({ "segment": currentSegment }));
                stream.end();
                console.log(4)

            }, 10000);
        }
        function w2(fIndex) {
            setTimeout(function () {
                var stream = fs.createWriteStream("D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scroll/src/segment0.json");
                stream.on('error', console.error);
                stream.write(JSON.stringify({ "segment": currentSegment }));
                stream.end();
                console.log(5)

            }, 10000);
        }
        function w3(fIndex) {
            setTimeout(function () {
                var stream = fs.createWriteStream("D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scene-right/src/segment0.json");
                stream.on('error', console.error);
                stream.write(JSON.stringify({ "segment": currentSegment }));
                stream.end();
                console.log(6)

            }, 9000);
        }

        w1(segI)
        w2(segI)
        w3(segI)

    }
}
// PostProcess()