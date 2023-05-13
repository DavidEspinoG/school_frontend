import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./login/loginSlice";
import studentsSlice from "./students/studentsSlice";
import coursesSlice from "./courses/coursesSlice";

const rootReducer = combineReducers({
  login: loginSlice.reducer,
  students: studentsSlice.reducer,
  courses: coursesSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store; 