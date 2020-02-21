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
const list = aDay.toLocaleString().split(' ')
const T = list[list.length - 1];

switch(T) {
  case "AM":
    document.querySelector("code.hours").innerHTML = "Good Morining"
    break
  case "PM":
    document.querySelector("code.hours").innerHTML = "Good Afteroon"
    break
  default:
    document.querySelector("code.hours").innerHTML = "Good Day"
}
 
// which month
const M = list[0].split("/")[0];
document.querySelector("code.month").innerHTML = "We're in month " + M;


