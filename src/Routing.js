import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home.js';
import Appointment from './Appointment.js';
import AdminLogin from './AdminLogin.js';
import Patient from './Patient.js';
import Doctor from './Doctor.js';
import Form from './Patient/Form.js';
import Main from './DoctorDash/Main.js';
import Patientp from './DoctorDash/Patientp.js';
import DoctorProfile from './DoctorProfile.js';
import Dlogin from'./Dlogin.js'
import Ath from './At/Ath.js'
import ReactBigCalendar from './Cal/ReactBigCalendar.js'
import Regp from './Patient/Regp.js';
import Admin from './Admin.js';
import Doctreg from './Doctreg.js';

function Routing() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/Home" element={<Home />} />
          <Route path="/Appointment" element={<Appointment />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/Patient" element={<Patient />} />
          <Route path="/Doctor" element={<Doctor />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Patientp" element={<Patientp />} />
          <Route path="/DoctorProfile" element={<DoctorProfile />} />
          <Route path="/Dlogin" element={<Dlogin />} />
          <Route path="/Ath" element={<Ath />} />
          <Route path="/ReactBigCalendar" element={<ReactBigCalendar />} />
          <Route path="/Regp" element={<Regp/>}/>
          <Route path="/Admin" element={<Admin/>}/>
          <Route path="/Doctreg" element={<Doctreg/>}/>

          
        </Routes>
      </BrowserRouter>
    );
  }
  

export default Routing;
