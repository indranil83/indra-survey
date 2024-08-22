import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCourse } from '../store/coursesSlice';
// import ParentComponent from './ParentComponent';

const Newcourse = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    startDate: "",
    endDate: "",
    completion: false,
    // comments:""
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('onAddCourse prop:', onAddCourse); 
    dispatch(addCourse(formData));

    setFormData({
      courseName: "",
      startDate: "",
      endDate: "",
      complItion: "",
      // comments: ""

    });
    // navigate('/tabs', { state: { courseDataArray: [formData] } })
    navigate('/tabs');

    // console.log(courseDataArray)
  }
  return (
    <div className="container card p-3 mt-2 register-container">
      <form onSubmit={handleSubmit} >
        <h1 className='text-center'>Registration For New Course</h1>
        <div className='form-group'>
          <label htmlFor='courseName'> Course Name: </label>
          <select className='form-control'
            name='courseName'
            value={formData.courseName}
            onChange={handleChange}
            required
            autoComplete='on '
          >
            <option value="none" >select course</option>
            <option value="PYTHON" >PYTHON</option>
            <option value="SQL" >SQL</option>
            <option value="DBMS" >DBMS</option>
            <option value="NETWORKING" >NETWORKING</option>
            <option value="DSA" >DSA</option>
            <option value="DAA" >DAA</option>
            <option value="DATA SCIENCE" >DATA SCIENCE</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='startDate'>Start Date: </label>
          <input type='date'
            name='startDate' required
            className='form-control'
            autoComplete="on"
            value={formData.startDate}
            onChange={handleChange} ></input>
        </div>
        <div className='form-group'>
          <label htmlFor='endDate'>End Date: </label>
          <input type='date' name='endDate'
            required className='form-control'
            value={formData.endDate}
            onChange={handleChange}
            autoComplete="on"></input>
        </div>
        {/* <div className='form-group'>
                <label htmlFor='complition'>%Complition: </label>
                <input type='text' name='complItion' 
                required className='form-control'
                 value={formData.complItion}
                 onChange={handleChange} 
                 autoComplete="on"></input>
            </div> */}
        <div className='form-group'>
          <label htmlFor='comments'>Comments: </label>
          <input type='comment' name='comments'
            required className='form-control'
            //  value={formData.comments}
            //  onChange={handleChange} 
            autoComplete="on"></input>
        </div>
        <button type='submit' className='btn  btn-success m-1' >Save</button>
      </form>

    </div>
  )
}
export default Newcourse;
