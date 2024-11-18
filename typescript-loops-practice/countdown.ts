/* exported countdown */
function countdown(number: number): any {
  const num = [];
  for (let i = number; i >= 0; i--) {
    num.push(i);
  }
  return num;
}
