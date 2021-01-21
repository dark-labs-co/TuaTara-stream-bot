var fs = require('fs');

function PostProcess() {
    fs.writeFile('D:/Projects/TuraTara/Repo/tuatara-scene-left/src/segment0.json', '{ "segment": "marketWatch" }', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

PostProcess()