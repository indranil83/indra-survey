import React from 'react';
import{ Routes,Route} from 'react-router-dom'
import Newcourse from './component/newcourse';
import Register from './component/register';
import Tabs from './component/tabs.js';
import ParentComponent from './component/ParentComponent.js';

const App = () => {
  
    return (
        <div className="App">
           
                <Routes>
                    <Route  path='/' element={<Register></Register>}/>
                    <Route exact path='/tabs' element={<Tabs></Tabs>}/>
                    <Route exact path='/newcourse' element={ <ParentComponent /> }/>
                </Routes>
                {/* <ParentComponent /> */}
        </div>
    );
};
export default App;