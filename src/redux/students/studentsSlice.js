import { createSlice } from "@reduxjs/toolkit";

const studentsSlice = createSlice({
  name: 'students', 
  initialState: {
    students: []
  }
})

export default studentsSlice;