
import { createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courseDataArray: [],
  },
  reducers: {
    addCourse: (state, action) => {
      state.courseDataArray.push(action.payload);
      localStorage.setItem('courseDataArray', JSON.stringify(state.courseDataArray));
    },
    setCourses: (state, action) => {
      state.courseDataArray = action.payload;
    },
  },
});

export const { addCourse, setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;
