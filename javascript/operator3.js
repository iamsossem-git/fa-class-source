/**
 * 삼항(조건)연산자
 * 항 ? 항1 : 항2
 * (조건식) ? true : false;
 */

let age = 25;
let result = (age>19) ? "성인입니다":"미성년자입니다";
console.log( result );

/**
 * 짝수와 홀수를 판별해서 2,3
 * 숫자 % 2 === 0 : 짝수, 홀수
 * -> 짝수는 "짝수" 출력, 
 * -> 홀수는 "홀수" 출력
 * 삼항 연산자 : True/False
 * 1. 변수를 선언하고 임의 수를 저장
 * 2. 짝수와 홀수를 판별(삼항연산자로)
 * 3. 참일 경우에는 "짝수" 변수에 저장
 * 4. 거짓일 경우에는 "홀수" 변수에 저장
 * 5. 변수를 출력( console.log )
 */
let num = 4;
let msg = (num%2===0) ? "짝수" : "홀수";
console.log( msg );

/**
 * 점수가 60점 이상이면 합격을 출력, 60점 미만이면 불합격 출력
 * (점수>=60)? "합격":"불합격"
 * 순서 
 * 1. score라는 변수를 선언하고 값을 저장
 * 2. 삼항연산자를 이용해서 연산을 하고 결과물을 출력
 * 3. console.log로 출력
 */
let score = 78;
console.log( score>=60 ? "합격":"불합격" );

/**
 * 숫자를 저장 후 저장된 숫자가
 * -> 0보다 크면 "양수"
 * -> 아니면 "0 또는 음수"를 출력
 * 출력은 변수에 저장하여 출력합니다.
 * (숫자>0) ? "양수" : "0 또는 음수"
 * 1. 숫자 변수를 선언 후 숫자를 저장
 * 1-1. 결과를 저장할 변수를 선언
 * 2. 조건을 이용해서 결과를 결과저장변수에 저장
 * 3. 결과저장변수를 출력
 */
let data = 7;
let result_data = (data>0) ? "양수" : "0 또는 음수";
console.log( result_data );

/**
 * 이름이라는 변수에 저장된 값이 빈 문자열이면 "이름없음", 
 * 값이 있으면 "이름 있음" 을 출력
 * "", ''
 */
let user_name = '';
// let result_name = (Boolean(user_name)) ? "이름있음" : "이름없음";
let result_name = (user_name) ? "이름있음" : "이름없음";
console.log( result_name );

//nullish 연산자 ??
//값이  null이거나 undefined 일 때 기본값을 설정
let data1 = "input data";
let result_data1 = data1 ?? "guest";
console.log( result_data1 );

//옵셔널 체이닝 연산자 ?.
//존재하지 않는 데이터가 있을 경우 오류 없이 처리
let data2 = null;
// console.log( data2.data );
console.log( data2?.data );  //undefined 처리로 처리




