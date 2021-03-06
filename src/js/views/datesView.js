
const currentDate = new Date();
const formatedDate = [currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()];

export const datesView = season => { 
  for(let i = 0; i < season.length; i++) {
    let day = document.querySelector(`#day-${i}`);
    day.insertAdjacentHTML('afterbegin', `<p class="cell__date">${season[i].date[2]}</p>`);
    // Display current day
    if (season[i].date[1] === formatedDate[1] && season[i].date[2] === formatedDate[2]) {
      day.className += ' currentDay';
    };
  };
}
