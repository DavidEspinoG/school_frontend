import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchStudentCourses = createAsyncThunk(
  'courses/fetchCourses', 
  async (id) => {
    const res = await axios.get(`http://localhost:3000/students/${id}/courses`)
    return res.data;
  }
)

const fetchCurrentCourse = createAsyncThunk(
  'courses/fetchCourse', 
  async ({studentId, courseId}) => {
    const res = await axios.get(`http://localhost:3000/students/${studentId}/courses/${courseId}`)
    return res.data;
  }
)

const fetchCourseGrades = createAsyncThunk(
  'courses/courseGrades', 
  async ({studentId, courseId}) => {
    const res = await axios.get(`http://localhost:3000/students/${studentId}/courses/${courseId}/grades`, {
      course_id: courseId
    });
    const data = res.data;
    return data;
  }
)

const coursesSlice = createSlice({
  name: 'courses', 
  initialState: {
    courses: [], 
    currentCourse: {}, 
    currentCourseGrades: [],
  }, 
  reducers: {
    cleanCurrentCourse: (state) => {
      state.currentCourse = {};
      state.currentCourseGrades = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
      })
      .addCase(fetchCurrentCourse.fulfilled, (state, action) => {
        state.currentCourse = action.payload;
      })
      .addCase(fetchCourseGrades.fulfilled, (state, action) => {
        state.currentCourseGrades = action.payload;
      })
  }
})

export default coursesSlice;
export { fetchStudentCourses, fetchCurrentCourse, fetchCourseGrades };

export const { cleanCurrentCourse } = coursesSlice.actions;