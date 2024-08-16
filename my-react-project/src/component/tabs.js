import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import TabContent from './TabContent';
import   './Tabs.css'


const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [courseDataArray, setCourseDataArray] = useState([]);
  const location = useLocation();
  const navigate = useNavigate(); 
  // useEffect(() => {
  //   if (location.state && location.state.courseDataArray) {
  //     setCourseDataArray(location.state.courseDataArray);
  //   }
  // },[location.state]);
 
  useEffect(() => {
    const storedCourseData = localStorage.getItem('courseDataArray');
    // alert()
    if (storedCourseData) {
      setCourseDataArray(JSON.parse(storedCourseData));
      // console.log(storedCourseData)
    }
  }, []);
  // console.log(courseDataArray)


 const handleTabChange = (tabId) => {
  
    setActiveTab(tabId);
  };

  return (
    <div className="container card p-3 mt-2 text-center register-container" >
      
      <div className="tabs ">
       <div className="container-fluid w-50 p-3 mb-2"> 
        <div className='row text-center'>
          <div className='col-6'>
            <button className="`btn btn-secondary btn-block p-2 mb-4 ${activeTab === 'tab1' ? 'active' : ''}`" onClick={()=>handleTabChange('tab1')}>Current Course</button>
          </div>
          <div className="col-6">
            <button className="`btn btn-secondary btn-block p-2 mb-4 ${activeTab === 'tab2' ? 'active' : ''}`"  onClick={()=>handleTabChange('tab2')}>Past Course</button>
          </div>
       </div>
      </div>
      </div >
      <TabContent activeTab={activeTab} courseDataArray={courseDataArray}/>
      <div>
        <br></br>
      <button className="btn btn-success m-1 pt-1"  onClick={() => navigate('/newcourse')} >Register for New Course </button>
      </div>
      
    </div>
   
  );
};

export default Tabs;
