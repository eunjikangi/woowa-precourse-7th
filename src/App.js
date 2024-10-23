import { Console } from '@woowacourse/mission-utils';
import NumberExtractor from './NumberExtractor.js';
import Calculator from './Calculator.js';

class App {
  userInputData;

  isEmpty() {
    return !!(this.userInputData === null || this.userInputData === undefined);
  }

  async getUserInputData() {
    this.userInputData = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n',
    );

    if (this.isEmpty() === true)
      throw new Error(`[ERROR] 입력 오류가 발생했습니다.`);
  }

  async run() {
    await this.getUserInputData();

    const numberExtractor = new NumberExtractor(this.userInputData);
    const numArr = numberExtractor.extractNumber();

    const calcultor = new Calculator(numArr);
    const result = calcultor.addAllNum();

    Console.print(`결과 : ${result.toString()}`);
  }
}

export default App;
