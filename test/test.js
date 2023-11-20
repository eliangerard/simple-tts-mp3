const { createAudioFile, getAudioBuffer } = require("../index.js");

createAudioFile("Hello World!", "./test/test", "en").then((filePath) => {
    console.log(filePath);
});

getAudioBuffer("Hello World!", "en").then((buffer) => {
    console.log(buffer);
});