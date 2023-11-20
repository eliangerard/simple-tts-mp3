# simple-tts-mp3 package
This package provides two methods to create MP3 audio files from text using the google-tts-api module, it's compatible with TypeScript too, find it on [npm](https://www.npmjs.com/package/simple-tts-mp3/)!

If you like it, please leave a ⭐ **STAR** on [GitHub](https://github.com/eliangerard/simple-tts-mp3) ⭐

| Method              | Options [optional]                       | Description                                         |
| ------------------- | ---------------------------------------- | --------------------------------------------------- |
| createAudioFile     | text, fileName, [language = 'en']        | Creates an mp3 audio file from text and returns its final path - Promise (String)                |
| getAudioBuffer      | text, [language = 'en']                  | Creates an mp3 audio buffer from text and returns it - Promise (Buffer)                                    |

 * text - The text to convert to audio.
 * fileName - The name of the audio file to create (can include a relative path, `ex: ./folder/name`).
 * language - The language of the text (ISO 639-1 code) (optional, default is English - en).
 
 Check the [wiki](https://github.com/eliangerard/simple-tts-mp3/wiki) to see all the languages supported by this package.

### Installation
```bash
npm install simple-tts-mp3
```

### Usage
+ createAudioFile( text, fileName, language = 'en')
```js
// Importing create file method from package
const { createAudioFile } = require('simple-tts-mp3');

// Creates an "output.mp3" audio file with default English text
createAudioFile('Hi, How are you?', 'output');

// Creates an "output.mp3" audio file with Spanish text and promise resolved
createAudioFile('Hola, ¿Cómo estás?', 'output', 'es').then((filepath) => {
    console.log(filepath);
});

// Creates an "output.mp3" audio file with Spanish text inside the "audios" folder and awaits filepath
const filepath = await createAudioFile('Todo bien, gracias', './audios/output', 'es');
```
+ getAudioBuffer( text, language = 'en')
```js
// Importing create 
const { getAudioBuffer } = require('simple-tts-mp3');

// Creates an MP3 audio buffer with Spanish text and resolves the promise with it
getAudioBuffer('Hola, ¿cómo estás?', 'es')
  .then(buffer => {
    // Do something with the buffer
  });
  
// Creates an MP3 audio buffer with default English text and awaits it
const buffer = await getAudioBuffer('Hi, How are you?');
```
