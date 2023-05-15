import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../utils/apiUrl";


const getStudentsOfCourse = createAsyncThunk(
  'students/getStudentsOfCourse', 
  async(courseId) => {
    const res = await axios.get(`${apiUrl}/students/course/${courseId}`)
    return res.data;
  }
)

const getStudents = createAsyncThunk(
  'students/getStudents', 
  async () => {
    const res = await axios.get(`${apiUrl}/students`);
    return res.data;
  }
);

const getStudentDetail = createAsyncThunk(
  'students/getStudentDetail',
  async (id) => {
    const res = await axios.get(`${apiUrl}/students/${id}`);
    return res.data;
  }
);

const getStudentDetailCourses = createAsyncThunk(
  'students/getStudentDetailCourses',
  async (studentId) => {
    const res = await axios.get(`${apiUrl}/students/${studentId}/courses`);
    return res.data;
  }
);

const studentsSlice = createSlice({
  name: 'students', 
  initialState: {
    students: [],
    studentDetail: {},
    studentDetailCourses: [],
    studentsOfCourse: [],
  },
  reducers: {
    cleanStudentDetail: (state) => {
      state.studentDetail = {};
    },
    cleanStudentDetailCourses: (state) => {
      state.studentDetailCourses = [];
    },
    cleanStudentsOfCourse: (state) => {
      state.studentsOfCourse = []
    },
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
        state.studentDetailCourses = action.payload;
      })
      .addCase(getStudentsOfCourse.fulfilled, (state, action) => {
        state.studentsOfCourse = action.payload;
      })
  } 
})

export default studentsSlice;
export { 
  getStudents, 
  getStudentDetail, 
  getStudentDetailCourses,
  getStudentsOfCourse
 }
export const { 
  cleanStudentDetail, 
  cleanStudentDetailCourses,
  cleanStudentsOfCourse,
 } = studentsSlice.actions;