let aDay = new Date();
// Which day
const daysArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

// morining or afternoon
document.querySelector("code").innerHTML = daysArr[aDay.getDay()];
const [a,b,...c] = aDay.toLocaleString().split(' ');

switch(c[0]) {
  case "AM":
    document.querySelector("code.hours").innerHTML = "Good Morining"
    break
  case "PM":
    const d = b.split(":")[0];
    switch(d > 7){
      case true:
        document.querySelector("code.hours").innerHTML = "Good Evening"
        break;
      default:
        document.querySelector("code.hours").innerHTML = "Good Afteroon"
    }
    break
  default:
    document.querySelector("code.hours").innerHTML = "Good Day"
}
 
// which month
const M = a.split("/")[0];
document.querySelector("code.month").innerHTML = "We're in month " + M;

// mins
const Mins = b
document.querySelector("code.mins").innerHTML = Mins


