import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchStudentCourses = createAsyncThunk(
  'courses/fetchCourses', 
  async (id) => {
    const res = await axios.get(`http://localhost:3000/student/${id}/courses`)
    console.log(res.data);
    return res.data;
  }
)

const coursesSlice = createSlice({
  name: 'courses', 
  initialState: {
    courses: []
  }, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentCourses.fulfilled, (state, action) => {
        state.courses = action.payload
      })
  }
})

export default coursesSlice;
export { fetchStudentCourses };