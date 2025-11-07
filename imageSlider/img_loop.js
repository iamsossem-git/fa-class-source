const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const sliderElem = document.querySelector('.slider');
let count = 0;

//next버튼을 클릭했을 때
nextBtn.addEventListener('click',()=>{
  if( count>= 4 ) {return;}
  count++;
  //sliderElem의 위치값 변경 : left:-100%
  sliderElem.style.left = `-${count*100}%`;
});