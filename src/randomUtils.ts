export const generateUUID = (): string =>
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        return c === 'x' ? r.toString(16) : ((r & 0x3) | 0x8).toString(16);
    });

export const randomNumber = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;
