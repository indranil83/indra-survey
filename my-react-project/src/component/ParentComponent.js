
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addCourse } from '../store/coursesSlice';
import { useNavigate } from 'react-router-dom';
import Newcourse from './newcourse';
// import Tabs  from './tabs';


const ParentComponent = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();



  // const [courseDataArray, setCourseDataArray] = useState(() => {
  //   const savedCourses = localStorage.getItem('courseDataArray');
  //   return savedCourses ? JSON.parse(savedCourses) : [];
  

  
  // console.log(courseDataArray)

  // // Function to handle new course data
  // const handleAddCourse = (newCourseData) => {
  //   setCourseDataArray([...courseDataArray, newCourseData]);
  //   navigate('/tabs'); 
  // };
  // const handleAddCourse = (newCourseData) => {
  //   dispatch(addCourse(newCourseData)); // Add course using Redux action
  //   navigate('/tabs'); // Navigate to ta
    // console.log(newCourseData)
    // console.log(courseDataArray)
  
  return (
    <div>
      <Newcourse  />
    </div>
  );
};

export default ParentComponent;
