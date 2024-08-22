import React from 'react';
import Table from './Table';
// import ParentComponent from './ParentComponent';

const TabContent = ({ activeTab, courseDataArray }) => {
  // console.log('courseDataArray',courseDataArray)
  const getTableData = (tabId) => {
    switch (tabId) {
      case 'tab1':
        return [
          {
            headers: ['Course Name', 'Start Date', 'Expected end Date'],
            rows: courseDataArray.length > 0 ?
              courseDataArray.map(newCourseData => [
                newCourseData.courseName,
                newCourseData.startDate,
                newCourseData.endDate,
                // newCourseData.complition
              ])
              : []
          },
        ];
      case 'tab2':
        return [
          {
            headers: ['Course Name', 'Start Date', 'End Date', 'Grade'],
            rows: [
              ['Python', '2/3/22', '3/10/23', 'A++'],
              ['c++', '11/10/19', '12/10/21', 'A'],
              ['c', '12/10/22', '11/2/23', 'B'],
            ],
          },
        ];
      default:
        return [];
    }
  };

  const tableData = getTableData(activeTab);

  return (
    <div>
      {tableData.map((data, index) => (
        <Table key={index} headers={data.headers} rows={data.rows} />
      ))}
    </div>
  );
};

export default TabContent;
