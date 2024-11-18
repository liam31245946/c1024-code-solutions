/* exported getWords */
function getWords(str: string): string[] {
  if (str === '') {
    return [];
  }
  return str.split(' ');
}
