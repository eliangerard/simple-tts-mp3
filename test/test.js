const { createAudioFile, getAudioBuffer } = require('../index.js');

const text = 'Hola mundo';
const fileName = 'output';

createAudioFile(text, fileName, 'es');