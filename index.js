const googleTTS = require('google-tts-api');
const fs = require('fs');
const path = require('path');

/**
 * Creates an mp3 audio file from text.
 *
 * @param {string} text - The text to convert to audio.
 * @param {string} fileName - The name of the audio file to create (can include a relative path).
 * @param {string} [language='es'] - The language of the text (ISO 639-1 code) (optional).
 */
function createAudioFile(text, fileName, language = 'es') {
  const filePath = path.resolve(`${fileName}.mp3`);

  googleTTS.getAllAudioBase64(text, { lang: language })
    .then((result) => {
      const base64Data = result[0].base64;
      const buffer = Buffer.from(base64Data, 'base64');
      fs.writeFileSync(filePath, buffer);
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
 * @param {string} [language='es'] - The language of the text (ISO 639-1 code) (optional).
 * @returns {Promise<Buffer>} A promise that resolves with the mp3 audio buffer.
 */
function getAudioBuffer(text, language = 'es') {
  return googleTTS.getAllAudioBase64(text, { lang: language })
    .then((result) => {
      const base64Data = result[0].base64;
      const buffer = Buffer.from(base64Data, 'base64');
      return buffer;
    });
}

module.exports = { createAudioFile, getAudioBuffer };