import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Homepage  from './customers/Homepage'
import './Custcss.css'
import Userlogin from './customers/Userlogin';
import Userregister from './customers/Userregister'
import Admin from './Admin/Adminlogin'
import Userhome from './customers/Userhome'
import Nav from './Navex'
import Userproductview from './customers/Userproductview';
import Adminhome from './Admin/Adminhome';
import Addfood from './Admin/Addfood';
import Adminviewcustomers from './Admin/Adminviewcustomers';
import Deletefood from './Admin/Deletefood';
import Update from './Admin/Update';
import Viewordercust from './customers/Viewordercust';
import Viewordersforadmin from './Admin/Viewordersforadmin';
import Exqmple1 from './Example/Exqmple1';
import Viewcustprof from './customers/Viewcustprof';
import Editcust from './customers/Editcust'
import Finordcard from'./customers/Finordcard'
import Header from './Nav/Header';
import HeaderaftLogin from './Nav/HeaderaftLogin';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

        {/* User */}

        <Route path='/' element={[<Header/>,<Homepage/>]}></Route>
        <Route path='/userlogin' element={[<Header/>,<Userlogin/>]}></Route>
        <Route path='/userreg' element={[<Header/>,<Userregister/>]}></Route>
        <Route path='/userhome' element={[<HeaderaftLogin/>,<Userhome/>]}></Route>
        <Route path='/userproductview/:id' element={[<HeaderaftLogin/>,<Userproductview/>]}></Route>
        <Route path='/vieworderbycust/:id' element={[<HeaderaftLogin/>,<Viewordercust/>]}></Route>
        <Route path='/custprof' element={[<HeaderaftLogin/>,<Viewcustprof/>]}></Route>
        <Route path='/order' element={[<HeaderaftLogin/>,<Finordcard/>]}></Route>

        {/* Admin */}

        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/adminhome' element={<Adminhome/>}></Route>
        <Route path='/addfood' element={<Addfood/>}></Route>
        <Route path='/admincustview' element={<Adminviewcustomers/>}></Route>
        <Route path='/deletefood' element={<Deletefood/>}></Route>
        <Route path='/update/:id'element={<Update/>}></Route>
        <Route path='/viewusersadmin' element={<Viewordersforadmin/>}></Route>




        <Route path='/navbar' element={<Header/>}/>
        <Route path='/nav' element={<Nav/>}></Route>
        <Route path='/afterLogin' element={<HeaderaftLogin/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
