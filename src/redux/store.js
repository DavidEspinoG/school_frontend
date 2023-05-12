import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./login/loginSlice";
import studentsSlice from "./students/studentsSlice";


const rootReducer = combineReducers({
  login: loginSlice.reducer,
  students: studentsSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store; 