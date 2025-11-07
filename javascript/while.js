/**
 * for : 시작값과 종료값 반복이 몇번 된다는 조건이 있음
 *       반복 횟수를 알고 있는 상태
 * while, do-while : 언제 종료될지 모름
 *                   반복 횟수를 알지 미리 알지 못할 때
 * 무한반복 : 이 되지 않도록 반복문장안에 종료조건 꼭!! 줘야 함.
 * while(조건식){
 *      반복문장;
 * }
 * do{
 *  반복문장;
 * }while(조건식)
 */
// 1~5 까지 반복하면서
// 1번째 반복입니다를 출력
// 2번째 반복입니다를 출력
// 5번째 반복입니다를 출력
// for( let i=1; i<6 ; i++ ){
//     console.log( `${i}번째 반복입니다` );
// }

// let i=9;
// while(i<6){
//     console.log( `${i}번째 반복입니다` );
//     i++;
// }
// console.log( "종료" );

// let i=9;
// do{
//     console.log( `${i}번째 반복입니다` );
//     i++;
// } while(i<6);
// console.log( "종료" );

/**
 * break, continue;
 * i값을 하나씩 증가시켜 가면서 i=5가 되면 멈춤
 */
let i=0;
while(i<10){
    i++;    
    if( i === 5 ){
        // break;        
        continue;
        console.log( i );
    }
}
console.log( "종료" );


