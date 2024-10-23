class Calculator {
  numArr;

  result;

  constructor(numArr) {
    this.numArr = numArr;
    this.result = BigInt(0);
  }

  addAllNum() {
    return this.numArr.reduce((acc, num) => acc + BigInt(num), BigInt(0));
  }
}

export default Calculator;
