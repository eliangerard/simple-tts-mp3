const googleTTS = require('google-tts-api');
const fs = require('fs');
const path = require('path');

/**
 * Creates an mp3 audio file from text.
 *
 * @param {string} text - The text to convert to audio.
 * @param {string} fileName - The name of the audio file to create (can include a relative path).
 * @param {string} [language='en'] - The language of the text (ISO 639-1 code) (optional).
 */
function createAudioFile(text, fileName, language = 'en') {
  const filePath = path.resolve(`${fileName}.mp3`);

  googleTTS.getAllAudioBase64(text, { lang: language })
    .then((result) => {
      const buffers = result.map(result => Buffer.from(result.base64, 'base64'));
      const finalBuffer = Buffer.concat(buffers);
      fs.writeFileSync(filePath, finalBuffer);
      console.log(`Audio file ${filePath} created successfully`);
    })
    .catch((err) => {
      console.error(err);
    });
}

/**
 * Gets an mp3 audio buffer from text.
 *
 * @param {string} text - The text to convert to audio.
 * @param {string} [language='en'] - The language of the text (ISO 639-1 code) (optional).
 * @returns {Promise<Buffer>} A promise that resolves with the mp3 audio buffer.
 */
function getAudioBuffer(text, language = 'en') {
  return googleTTS.getAllAudioBase64(text, { lang: language })
    .then((result) => {
      const buffers = result.map(result => Buffer.from(result.base64, 'base64'));
      const finalBuffer = Buffer.concat(buffers);
      return finalBuffer;
    });
}

module.exports = { createAudioFile, getAudioBuffer };