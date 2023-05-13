import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getStudents = createAsyncThunk(
  'students/getStudents', 
  async () => {
    const res = await axios.get('http://localhost:3000/students');
    return res.data;
  }
);

const studentsSlice = createSlice({
  name: 'students', 
  initialState: {
    students: []
  },
  extraReducers: (builder) => {
    builder.addCase(getStudents.fulfilled, (state, action) => {
      state.students = action.payload;
    })
  } 
})

export default studentsSlice;
export { getStudents }
