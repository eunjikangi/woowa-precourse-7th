import Delimeter from './Delimeter.js';

class NumberExtractor {
  delimeterApi;

  orgUserInputData;

  userInputData;

  constructor(userInputData) {
    this.userInputData = userInputData;
    this.delimeterApi = new Delimeter(',', ':');
    this.delimeterApi.setCustomFormat('//', '\\n');
  }

  extractNumber() {
    console.log(this.userInputData);

    this.userInputData = this.delimeterApi.parseCustomDelimeter(
      this.userInputData,
    );
    this.splitByDelimeter();
    return this.userInputData;
  }

  splitByDelimeter() {
    this.userInputData = this.userInputData.split(
      this.delimeterApi.getregExp(),
    );
    this.errorHandling();
  }

  errorHandling() {
    const numRegExp = /\D/;
    const findChar = this.userInputData.find((element) =>
      numRegExp.test(element),
    );

    if (findChar !== undefined)
      throw new Error(`[ERROR] 구분자에 해당하지 않는 문자가 존재합니다.`);
  }
}

export default NumberExtractor;
