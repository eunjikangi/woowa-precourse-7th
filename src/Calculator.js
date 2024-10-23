class Calculator {
  numArr;

  result;

  constructor(numArr) {
    this.numArr = numArr;
    this.result = BigInt(0);
  }

  addAllNum() {
    this.result = this.numArr.reduce((acc, num) => acc + num, 0);
  }
}

export default Calculator;
