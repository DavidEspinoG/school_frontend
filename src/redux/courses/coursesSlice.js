import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchStudentCourses = createAsyncThunk(
  'courses/fetchCourses', 
  async (id) => {
    const res = await axios.get(`http://localhost:3000/student/${id}/courses`)
    return res.data;
  }
)

const fetchCurrentCourse = createAsyncThunk(
  'courses/fetchCourse', 
  async (id) => {
    const res = await axios.get(`http://localhost:3000/courses/${id}`)
    return res.data;
  }
)

const coursesSlice = createSlice({
  name: 'courses', 
  initialState: {
    courses: [], 
    currentCourse: {}, 
    currentCourseGrades: [],
  }, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentCourses.fulfilled, (state, action) => {
        state.courses = action.payload
      })
      .addCase(fetchCurrentCourse.fulfilled, (state, action) => {
        state.currentCourse = action.payload
      })
  }
})

export default coursesSlice;
export { fetchStudentCourses, fetchCurrentCourse };