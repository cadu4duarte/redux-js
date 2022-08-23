//import reduce e create store
const redux = require("redux");
const createStore = redux.createStore;

//actions e actions type
const CHANGE_USER = "CHANGE_USER";
const LOGOUT = "LOGOUT";

//actions
function changeUser(user) {
  return {
    type: CHANGE_USER,
    info: "Change the current user",
    payload: user
  }
}

function logout() {
  return {
    type: LOGOUT,
    info: "logout the current user"
  }
}

//estado inicial
const initialState = {
  user: "",
  isLogged: false
}

//reducers
function userReducer(prevState = initialState, action) {
  switch(action.type) {
    case CHANGE_USER: 
      return {
        ...prevState,
        user: action.payload,
        isLogged: true
      }

    case LOGOUT:
      return {
        ...prevState,
        user: "",
        isLogged: false
      }
    //caso o "case" não seja nem true e nem false
    default: 
      return prevState
  }
}

//store
const store = createStore(userReducer);
console.log("initial state", store.getState());

store.dispatch(changeUser("Carlos Eduardo"));
console.log("new state", store.getState());

store.dispatch(logout());
 console.log("new state", store.getState());