import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import CompleteYourProfile from './pages/completeYourProfile'; 
import SignIn from './pages/SignIn'; 
import ForgetPassword from './pages/forgetPassword';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/complete-profile" element={<CompleteYourProfile />} />
        <Route path="/signin" element={<SignIn />} /> 
        
        {/* السطر اللي بيربط صفحة استعادة كلمة المرور */}
        <Route path="/forget-password" element={<ForgetPassword />} />
        
      </Routes>
    </Router>
  );
};

export default App;