// figure out if the year is leap year so a value of 29 or 28 can be assigned for February
const isLeapYear = (year) => {
  if((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
  return true;
  } else {
  return false;
  }
  };
  const getFebDays = (year) => {
  if(isLeapYear(year)) {
  return 29;
  } else {
  return 28;
  }
  };

// Setting some innerHTML values and creating variables for initial declarations
const generateCalendar = (month, year) => {
  let datesContainer = document.querySelector("#datesContainer")  // Initially sets the #datesContainer to empty
  datesContainer.innerHTML = ""
  let currentYear = document.querySelector("#currentYear")  // Sets #currentYear to year from the Date()
  currentYear.innerHTML = year;  // initially sets #currentYear to the current month retreived from the Date()
  let daysOfMonth = [31,getFebDays(year),31,30,31,30,31,31,30,31,30,31,]  // An array of the total number of days for each month; used for the for loop when creating .dates tiles
  let currentDate = new Date()  // new Javascript Date constructor results in current time/date
  let firstDay = new Date(year, month)

  // Runs a loop that will generate li items for each day in the month;  also, the current day for unique css styling so it stands out
  for (let i = 0; i <= daysOfMonth[month] + firstDay.getDay() - 1; i++) {  // [month] is index value for month [0] - [11]; .getDay returns the day of the week [0] - [6]
    let day = document.createElement("li");  // Since I started the html with an unordered list, creating li child elements when appended
    day.classList.add("dates");  // adding the dates class to each appended element
    if (i >= firstDay.getDay()) {  // Check if the current iteration is greater than or equal to the current day of the week
      day.innerHTML = i - firstDay.getDay() + 1; // Set the inner HTML of the "li" element to the current day of the month [i] + 1 in the iteration
      if (i - firstDay.getDay() + 1 //Check if the current day, month, and year match the current date
        === currentDate.getDate() &&  
        year === currentDate.getFullYear() &&
        month === currentDate.getMonth()
      ) {
        day.classList.add("todayDates");  // if the current day/month/year match this date then todayDates class will be added to this li element
      }
    }
    datesContainer.appendChild(day);  // each iteration created li element is added to the datesContainer
  }
};

// MONTH AND YEAR SELECTORS
let currentDate = new Date();  // new date()
let currentMonth = { value: currentDate.getMonth() };  // grabs the current month as an index value from the date()
let currentYear = { value: currentDate.getFullYear() };  // grabs the current year from the date()
let monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];  // an array of months, to assign to index values later on
generateCalendar(currentMonth.value, currentYear.value);

// YEAR
document.querySelector("#previousYear").onclick = () => {
  --currentYear.value;  // when #previousYear is clicked, the displayed year is decremented
  generateCalendar(currentMonth.value, currentYear.value);
};
document.querySelector("#nextYear").onclick = () => {
  ++currentYear.value;  // when #nextYear is clicked, the displayed year is incremented
  generateCalendar(currentMonth.value, currentYear.value);
};

// MONTH
document.querySelector("#previousMonth").onclick = () => {
  --currentMonth.value;  // when #previousMonth is clicked, the displayed month index is decremented
  if (currentMonth.value < 0) {  // if at [0] (January), and decremented, 
    currentMonth.value = 11;  // the value resets to [11] (December)
    --currentYear.value;
  }
  document.querySelector("#currentMonth").innerHTML = monthNames[currentMonth.value]; // choses the selected index value and assigns the corresponding month from the array
  generateCalendar(currentMonth.value, currentYear.value);
};
document.querySelector("#nextMonth").onclick = () => {
  ++currentMonth.value;  // when #nextMonth is clicked, the displayed month index is incremented
  if (currentMonth.value > 11) {  // if at [11] (December), and incremented, 
    currentMonth.value = 0;  // the value resets to [0] (January)
    ++currentYear.value;
  }
  document.querySelector("#currentMonth").innerHTML = monthNames[currentMonth.value];  // choses the selected index value and assigns the corresponding month from the array
  generateCalendar(currentMonth.value, currentYear.value);
};