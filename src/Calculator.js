class Calculator {
  numArr;

  constructor(numArr) {
    this.numArr = numArr;
  }

  addAllNum() {
    return this.numArr.reduce((acc, num) => acc + BigInt(num), BigInt(0));
  }
}

export default Calculator;
