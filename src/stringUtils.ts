export const capitalize = (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1);

export const truncate = (str: string, length: number): string =>
    str.length > length ? str.substring(0, length) + '...' : str;
