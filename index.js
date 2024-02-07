let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");

let countdownTimer;

startBtn.addEventListener("click", function () {
  if (hour.value == 0 && minute.value == 0 && second.value == 0) return;

  function startInterval() {
    startBtn.style.display = "none";
    stopBtn.style.display = "initial";

    countdownTimer = setInterval(() => {
      timer();
    }, 1000);
  }

  startInterval();
});

stopBtn.addEventListener("click", function () {
  clearInterval(countdownTimer);
  startBtn.style.display = "initial";
  stopBtn.style.display = "none";
});

resetBtn.addEventListener("click", function () {
  clearInterval(countdownTimer);
  hour.value = 0;
  minute.value = 0;
  second.value = 0;
  startBtn.style.display = "initial";
  stopBtn.style.display = "none";
});

function timer() {
  if (second.value > 0) {
    second.value--;
  } else if (minute.value > 0) {
    minute.value--;
    second.value = 59;
  } else if (hour.value > 0) {
    hour.value--;
    minute.value = 59;
    second.value = 59;
  } else {

    clearInterval(countdownTimer);
    startBtn.style.display = "initial";
    stopBtn.style.display = "none";
    
  }
}
