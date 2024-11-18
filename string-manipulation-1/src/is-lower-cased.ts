/* exported isLowerCased */
function isLowerCased(str: string): boolean {
  if (str === str.toLocaleLowerCase()) {
    return true;
  }
  return false;
}
