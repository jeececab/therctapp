
const config = {
  apiKey: "",
  authDomain: "the-rcta.firebaseapp.com",
  databaseURL: "https://the-rcta.firebaseio.com",
  projectId: "the-rcta",
  storageBucket: "the-rcta.appspot.com",
  messagingSenderId: "246890524940"
};

firebase.initializeApp(config);

export function saveUserData(state) {
  // firebase.database().ref('users/' + state.userData.userName).set({
  //   userData: state.userData,
  //   season: state.season
  // });
  console.log(state);
};


export function importUserData() {
  // temporary
  let userData;
  $.ajax({
    // url: 'http://localhost:8080/ajax/userNoSeason.json',
    url: 'http://localhost:8080/ajax/userWithSeason.json',
    type: 'get',
    dataType: 'html',
    async: false,
    success: data => {
      userData = data;
    }
  });
  return JSON.parse(userData);
};
