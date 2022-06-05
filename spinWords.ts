const spinWords = (words: string): string => {
    return words.replace(/\w{5,}/g, word => word.split('').reverse().join(''))
}

// 2nd possible solution

// const spinWords = (words: string): string => words.split(' ')
//                                                         .map(m => m.length >= 5 
//                                                              ? m.split('').reverse().join('') 
//                                                              : m)
//                                                         .join(' ')