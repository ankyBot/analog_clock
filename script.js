let secondHand = document.querySelector(".second");

let minuteHand = document.querySelector(".minute");

let hourHand = document.querySelector(".hours");

myClock = () => {
  let time = new Date();
  let second = time.getSeconds();
  let minute = time.getMinutes();
  let hours = time.getHours();

  let degSec = (second / 60) * 360 + 90;
  let degMin = (minute / 60) * 360 + 90;
  let degHrs = (hours / 60) * 360 + 90;

  secondHand.style.transform = `rotate(${degSec}deg)`;

  minuteHand.style.transform = `rotate(${degMin}deg)`;

  hourHand.style.transform = `rotate(${degHrs}deg)`;

  console.log(`${second}: ${minute} : ${hours}`);
};

setInterval(myClock, 1000);
