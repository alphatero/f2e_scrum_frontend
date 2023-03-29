export function calculateSum(val: number[]) {
  return val.reduce((acc: number, value: number) => acc + value, 0);
}

export default calculateSum;
