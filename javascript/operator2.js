/**
 * 문자열 연결
 * 
 */
let a="hello";
let b="javascript";
console.log( a+b );

a="10";
b="20";
console.log( a+b ) ;

a="20";
b=30;
console.log( a+b ); //2030  
//문자열 + 숫자 = 문자열

// " ", ' ', ` `
let user = "홍길동";
//안녕하세요. 홍길동님
console.log( "안녕하세요. " + user + "님" );
console.log( `안녕하세요. ${user}님` );

let msg = `여
러
줄
을
쓸
수
있
어
요`;
console.log( msg );

let i=5, j=3;
// i + j = 8 (+)
console.log( "i + j =" + (i+j));
console.log( `i + j = ${i+j}` );

