const bodyEl = document.querySelector('body');
const btnStartEl = document.querySelector('[data-start]');
const btnStopEl = document.querySelector('[data-stop]');

let timerId;
btnStopEl.disabled = true;

btnStartEl.addEventListener(`click`,onStartClick);
btnStopEl.addEventListener(`click`,onStopClick);

function onStartClick(){
    onButtonActive();
    timerId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();
      }, 1000);
}
function onStopClick(){
    btnStartEl.disabled = false;
    btnStopEl.disabled = true;
    clearInterval(timerId);
}

