
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Newcourse from './newcourse';
// import Tabs  from './tabs';


const ParentComponent = () => {
 
  const [courseDataArray, setCourseDataArray] = useState(() => {
    const savedCourses = localStorage.getItem('courseDataArray');
    return savedCourses ? JSON.parse(savedCourses) : [];
  });
  
  const navigate = useNavigate();
  // console.log(courseDataArray)

  // // Function to handle new course data
  // const handleAddCourse = (newCourseData) => {
  //   setCourseDataArray([...courseDataArray, newCourseData]);
  //   navigate('/tabs'); 
  // };
  const handleAddCourse = (newCourseData) => {
    const updatedCourseDataArray = [...courseDataArray, newCourseData];
    setCourseDataArray(updatedCourseDataArray);
    localStorage.setItem('courseDataArray', JSON.stringify(updatedCourseDataArray));
    navigate('/tabs');
    // console.log(newCourseData)
    // console.log(courseDataArray)
  };
  return (
    <div>
      <Newcourse onAddCourse={handleAddCourse} />
    </div>
  );
};

export default ParentComponent;
