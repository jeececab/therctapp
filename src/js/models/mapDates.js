
export let calStartDate;
export let trainingStartDate;

export const setStartDate = e => {
  const dateArr = e.target.value.split('/');
  for (let i = 0; i < dateArr.length; i++) {
    if (dateArr[i][0] === '0') {
      dateArr[i] = dateArr[i].slice(1, 2);
    };
  };
  const year = dateArr[2] - 0;
  const month = dateArr[0] - 1;
  const day = dateArr[1] - 0;
  trainingStartDate = new Date(year, month, day);
  if (trainingStartDate.getDay() === 0) {
    calStartDate = trainingStartDate;
  } else {
    calStartDate = new Date();
    calStartDate.setDate(trainingStartDate.getDate() - trainingStartDate.getDay());
  };
};

const getDates = daysToAdd => {
  const datesArray = [];
  for (let i = 0; i <= daysToAdd; i++) {
    const newDate = new Date();
    newDate.setDate(calStartDate.getDate() + i);
    datesArray.push([newDate.getFullYear(), newDate.getMonth(), newDate.getDate()]);
  };
  return datesArray;
}

export const mapDates = season => {
  const datesArray = getDates(season.length);
  for(let i = 0; i < season.length; i++) {
    season[i].date = datesArray[i];
  };
};




