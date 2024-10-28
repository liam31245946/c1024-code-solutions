/* exported toObject */
function toObject(keyValuePairs: [string, any]): any {
  const [key, value] = keyValuePairs;
  return { [key]: value };
}
