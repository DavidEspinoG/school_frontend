import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getStudents = createAsyncThunk(
  'students/getStudents', 
  async () => {
    const res = await axios.get('http://localhost:3000/students');
    return res.data;
  }
);

const getStudentDetail = createAsyncThunk(
  'students/getStudentDetail',
  async (id) => {
    const res = await axios.get(`http://localhost:3000/students/${id}`);
    return res.data;
  }
);

const getStudentDetailCourses = createAsyncThunk(
  'students/getStudentDetailCourses',
  async (studentId) => {
    const res = await axios.get(`http://localhost:3000/students/${studentId}/courses`);
    console.log(studentId)
    //http://localhost:3000/students/2/courses
    console.log(res.data)
    return res.data;
  }
);

const studentsSlice = createSlice({
  name: 'students', 
  initialState: {
    students: [],
    studentDetail: {},
    studentDetailCourses: [],
  },
  reducers: {
    cleanStudentDetail: (state) => {
      state.studentDetail = {};
    },
    cleanStudentDetailCourses: (state) => {
      state.studentDetailCourses = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudents.fulfilled, (state, action) => {
      state.students = action.payload;
      })
      .addCase(getStudentDetail.fulfilled, (state, action) => {
        state.studentDetail = action.payload;
      })
      .addCase(getStudentDetailCourses.fulfilled, (state, action) => {
        state.studentDetailCourses= action.payload;
      })
  } 
})

export default studentsSlice;
export { getStudents, getStudentDetail, getStudentDetailCourses }
export const { cleanStudentDetail, cleanStudentDetailCourses } = studentsSlice.actions;