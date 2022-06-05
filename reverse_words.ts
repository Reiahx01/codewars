export function reverseWords(str: string): string {
    // your code here
    return str.split('').reverse().join('').split(' ').reverse().join(' ');
  }