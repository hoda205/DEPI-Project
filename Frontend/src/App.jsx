function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LandingPage" element={<LandingPage />} />
        
        {/* التعديل هنا: جعل صفحة التسجيل هي المسار الرئيسي */}
        <Route path="/" element={<SignUp />} />
        
        <Route path="/signin" element={<SignIn />} />
        <Route path="/complete-profile" element={<CompleteYourProfile />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        
        <Route element={<DashboardLayout />}>
          {/* تأكد من جعل مسار الداشبورد فرعياً كما فعلنا */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<MedicalProfile />} />
          <Route path="/appointments" element={<Appointment />} />
          <Route path="/records" element={<MedicalRecords />} />
          <Route path="/prescriptions" element={<Prescriptions />} />
          <Route path="/emergency" element={<EmergencyCard />} />
          <Route path="/medications" element={<Medications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}