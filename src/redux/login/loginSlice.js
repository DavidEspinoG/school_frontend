import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../utils/apiUrl";

const logStudent = createAsyncThunk(
  'login/logStudent', 
  async ({email, password}) => {
    const res = await axios.post(`${apiUrl}/login/student`, {
      email: email, 
      password: password
    })
    return res.data;
  }
)

const logAdmin = createAsyncThunk(
  'login/logAdmin', 
  async ({email, password}) => {
    const res = await axios.post(`${apiUrl}/login/admin`, {
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
    adminError: false
  },
  reducers: {
    studentLogOut: (state) => {
      state.studentLogged = false;
    }, 
    adminLogOut: (state) => {
      state.adminLogged = false;
    }, 

  },
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
    .addCase(logAdmin.fulfilled, (state, action) => {
      state.adminLogged = action.payload.logged; 
      state.error = false;
    })
    .addCase(logAdmin.rejected, (state) => {
      state.adminError = true;
    })
  }
});

export default loginSlice;
export { logStudent, logAdmin };
export const { adminLogOut, studentLogOut } = loginSlice.actions