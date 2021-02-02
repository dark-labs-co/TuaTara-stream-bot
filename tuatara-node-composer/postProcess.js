var fs = require('fs');
let feedSegment = require('./feedSegment.json');
let feedSegmentIndex = require('./feedSegmentIndex.json');

module.exports = function PostProcess() {
    // function PostProcess() {
    function process() {

        let feedL = feedSegment.segment.length
        let feedSegs = feedSegment.segment

        let feedI = feedSegmentIndex.segI
        let feedN = 0

        if (feedI <= (feedL - 2)) {
            feedN = feedI + 1
        }
        else {
            feedN = 0
        }

        function write0(fIndex) {
            fs.writeFile('D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scene-left/src/segment0.json',
                JSON.stringify({ "segment": feedSegs[fIndex] }), function (err) {
                    if (err) throw err;
                    console.log('Saved - L', fIndex);
                });
        }

        function write1(fIndex) {
            fs.writeFile('D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scene-right/src/segment0.json',
                JSON.stringify({ "segment": feedSegs[fIndex] }), function (err) {
                    if (err) throw err;
                    console.log('Saved - R', fIndex);
                });
        }

        function write2(fIndex) {
            fs.writeFile('D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scroll/src/segment0.json',
                JSON.stringify({ "segment": feedSegs[fIndex] }), function (err) {
                    if (err) throw err;
                    console.log('Saved - Scroll', fIndex);
                });
        }

        function write3(fIndex) {
            fs.writeFile('D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-node-composer/feedSegment.json',
                JSON.stringify({ "segI": (fIndex), "segment": feedSegs }), function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                })
        }
        function write4(fIndex) {
            fs.writeFile('D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-node-composer/feedSegmentIndex.json',
                JSON.stringify({ "segI": (fIndex) }), function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                })
        }


        function w0() {
            setTimeout(function () {
                write0(feedN)
            }, 3000);
        }
        function w1() {
            setTimeout(function () {
                write1(feedN)
            }, 3000);
        }
        function w2() {
            setTimeout(function () {
                write2(feedN)
            }, 3000);
        }
        function w3() {
            setTimeout(function () {
                write3(feedN)
            }, 3000);
        }
        function w4() {
            setTimeout(function () {
                write4(feedN)
            }, 3000);
        }
        w0()
        w1()
        w2()
        w3()
        w4()
    }
    process()
}
// PostProcess()
