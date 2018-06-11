
  // TODO: map complete date instead of just day date number

const getDates = (startDate, daysToAdd) => {
  const datesArray = [];
  for (let i = 0; i <= daysToAdd; i++) {
    const currentDate = new Date();
    currentDate.setDate(startDate.getDate() + i);
    datesArray.push([currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()]);
  };
  return datesArray;
}

export const mapDates = season => {
  const date = new Date();
  let startDate;
  if (date.getDay() === 6) {
    startDate = date;
  } else {
    date.setDate(date.getDate() + (6 - date.getDay()));
    startDate = date;
  };
  const datesArray = getDates(startDate, season.length);
  for(let i = 0; i < season.length; i++) {
    season[i].date = datesArray[i];
  };
};




