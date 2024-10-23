class Delimeter {
  delimeter = [];

  customFormat = [];

  constructor(delimeter1, delimeter2) {
    this.delimeter.push(delimeter1);
    this.delimeter.push(delimeter2);
  }

  setCustomFormat(start, end) {
    this.customFormat.push(start);
    this.customFormat.push(end);
  }

  parseCustomDelimeter(string) {
    const escapedCustomFormat = this.customFormat.map((customFormat) =>
      this.escapeRegExp(customFormat),
    );
    const customRegExp = new RegExp(
      `^${escapedCustomFormat[0]}.${escapedCustomFormat[1]}`,
    );

    const parsedData = string.match(customRegExp);
    if (parsedData === null) return string;

    this.delimeter.push(this.getCustomDelimeter(parsedData[0]));

    return string.replace(customRegExp, '');
  }

  getCustomDelimeter(string) {
    const customDelimeter = string.charAt(2);

    if (isNaN(customDelimeter) === false && customDelimeter !== ' ') {
      throw new Error(
        `[ERROR] 커스텀 구분자는 숫자가 아닌 문자로 설정되어야 합니다.`,
      );
    }

    return customDelimeter;
  }

  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  getregExp() {
    const escapedDelimeter = this.delimeter.map((delimeter) =>
      this.escapeRegExp(delimeter),
    );
    const regExpString = escapedDelimeter.join('|');

    return new RegExp(regExpString, 'g');
  }
}

export default Delimeter;
