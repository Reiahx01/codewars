const spinWords = (words: string): string => {
    return words.replace(/\w{5,}/g, word => word.split('').reverse().join(''))
}