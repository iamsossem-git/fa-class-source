const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const sliderElem = document.querySelector('.slider');
let count = 0;

//next버튼 처리될 때 실행되는 함수
const handleNextClick = ()=>{
  if( count>= 5 ) {
    return;
  }
  count++;
  //sliderElem의 위치값 변경 : left:-100%
  sliderElem.style.transition = '0.5s';
  sliderElem.style.left = `-${count*100}%`;
}
//next버튼을 클릭했을 때
nextBtn.addEventListener('click',handleNextClick);

//css에서 트랜지션이 끝났을 때 발생되는 이벤트
//transitionend
sliderElem.addEventListener('transitionend',()=>{
  //순간 이동처리 마지막 count 5가 되면 첫번째로
  if( count === 5 ){
    sliderElem.style.transition = 'none';
    count = 0;
    sliderElem.style.left = `-${count*100}%`; 
  }
});

//시작되자마자 실행되는 함수
const init = ()=>{
  //슬라이더 width값을 변경
  sliderElem.style.width = '1800px';
  //맨 뒤에 1번을 복제해서 추가
  const firstClone = sliderElem.children[0].cloneNode(true);
  sliderElem.append(firstClone);

  //무한반복 실행
  setInterval(handleNextClick, 1000 );
}

init();//시작되면 바로 함수 호출