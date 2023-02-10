let seconds = Number(document.getElementById('timer').textContent);
const startButton = document.getElementById('start_button');

function countDown(time){
  const timerId = setInterval(() => {
    time --;
    console.log(time);
    document.getElementById('timer').textContent = time;
    if(time <= 0){
      clearInterval(timerId);
      document.getElementById('timer').textContent = 0;
    }
  },1000);
};


startButton.addEventListener('click', () => {
  countDown(seconds);
  setTimeout(function(){
    alert('終了')
  }, seconds * 1000 + 1000);
});