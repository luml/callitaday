class timeFormating {
  constructor() {
    this.days = [
      ["Sunday",
      "Monday",],
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
    this.day = new Date()
  }

  getAday() {
    return this.days.flat(Infinity)[this.day.getDay()]
  }
}


// morining or afternoon, Infinity is flat() parameter depth
const tooday = new timeFormating()
const today = tooday.getAday()
document.querySelector("code").innerHTML = today
const [a,b,...c] = tooday.day.toLocaleString().split(' ')

const hourDom = document.querySelector("code.hours")
switch(c[0]) {
  case "AM":
    hourDom.innerHTML = `Good Morining`
    break
  case "PM":
    const d = b.split(":")[0];
    switch(d > 7){
      case true:
        hourDom.innerHTML = `Good Evening`
        break;
      default:
        hourDom.innerHTML = `Good Afternoon`
    }
    break
  default:
    hourDom.innerHTML = `Good Day`
}
 
// which month
const M = a.split("/")[0];
document.querySelector("code.month").innerHTML = `We're in month ${M}`;

// mins
const Mins = b
document.querySelector("code.mins").innerHTML = Mins

// TODO smoothly replace the body.style.background
document.querySelector(".picture>div").addEventListener('click', function () {
  this.style.transform = `scaleX(1.2) scaleY(1.2)`
})
