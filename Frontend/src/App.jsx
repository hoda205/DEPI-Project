import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Appointment from "./pages/Appointment";
import Prescriptions from "./pages/Prescriptions";
import EmergencyCard from "./pages/EmergencyCard";
import Notifications from "./pages/Notifications";
import DashboardLayout from "./layouts/DashboardLayout"
import MedicalRecords from "./pages/MedicalRecords";
import MedicalProfile from "./pages/MedicalProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
        
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<MedicalProfile />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/records" element={<MedicalRecords />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
        <Route path="/emergency" element={<EmergencyCard />} />
        <Route path="/notifications" element={<Notifications />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;