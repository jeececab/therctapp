
export const datesView = season => { 
  for(let i = 0; i < season.length; i++) {
    let day = document.querySelector(`.day-${i}`);
    day.insertAdjacentHTML('afterbegin', `<p class="season__date">${season[i].date}</p>`);
  };
}
