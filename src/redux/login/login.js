import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: 'login', 
  initialState: {
    adminLogged: false,
    studentLogged: false
  }
});

export default loginSlice;

