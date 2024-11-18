/* exported filterOutNulls */
function filterOutNulls(values: any[]): any {
  const value = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      value.push(values[i]);
    }
  }
  return value;
}
