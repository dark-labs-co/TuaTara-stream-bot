var fs = require('fs');
var feedSegment = require('./feedSegment.json');

function PostProcess() {
    let feedL = feedSegment.segI
    let feedSeg = feedSegment.segment

    fs.writeFile('D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scene-left/src/segment0.json', JSON.stringify({ "segment": feedSeg[feedL] }), function (err) {
        if (err) throw err;
        console.log('Saved - L', feedSeg[feedL]);
    });

    fs.writeFile('D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scene-right/src/segment0.json', JSON.stringify({ "segment": feedSeg[feedL] }), function (err) {
        if (err) throw err;
        console.log('Saved - R', feedSeg[feedL]);
    });
}

PostProcess()