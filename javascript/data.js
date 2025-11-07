/**
 * + , -, * , / , %
 * ++A, A--
 * &&(그리고), ||(또는), !(반대)
 */

let a=20;
b = a++;
console.log( b );  //20
console.log( a );  //21

b = --a;
console.log( b );  //20
console.log( a );  //20

a=a++;
console.log( a ); //20

let isLogin = false;
isLogin && console.log( "로그인을 했습니다" );

let isEmail = true;
isEmail || console.log( "이메일입력!" );

let userName = "";  //0, null, '',false, undefined
let displayName = userName || "Guest";
console.log(displayName);
