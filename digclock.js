//find elements
const hourEl = document.getElementById("hour");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  //get data for clock
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  //am/pm change
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  //add '0' if number is less than 10
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  //add data to elements in html
  hourEl.innerText = h;
  minEl.innerText = m;
  secEl.innerText = s;
  ampmEl.innerText = ampm;

  //call function every second
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
