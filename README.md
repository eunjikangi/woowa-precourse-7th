# javascript-calculator-precourse

## 프로그램 설명
입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현한다.

쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.

예: "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6
앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.

예를 들어 "//;\n1;2;3"과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.
사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

## 입출력 요구 사항
#### 입력
* 구분자와 양수로 구성된 문자열
#### 출력
* 덧셈 결과

#### 실행 결과 예시
<pre><code>덧셈할 문자열을 입력해 주세요.
1,2:3
결과 : 6
</pre></code>


## 기능 목록
### 사용자 입력
* 한 줄로 사용자 문자열을 입력 받는다. 

### 구분자 처리
* ',' 또는 '|' 를 구분자로 처리한다.
* 커스텀 구분자를 구분자로 처리한다.

### 숫자 추출
* 구분자를 사용하여 숫자를 추출한다.

### 숫자 연산
* 추출된 숫자를 더해준다.


## 예외 처리
각 상황에 맞는 msg를 "[ERROR]-msg" 형식으로 출력해주고 error를 발생시킨다.
1) 구분자 이외의 문자가 들어오는 경우
2) "//" 와 "\n" 짝이 맞지 않는 경우
3) "//" 와 "\n" 사이에 '문자'가 아닌 '문자열'이 들어간 경우
4) 커스텀 구분자가 문자열의 앞부분에 들어오지 않는 경우
5) 커스텀 구분자가 중복해서 들어오는 경우