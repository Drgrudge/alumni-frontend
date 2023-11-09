import React,{useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/navbar';
import Home from './components/Home';
import MyEvents from './components/events';
import LeftNavbar from './components/leftNavigationBar';
import Dashboard from './components/dashboard';
import HomePage from './components/dashboard';
import UserProfileCard from './components/profileCard';
import ProfileManager from './components/profileManager';
import LoginPage from './components/login';
import SignUpPage from './components/signUp';
import RegistrationForm from './components/RegistrationForm';
import UploadCSV from './components/uploadAllowedUser';

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <div className="bg-slate-900">
        <Nav />
        
      </div>
      <div className="flex" >
      {isLoggedIn && <LeftNavbar />}
      
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/events" element={<MyEvents />} />
        <Route path="/profileCard" element={<UserProfileCard />} />
        <Route path="/profileManager" element={<ProfileManager />} />
        <Route path="/login" element={<LoginPage isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/uploadAllowedUser" element={<UploadCSV />} />
        
      </Routes>
    </div>
      
    </BrowserRouter>
  );
}

export default App;
