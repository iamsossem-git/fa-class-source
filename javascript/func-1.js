/**
 * 함수 정의 -> 호출
 * const 함수명 = (매개변수1,매개변수2)=>{}
 * 함수명(인자,인자);
 * 인자(함수) => 콜백함수
 */
//전달받은 값을 다 더해서 다시 되돌려주는 함수
//인자갯수와 상관없이 다 전달 받을 경우에 ...
// const addNum = (a,b)=>{
//     return a+b;
// }
const addNum = (...numbers)=>{
    console.log( numbers ); //배열
    let total = 0;
    for( let n of numbers ){
        total += n;
    }
    return total;
}
// let result = addNum(5,6,7,8);
console.log( addNum(5,6,7,8) );
// ... 스프레드/레스트
const a = [1,2];
const b = [3,4];
const c = [...a,...b];
console.log( c );

const d = [10,8,7,6];
// const e = [...d];
const e = d;
d[0] = 9;
console.log(e);

//[10,20,30,40];
//first = 10;
//rest = [20,30,40];
const [first,...rest] = [10,20,30,40];
console.log( first );
console.log( rest );
            //f g h
const arr = [10,20,30];
// const f = arr[0];  //10
// const g = arr[1];  //20
// const h = arr[2];  //30
const [f,g,h] = arr;  //구조분해방식
console.log(f,g,h);

                //i            j
const colors = ['red','green','blue'];
const [i,,j] = colors;
console.log( i,j );

//함수를 이용한 구조분해
const printFirst = ([first])=>{
    console.log( first );
}
printFirst([100,200,300]);


