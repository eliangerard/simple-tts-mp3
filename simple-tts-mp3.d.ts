declare module 'simple-tts-mp3' {
    export function createAudioFile(text: string, fileName: string, language?: string): void;
    export function getAudioBuffer(text: string, language?: string): Promise<Buffer>;
}