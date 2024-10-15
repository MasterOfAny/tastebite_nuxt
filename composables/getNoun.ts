export const getNoun = (number: number, one: string, two: string, five: string): string => {
    const n = number % 10;
    return n === 1 ? one : n >= 2 && n <= 4 ? two : five;
}
