import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";

const logStudent = createAsyncThunk(
  'login/logStudent', 
  async ({email, password}) => {
    const res = await axios.post('http://localhost:3000/login/student', {
      email: email, 
      password: password
    })
    return res.data;
  }
)

const loginSlice = createSlice({
  name: 'login', 
  initialState: {
    adminLogged: false,
    studentLogged: false, 
    currentStudent: {},
    error: false, 
  },
  reducers: {
    studentLogOut: (state) => {
      state.studentLogged = false;
    }
  } ,
  extraReducers: (builder) => {
    builder
    .addCase(logStudent.fulfilled, (state, action) => {
      state.studentLogged = action.payload.logged; 
      state.currentStudent = action.payload.student;
      state.error = false;
    })
    .addCase(logStudent.rejected, (state) => {
      state.error = true;
    })

  }
});

export default loginSlice;
export { logStudent };