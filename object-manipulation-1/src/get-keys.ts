/* exported getKeys */
function getKeys(objects: any): any {
  const keys: string[] = [];
  for (const key in objects) {
    keys.push(key);
  }
  return keys;
}
