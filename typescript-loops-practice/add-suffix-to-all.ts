/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): string[] {
  const word: string[] = [];
  for (let i = 0; i < words.length; i++) {
    word.push(words[i] + suffix);
  }
  return word;
}
