


let currentDate = new Date();
let daysInMonth = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let datesContainer = document.querySelector('#datesContainer')
for(let i = 0; i < daysInMonth.length; i++) {
  let newDayEl = document.createElement("li");
  newDayEl.id = daysInMonth[i];
  newDayEl.innerText = daysInMonth[i];
  newDayEl.classList.add('dates');
  datesContainer.appendChild(newDayEl);
}


let monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

