


let currentDate = new Date();
let datesContainer = document.querySelector('#datesContainer')
for(let i = 0; i < daysInMonth.length; i++) {
  let newDayEl = document.createElement("li");
  newDayEl.id = daysInMonth[i];
  newDayEl.innerText = daysInMonth[i];
  newDayEl.classList.add('dates');
  datesContainer.appendChild(newDayEl);
}

const getFebDays = (year) => {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return 29;
  } else {
    return 28;
  }
};

let dayOfMonth = [31,getFebDays(year),31,30,31,30,31,31,30,31,30,31,];


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

