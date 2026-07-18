import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Appointment from "./pages/Appointment";
import Prescriptions from "./pages/Prescriptions";
import EmergencyCard from "./pages/EmergencyCard";
import DashboardLayout from "./layouts/DashboardLayout"
import MedicalRecords from "./pages/MedicalRecords";
import MedicalProfile from "./pages/MedicalProfile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import LandingPage from "./pages/LandingPage";
import ForgotPassword from "./pages/forgetPassword";
import CompleteYourProfile from "./pages/completeYourProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/complete-profile" element={<CompleteYourProfile />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route element={<DashboardLayout />}>
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<MedicalProfile />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/records" element={<MedicalRecords />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
        <Route path="/emergency" element={<EmergencyCard />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;