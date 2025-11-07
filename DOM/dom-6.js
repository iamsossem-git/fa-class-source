/**
 * 상품 수량 조절 기능 만들기
 * MAX_LEN 은 10으로 설정합니다.
 * 1. 상품 수량은 1~MAX_LEN사에서만 변경이 가능합니다.
 * 2. 초기 수량은 1로 설정합니다.
 * 3. (-) 버튼을 누르면 수량이 1씩 감소
 *    (+) 버튼을 누르면 수량이 1씩 증가
 * 4. 수량이 1일 때는 (-)버튼을 비활성화 합니다.
 * 5. 수량이 MAX_LEN일 때는 (+)버튼을 비활성화 합니다.
 */
const MAX_LEN = 10;
//요소선택
//p태그요소
const pElem = document.querySelector('.product>p');
//-버튼 요소
const minusElem = document.querySelector('.product>button:nth-child(1)');
//처음값이 1이기 때문에 - 버튼은 비활성화
minusElem.disabled = true;
//+버튼 요소
const plusElem = document.querySelector('.product>button:nth-child(3)');

//2~4번까지의 이미지 객체를 가져오기
const imgElem = document.querySelectorAll('aside>img');
console.log( imgElem );

//변수선언
let count = 1;
//+버튼을 눌렀을 때 p태그에 있는 숫자가 1씩 증가
plusElem.onclick = ()=>{    
    //- 버튼의 비활성화 해제
    minusElem.disabled = false;
    //1씩 증가 : count
    count++;
    //p태그의 숫자값을 바꿔줘야 함
    pElem.textContent = `${count}`;
    //count값 MAX_LEN과 같다면 되면 +버튼이 비활성화
    if( count === MAX_LEN ){
        plusElem.disabled = true;
    }    
}

// - 버튼을 누르면 count값이 1씩 감소
minusElem.onclick = ()=>{
    //+버튼을 활성화
    plusElem.disabled = false;
    //count값을 1씩 감소
    count--;  
    //p태그의 숫자값을 바꿔줘야 함
    pElem.textContent = `${count}`;  
    //count값이 1과 같다면 -버튼을 비활성화
    if( count === 1 ){
        minusElem.disabled = true;
    }

}

/***
 * imgElem : img객체가지고 왔음
 * imgElem 배열 : 0~2번까지 하나씩 읽어들여서 onclick처리
 */
for( let i=0 ; i<imgElem.length ; i++ ){
    imgElem[i].onclick = ()=>{
        //1번 이미지의 src가 바뀌어야 함.
        const elem = document.querySelector('main>img');
        // elem.src = `./images/img-0${i+2}.png`;
        elem.setAttribute('src',`./images/img-0${i+2}.png`);
    }
}

/***
 * 상세설명보기 버튼을 누르면 아래 내용이 보이기
 */
//버튼 요소 가져오기
const detailBtn = document.querySelector('#detail>button');
// 텍스트 영역 가져오기
const detailTxt = document.querySelector('#detail>.txt');
//버튼을 클릭해서 텍스트 영역을 보이게
detailBtn.onclick = ()=>{
    // detailTxt.style.display = 'block';    
    detailTxt.classList.toggle('hide');
    //버튼에 글씨가 상세설명보기면 상세설명닫기 변경을 하고
    // 상세설명닫기면 --> 상세설명보기로 변경
    const btnTxt = detailBtn.textContent;
    if( btnTxt === '상세설명보기' ){
        detailBtn.textContent = '상세설명닫기';
    } else {
        detailBtn.textContent = '상세설명보기';
    }
}

