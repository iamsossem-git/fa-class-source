/**
let 변수명; //변수를 선언
*/
/**
 function 함수명(){
    실행된 문장;
 }
    //화살표 함수 : ES6 표준 
 let (or) const 함수명 = ()=>{
        실행된 문장;
    }
 */

//함수호출
myFunc();

//함수정의
function myFunc(){
    console.log( "함수실행" );
}
//변수에 저장
// let myFunc2 = function(){
//     console.log( "func2 실행" );
// }
const myFunc2 = ()=>{
    console.log( "함수2 실행" );
}

// myFunc2();
// myFunc2();
// myFunc2();
// myFunc2();
// myFunc2();

/**
 * 함수 : 인수, 매개변수, return;
 */
/**
 * 홍길동님 안녕하세요
 * 춘향이님 안녕하세요
 * 개똥이님 안녕하세요
  */
const welcome = (text)=>{
    console.log(text+'님 안녕하세요');
}
welcome("홍길동");
welcome("춘향이");

/**
 * 두 수를 전달받아서 합을 구하는 함수
 */
const add = (a=8,b=7)=>{
    let sum = a+b;
    console.log( "두수의 합은 " + sum );
}
add(5,8);
add(2,4);
add(5);  //5+7
add();
add(7,13);

/**
 * return : 값을 되돌려주는 역할, 종료
 */
//두 수의 곱을 전달
let calc = (a,b)=>{
    let data = a*b;
    return data;
}
let result = calc(5,6);
console.log( result );

//익명함수(즉시실행함수) : 이름이 없는 함수
(()=>{
    console.log( "이름없는 익명함수" );
})();

//콜백함수 : 인자로 함수가 사용되는 경우
const greet = (callback)=>{
    console.log( "안녕하세요!" );
    callback();
}
greet(()=>{
    console.log( "콜백함수 실행!!!" );
});

//10초 뒤에 실행
setTimeout(()=>{
    console.log( "10초뒤에 실행!~!" );
},10000);