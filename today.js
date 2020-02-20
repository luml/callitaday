let aDay = new Date();
const daysArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

document.querySelector("code").innerHTML = daysArr[aDay.getDay()];
const hours = aDay.getHours();
switch(hours < 12) {
  case true:
    document.querySelector("code.hours").innerHTML = "Good Morining"
    break
  case false:
    document.querySelector("code.hours").innerHTML = "Good Afteroon"
    break
  default:
    document.querySelector("code.hours").innerHTML = "Good Day"
}

