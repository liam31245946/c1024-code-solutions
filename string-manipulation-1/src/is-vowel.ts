/* exported isVowel */
function isVowel(str: string): boolean {
  str = str.toLowerCase();
  if (str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u') {
    return true;
  }
  return false;
}
