/**
 * 반복문 : 코드를 원하는 횟수만큼 반복
 * for, for-in, for-of
 * Array객체-map, foreach, filter.... 
 * while, do-while
 */
//배열,객체,함수--->  object(간접참조)
//배열 : 변수명 = [값1,값2,값3,값4......값n]
//               변수명[0], 변수명[2]......변수명.length-1
let a = [1,2,3,4,5,6];
// console.log( a[0] );  //1
// console.log( a[1] );  //2
// console.log( a[2] );  //3
// console.log( a[3] );  //4
// console.log( a[4] );  //5
// console.log( a[5] );  //6
// //console.log( a[ n ] );
// console.log( "a의 데이터 갯수", a.length );

/**
 * for(초기값;조건식;증감식){
 *   반복되는 문장
 * }
 */

// for( let i=0; i<6; i++ ){
//     console.log( `a[${i}]=${a[i]}` );
// }

/**
 * 1.  1~5까지 출력
 * 반복문-1번째
 * 반복문-2번째
 * 반복문-3번째
 * ..
 * 반복문-5번째
 */
for( let i=1; i<=5; i++){
    console.log(`반복문-${i}번째`);
}

/***
 * 1~10까지 숫자를 출력해 주세요.
 */
for( let i=1; i<11 ; i++ ){
    console.log(i);
}

/***
 * 'Hello, JS를 5번 출력하세요.
 */
for( let i=0; i<5; i++ ){
    console.log( 'Hello, js' );
}

/***
 * 1~10사이의 짝수만 출력하세요.
 * 2,4,6,8,10
 */
// for( let i=2; i<11 ; i+=2 ){
//     console.log(i);
// }
for( let i=1 ; i<11 ; i++ ){
    if( i%2 === 0 ){
        console.log(i);
    }
}

/***
 * 카운트 : 5
 * 카운트 : 4
 * 카운트 : 3
 * 카운트 : 2
 * 카운트 : 1
 */
for( let i=5; i>=1; i-- ){
    console.log( `카운트 : ${i}` );
}

/**
 * 1~10까지의 합을 구하세요.
 * 1+2+3+4+5+6+7+8+9+10
 */
let sum = 0;
for( let i=1; i<11 ; i++ ){
    sum += i;
}
console.log( "1부터 10까지의 합 : ", sum );

/**
 * for문을 이용해서
 * 3단 출력
 * 3 * 1 = 3
 * 3 * 2 = 6
 * ...
 * 3 * 9 = 27
 */
for( let i=1; i<10 ; i++ ){
    console.log( `3 * ${i} = ${3*i}` );
}

/***
 * 2~9단까지 출력
 * 2 * 1 = 2    3*1=3    4*1=4
 * 2 * 2 = 4
 * 2 * 3 = 6
 */
for( let i=2 ; i<10 ; i++ ){
    for( let j=1 ; j<10 ; j++){
        console.log( `${i} * ${j} = ${i*j}` );
    }
    console.log( '--------------');
}

