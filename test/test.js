const { createAudioFile, getAudioBuffer } = require('../index.js');

const text = 'Hola mundo';
const fileName = 'output';

createAudioFile(text, fileName, 'es');
// const languageCodes = [
//     'af', 'sq', 'de', 'ar', 'bn', 'my', 'bs', 'bg', 'km', 'kn', 'ca', 'cs', 'zh', 'zh-TW', 'si', 'ko', 'hr', 'da', 'sk', 'es', 'et', 'fi', 'fr', 'el', 'gu', 'he', 'hi', 'nl', 'hu', 'id', 'en', 'is', 'it', 'ja', 'jv', 'la', 'lv', 'ml', 'ms', 'mr', 'ne', 'no', 'pl', 'pt', 'ro', 'ru', 'sr', 'sw', 'sv', 'su', 'tl', 'th', 'ta', 'te', 'tr', 'uk', 'ur', 'vi'
//   ];

// const languages = [
//     {"language": "af", "hello": "hallo"},
//     {"language": "sq", "hello": "përshëndetje"},
//     {"language": "de", "hello": "hallo"},
//     {"language": "ar", "hello": "مرحبا"},
//     {"language": "bn", "hello": "হ্যালো"},
//     {"language": "my", "hello": "ဟယ်လို"},
//     {"language": "bs", "hello": "zdravo"},
//     {"language": "bg", "hello": "здравейте"},
//     {"language": "km", "hello": "សួស្តី"},
//     {"language": "kn", "hello": "ಹಲೋ"},
//     {"language": "ca", "hello": "hola"},
//     {"language": "cs", "hello": "ahoj"},
//     {"language": "zh", "hello": "你好"},
//     {"language": "zh-TW", "hello": "你好"},
//     {"language": "si", "hello": "හෙලෝ"},
//     {"language": "ko", "hello": "안녕하세요"},
//     {"language": "hr", "hello": "zdravo"},
//     {"language": "da", "hello": "hej"},
//     {"language": "sk", "hello": "ahoj"},
//     {"language": "es", "hello": "hola"},
//     {"language": "et", "hello": "tere"},
//     {"language": "fi", "hello": "hei"},
//     {"language": "fr", "hello": "salut"},
//     {"language": "el", "hello": "γεια σου"},
//     {"language": "gu", "hello": "હેલો"},
//     {"language": "he", "hello": "שלום"},
//     {"language": "hi", "hello": "नमस्ते"},
//     {"language": "nl", "hello": "hallo"},
//     {"language": "hu", "hello": "szia"},
//     {"language": "id", "hello": "halo"},
//     {"language": "en", "hello": "hello"},
//     {"language": "is", "hello": "halló"},
//     {"language": "it", "hello": "ciao"},
//     {"language": "ja", "hello": "こんにちは"},
//     {"language": "jv", "hello": "halo"},
//     {"language": "la", "hello": "salve"},
//     {"language": "lv", "hello": "sveiki"},
//     {"language": "ml", "hello": "ഹലോ"},
//     {"language": "ms", "hello": "hai"},
//     {"language": "mr", "hello": "हॅलो"},
//     {"language": "ne", "hello": "नमस्कार"},
//     {"language": "no", "hello": "hallo"},
//     {"language": "pl", "hello": "cześć"},
//     {"language": "pt", "hello": "olá"},
//     {"language": "ro", "hello": "salut"},
//     {"language": "ru", "hello": "привет"},
//     {"language": "sr", "hello": "здраво"},
//     {"language": "sw", "hello": "hujambo"},
//     {"language": "sv", "hello": "hej"},
//     {"language": "su", "hello": "halo"},
//     {"language": "tl", "hello": "kamusta"},
//     {"language": "th", "hello": "สวัสดี"},
//     {"language": "ta", "hello": "வணக்கம்"},
//     {"language": "te", "hello": "హలో"},
//     {"language": "tr", "hello": "merhaba"},
//     {"language": "uk", "hello": "привіт"},
//     {"language": "ur", "hello": "ہیلو"},
//     {"language": "vi", "hello": "xin chào"}
// ]

//   languages.forEach( ({language, hello}) => {
//       createAudioFile(hello, "./lang-"+language, language);
//   })