
let exercisesList;

$.ajax({
  url: 'http://localhost:8080/ajax/exercisesList.json',
  type: 'get',
  dataType: 'html',
  async: false,
  success: data => {
    exercisesList =  JSON.parse(data);
  }
});


//Cycle through exercises to get the exercise-object by giving a matching id
export const exerIDtoObj = id => {
  let exer;
  exercisesList.forEach(el => {
    if (el.id === id) {
      exer = el;
    };
  });
  return exer;
};

// Get exercises list by phase
export const getExerciseList = phase => {
  let array = [];
  exercisesList.forEach(el => {
    if (el.type.includes(`${phase}-p`) || el.type.includes(`${phase}-s`)) {
      array.push(el);
    };
  });
  return array;
};

// Takes an ID and cycles through exercisesList to return the title of the corresponding exercise
export const formatExerName = (id)  => {
  let title;
  exercisesList.forEach(el => {
    if (id === el.id) {
      title = el.title;
    }
  });
  return title;
};