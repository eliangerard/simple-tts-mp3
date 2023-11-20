declare module 'simple-tts-mp3' {

    /**
     * Creates an mp3 audio file from text.
     *
     * @param {string} text The text to convert to audio.
     * @param {string} fileName The name of the audio file to create (can include a relative path).
     * @param {string} [language='en'] The language of the text (ISO 639-1 code) (optional, default is English 'en').
     * 
     * @returns {Promise<string>} A promise that resolves with the file path when the audio file is created.
     * 
     * - Supported Languages
     *  - af - Afrikaans
     *  - sq - Albanian
     *  - de - German
     *  - ar - Arabic
     *  - bn - Bengali
     *  - my - Burmese
     *  - bs - Bosnian
     *  - bg - Bulgarian
     *  - km - Cambodian
     *  - kn - Kannada
     *  - ca - Catalan
     *  - cs - Czech
     *  - zh - Simplified Chinese
     *  - zh-TW - Traditional Chinese
     *  - si - Sinhalese
     *  - ko - Korean
     *  - hr - Croatian
     *  - da - Danish
     *  - sk - Slovak
     *  - es - Spanish
     *  - et - Estonian
     *  - fi - Finnish
     *  - fr - French
     *  - el - Greek
     *  - gu - Gujarati
     *  - hi - Hindi
     *  - nl - Dutch
     *  - hu - Hungarian
     *  - id - Indonesian
     *  - en - English
     *  - is - Icelandic
     *  - it - Italian
     *  - ja - Japanese
     *  - la - Latin
     *  - lv - Latvian
     *  - ml - Malayalam
     *  - ms - Malay
     *  - mr - Marathi
     *  - ne - Nepali
     *  - no - Norwegian
     *  - pl - Polish
     *  - pt - Portuguese
     *  - ro - Romanian
     *  - ru - Russian
     *  - sr - Serbian
     *  - sw - Swahili
     *  - sv - Swedish
     *  - su - Sundanese
     *  - tl - Tagalog
     *  - th - Thai
     *  - ta - Tamil
     *  - te - Telugu
     *  - tr - Turkish
     *  - uk - Ukrainian
     *  - ur - Urdu
     *  - vi - Vietnamese
    */
    export function createAudioFile(text: string, fileName: string, language?: string): Promise<string>;

    /**
     * Gets an mp3 audio buffer from text.
     *
     * @param {string} text The text to convert to audio.
     * @param {string} [language='en'] The language of the text (ISO 639-1 code) (optional).
     * 
     * @returns {Promise<Buffer>} A promise that resolves with the mp3 audio buffer.
     * 
     * - Supported Languages
     *  - af - Afrikaans
     *  - sq - Albanian
     *  - de - German
     *  - ar - Arabic
     *  - bn - Bengali
     *  - my - Burmese
     *  - bs - Bosnian
     *  - bg - Bulgarian
     *  - km - Cambodian
     *  - kn - Kannada
     *  - ca - Catalan
     *  - cs - Czech
     *  - zh - Simplified Chinese
     *  - zh-TW - Traditional Chinese
     *  - si - Sinhalese
     *  - ko - Korean
     *  - hr - Croatian
     *  - da - Danish
     *  - sk - Slovak
     *  - es - Spanish
     *  - et - Estonian
     *  - fi - Finnish
     *  - fr - French
     *  - el - Greek
     *  - gu - Gujarati
     *  - hi - Hindi
     *  - nl - Dutch
     *  - hu - Hungarian
     *  - id - Indonesian
     *  - en - English
     *  - is - Icelandic
     *  - it - Italian
     *  - ja - Japanese
     *  - la - Latin
     *  - lv - Latvian
     *  - ml - Malayalam
     *  - ms - Malay
     *  - mr - Marathi
     *  - ne - Nepali
     *  - no - Norwegian
     *  - pl - Polish
     *  - pt - Portuguese
     *  - ro - Romanian
     *  - ru - Russian
     *  - sr - Serbian
     *  - sw - Swahili
     *  - sv - Swedish
     *  - su - Sundanese
     *  - tl - Tagalog
     *  - th - Thai
     *  - ta - Tamil
     *  - te - Telugu
     *  - tr - Turkish
     *  - uk - Ukrainian
     *  - ur - Urdu
     *  - vi - Vietnamese
    */
    export function getAudioBuffer(text: string, language?: string): Promise<Buffer>;
}