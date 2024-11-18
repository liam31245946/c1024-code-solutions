'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const word = [];
  for (let i = 0; i < words.length; i++) {
    word.push(words[i] + suffix);
  }
  return word;
}
