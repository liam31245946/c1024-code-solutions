/* exported reverseWord */
function reverseWord(words: any): string {
  let word = '';
  for (let i = words.length - 1; i >= 0; i--) {
    word += words[i];
  }
  return word;
}
