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
