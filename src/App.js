import { Console } from '@woowacourse/mission-utils';
import NumberExtractor from './NumberExtractor.js';
import Calculator from './Calculator.js';

function generateError(errorMsg) {
  throw new Error(`[ERROR] ${errorMsg}`);
}

function isEmpty(string) {
  return !!(string === null || string === undefined);
}

async function getUserInputData() {
  const userInputData = await Console.readLineAsync(
    '덧셈할 문자열을 입력해 주세요.\n',
  );
  if (isEmpty(userInputData) === true)
    generateError('입력 오류가 발생했습니다.');
  return userInputData;
}

class App {
  async run() {
    const userInput = await getUserInputData();

    const numberExtractor = new NumberExtractor(userInput);
    const numArr = numberExtractor.extractNumber();

    const calcultor = new Calculator(numArr);
    const result = calcultor.addAllNum();

    Console.print(`결과 : ${result.toString()}`);
  }
}

export default App;
