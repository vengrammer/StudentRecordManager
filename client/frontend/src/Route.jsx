import {Routes, Route} from 'react-router-dom';

import Home from './assets/components/Home';
import Login from './assets/components/Login';
import Dashboard from './assets/components/Dashboard';
import ViewStudent from './assets/components/ViewStudent';
import ViewAllStudent from './assets/components/ViewAllStudent';
import Edit from './assets/components/Edit';
import CreateAdmin from './assets/components/CreateAdmin';
import CreateStudent from './assets/components/CreateStudent';

function Router(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/viewallstudent' element={<ViewAllStudent/>}/>
            <Route path='/viewstudent' element={<ViewStudent/>}/>
            <Route path='/edit' element={<Edit/>}/>
            <Route path='/createadmin' element={<CreateAdmin/>}/>
            <Route path='/createstudent' element={<CreateStudent/>}/>
        </Routes>
    );
}

export default Router;