export const nlpInputDelay = (ms: number) =>
    new Promise<void>(resolve => setTimeout(resolve, ms));