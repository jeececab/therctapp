
function getDates(startDate, daysToAdd) {
  const datesArray = [];
  for (let i = 0; i <= daysToAdd; i++) {
    const currentDate = new Date();
    currentDate.setDate(startDate.getDate() + i);
    datesArray.push(currentDate.getDate());
  };
  return datesArray;
}

export const datesView = () => {
  const date = new Date();
  let startDate;
  if (date.getDay() === 6) {
    startDate = date;
  } else {
    date.setDate(date.getDate() + (6 - date.getDay()));
    startDate = date;
  };
  const datesArray = getDates(startDate, 118);
  for(let i = 0; i <= 118; i++) {
    let day = document.querySelector(`.day-${i}`);
    day.insertAdjacentHTML('afterbegin', `<p class="date">${datesArray[i]}</p>`);
  };
};
