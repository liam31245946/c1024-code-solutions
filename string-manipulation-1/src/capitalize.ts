/* exported capitalize */
function capitalize(str: string): string {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}