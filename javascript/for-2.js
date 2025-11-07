/**
 * 배열과 같이 사용이 되는 for
 * for-of문
 */
let colors = ['red','green','blue'];
/**
 * color-1 : red      0  colors[0]
 * color-2 : green    1  colors[1]
 * color-3 : blue     2  colors[2]
 */
// for ( let i=0 ; i<colors.length ; i++ ){
//     console.log( `color-${i+1} : ${colors[i]}`);
// }
for( let color of colors){
    console.log( `색상 : ${color}` );
}

/**
 * 객체 : 모든 사물
 *        키:값,(프로퍼티)
 */
let user = {
    user_name : '홍길동',
    age: 30,
    job: '의적'
};
// console.log( user.job );
/**
 * for-in
 */
// for( let key in user ){
//     console.log( user[key] );
// }

// 문자열 : 문자들의 결합 h+e+l+l+o
// 문자열은 배열로 처리 가능
let txt = 'hello';
console.log( txt[1] );