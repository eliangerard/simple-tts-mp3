# simple-tts-mp3 package
This package provides two methods to create MP3 audio files from text using the google-tts-api module, find it on [npm](https://www.npmjs.com/package/simple-tts-mp3/)!

| Method              | Options [optional]                       | Description                                         |
| ------------------- | ---------------------------------------- | --------------------------------------------------- |
| createAudioFile     | text, fileName, [language = 'en']        | Creates an mp3 audio file from text.                |
| getAudioBuffer      | text, [language = 'en']                  | Promise (Buffer)                                    |

 * text - The text to convert to audio.
 * fileName - The name of the audio file to create (can include a relative path, `ex: ./folder/name`).
 * language - The language of the text (ISO 639-1 code) (optional, default is English - en).

### Installation
```bash
npm install simple-tts-mp3
```

### Usage

```js
// Importing the package and methods
const { createAudioFile, getAudioBuffer } = require('simple-tts-mp3');

// Create an MP3 audio file with Spanish text
createAudioFile('Hola, ¿cómo estás?', 'hello', 'es');

// Get an MP3 audio buffer with Spanish text
getAudioBuffer('Hola, ¿cómo estás?', 'es')
  .then(buffer => {
    // Do something with the buffer
  });
```
