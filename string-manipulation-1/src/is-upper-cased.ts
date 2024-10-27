/* exported isUpperCased */
function isUpperCased(str: string): boolean {
  if (str === str.toUpperCase()) {
    return true;
  }
  return false;
}
