/*
    직접참조형 : 값 자체가 메모리에 저장되는 자료형태
    자료형 : 변수에 저장되는 자료의 형태
    숫자형 (number) :  0~, -1아래
    문자열 (string) : 문자와 문자의 연결
    불린형 (boolean) : True/False , 참/거짓
    undefined : 변수를 선언하고 값을 지정하지 않았을 때
    null : 의도적으로 값이 없음 설정
*/
let text = '안녕하세요';  //문자열
let txtCopy = text;  //안녕하세요
// txtCopy = text;
text = '반갑습니다';
console.log( txtCopy );

let check = 100>30;
console.log( check );

//내장함수 사용하기
let data1 = Number("500");
console.log( data1 );
console.log( typeof data1 );

//boolean형태 확인
let data2 = Boolean(1);  //true
data2 = Boolean(0);  //false
data2 = Boolean(-1);  //true
data2 = Boolean('0');  //true
data2 = Boolean(' ');  //true
data2 = Boolean('');  //false
data2 = Boolean(null);  //false
data2 = Boolean(undefined);  //false
console.log( data2 );
