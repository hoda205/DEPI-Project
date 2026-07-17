import  { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  // 1. States لتخزين البيانات اللي المستخدم بيكتبها
  const [fullName, setFullName] = useState('saper waleed');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // 2. States للتحكم في إظهار وإخفاء كلمة المرور (أزرار العين)
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // 3. State لقياس وعرض قوة كلمة المرور تلقائياً
  const [strength, setStrength] = useState({ text: 'Strong', colorClass: 'text-emerald-500', barCount: 3 });
  const [isLoading, setIsLoading] = useState(false);
  // دالة ذكية لحساب قوة الباسورد وتحديث الشريط الأخضر بناءً على اللي بيتكتب
  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    
    if (val.length === 0) {
      setStrength({ text: 'Weak', colorClass: 'text-gray-400', barCount: 0 });
    } else if (val.length < 6) {
      setStrength({ text: 'Weak', colorClass: 'text-red-500', barCount: 1 });
    } else if (val.length < 10) {
      setStrength({ text: 'Medium', colorClass: 'text-orange-500', barCount: 2 });
    } else {
      setStrength({ text: 'Strong', colorClass: 'text-emerald-500', barCount: 3 });
    }

  if(true){
    navigate('/' , { replace: true })
  }
  };

  // دالة عند الضغط على زرار Create Account لحفظ البيانات والتحقق منها
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // التأكد من تطابق كلمتي المرور
    if (password !== confirmPassword) {
      alert("⚠️Passwords do not match! Please check again.");
      return;
    }

  setIsLoading(true);
    // محاكاة إرسال البيانات للسيرفر
    setTimeout(() => {
      alert(`🎉 Account created successfully for ${fullName}!`);
      setIsLoading(false);
      navigate('/complete-profile', { replace: true }); 
    }, 1500);
  };

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen flex flex-col font-sans">
      {/* استيراد الأيقونات والخطوط مباشرة */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      {/* شريط التنقل العلوي (Navbar) */}
      <nav className="sticky top-0 z-40 flex justify-between items-center px-6 md:px-16 py-4 w-full bg-white border-b border-[#e2e8f0]">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#004ac6] text-2xl font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
          <span className="text-lg font-bold text-[#004ac6]">MediVault</span>
        </div>
        <div className="flex gap-6 items-center">
          <a className="text-xs text-[#434655] hover:text-[#004ac6] transition-colors" href="#">Privacy Policy</a>
          <a className="text-xs text-[#434655] hover:text-[#004ac6] transition-colors" href="#">Security Standards</a>
          <a className="text-xs text-[#004ac6] font-bold border-b-2 border-[#004ac6] pb-1" href="#">Sign Up</a>
        </div>
      </nav>

      {/* المحتوى الرئيسي (Main) */}
      <main className="flex-grow flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-12 items-center justify-between">
          
          {/* الجانب الأيسر: النص والمميزات */}
          <div className="hidden lg:flex flex-col w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-[#191c1e] leading-tight">
              Your entire medical history, <br />
              <span className="text-[#004ac6]">secured with clarity.</span>
            </h1>
            <p className="text-base text-[#434655] max-w-md">
              Join thousands of patients who manage their health records, prescriptions, and appointments in one HIPAA-compliant digital vault.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#dbe1ff] flex items-center justify-center text-[#004ac6]">
                  <span className="material-symbols-outlined text-lg">verified_user</span>
                </div>
                <p className="font-medium text-sm text-[#191c1e]">Bank-grade encryption for all data</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#6ffbbe] flex items-center justify-center text-[#006242]">
                  <span className="material-symbols-outlined text-lg">share_reviews</span>
                </div>
                <p className="font-medium text-sm text-[#191c1e]">One-click doctor record sharing</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#dae2fd] flex items-center justify-center text-[#565e74]">
                  <span className="material-symbols-outlined text-lg">notifications_active</span>
                </div>
                <p className="font-medium text-sm text-[#191c1e]">Automated prescription reminders</p>
              </div>
            </div>

            <div className="pt-4">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&q=80" alt="Doctor" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Patient" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&q=80" alt="Physician" />
                <div className="w-10 h-10 rounded-full bg-[#004ac6] flex items-center justify-center border-2 border-white text-white text-xs font-bold">+2k</div>
              </div>
              <p className="text-xs text-[#737686] mt-2 px-1">Trusted by medical professionals worldwide</p>
            </div>
          </div>

          {/* الجانب الأيمن: كارت إنشاء الحساب */}
          <div className="w-full lg:w-[460px] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-8 border border-[#e2e8f0]">
            <div className="flex flex-col mb-6">
              <h2 className="text-2xl font-bold text-[#191c1e]">Create an account</h2>
              <p className="text-xs text-[#737686] mt-1">Start your journey to better health management.</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#191c1e]" htmlFor="full_name">Full Name</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#737686] text-xl">person</span>
                  <input className="w-full h-11 pl-10 pr-4 rounded-lg border border-[#c3c6d7] focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] bg-[#f8fafc] transition-all text-sm outline-none" id="full_name" value={fullName} onChange={(e) => setFullName(e.target.value)} required type="text" />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#191c1e]" htmlFor="email">Email Address</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#737686] text-xl">mail</span>
                  <input className="w-full h-11 pl-10 pr-4 rounded-lg border border-[#c3c6d7] focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] bg-[#f8fafc] transition-all text-sm outline-none" id="email" placeholder="john@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required type="email" />
                </div>
              </div>

              {/* Password & Confirm */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#191c1e]" htmlFor="password">Password</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#737686] text-xl">lock</span>
                    <input className="w-full h-11 pl-10 pr-10 rounded-lg border border-[#c3c6d7] focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] bg-[#f8fafc] transition-all text-sm outline-none" id="password" value={password} onChange={handlePasswordChange} required type={showPassword ? "text" : "password"} />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737686] hover:text-[#004ac6] flex items-center" onClick={() => setShowPassword(!showPassword)} type="button">
                      <span className="material-symbols-outlined text-lg">{showPassword ? 'visibility_off' : 'visibility'}</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#191c1e]" htmlFor="confirm_password">Confirm</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#737686] text-xl">lock_reset</span>
                    <input className="w-full h-11 pl-10 pr-10 rounded-lg border border-[#c3c6d7] focus:border-[#004ac6] focus:ring-1 focus:ring-[#004ac6] bg-[#f8fafc] transition-all text-sm outline-none" id="confirm_password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required type={showConfirmPassword ? "text" : "password"} />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737686] hover:text-[#004ac6] flex items-center" onClick={() => setShowConfirmPassword(!showConfirmPassword)} type="button">
                      <span className="material-symbols-outlined text-lg">{showConfirmPassword ? 'visibility_off' : 'visibility'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Security Strength Indicator */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] text-[#737686]">Security Strength</span>
                  <span className={`text-[11px] font-bold ${strength.colorClass}`}>{strength.text}</span>
                </div>
                <div className="w-full bg-[#e2e8f0] rounded-full h-1 flex gap-1">
                  <div className={`h-full flex-grow rounded-full transition-all duration-300 ${strength.barCount >= 1 ? 'bg-emerald-500' : 'bg-transparent'}`}></div>
                  <div className={`h-full flex-grow rounded-full transition-all duration-300 ${strength.barCount >= 2 ? 'bg-emerald-500' : 'bg-transparent'}`}></div>
                  <div className={`h-full flex-grow rounded-full transition-all duration-300 ${strength.barCount >= 3 ? 'bg-emerald-500' : 'bg-transparent'}`}></div>
                </div>
              </div>

              {/* الأزرار ووسائل التسجيل */}
              <div className="pt-2 space-y-3">
                <button className="w-full h-11 bg-[#004ac6] hover:bg-[#2563eb] text-white font-bold rounded-lg transition-all text-sm flex items-center justify-center active:scale-[0.99]" disabled={isLoading} type="submit">
                  {isLoading ? <span>Creating Account...</span> : <span>Create Account</span>}
                </button>
                
                <div className="relative flex items-center justify-center my-2">
                  <div className="w-full border-t border-[#e2e8f0]"></div>
                  <span className="absolute bg-white px-3 text-xs text-[#737686]">OR</span>
                </div>

                <button className="w-full h-11 border border-[#c3c6d7] hover:bg-[#f8fafc] text-[#191c1e] font-semibold rounded-lg transition-all text-sm flex items-center justify-center gap-2 active:scale-[0.99]" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>

              <p className="text-center text-xs text-[#434655] pt-1">
                Already have an account? <Link className="text-[#004ac6] font-bold hover:underline" to="/signin">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </main>

      {/* الفوتر السفلي (Footer) */}
      <footer className="p-4 flex flex-col sm:flex-row justify-center items-center gap-6 text-[11px] text-[#737686] border-t border-[#e2e8f0] bg-white">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-base">lock</span> 256-bit AES Encryption
        </div>
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-base">security</span> HIPAA Compliant Data Handling
        </div>
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-base">shield_lock</span> Two-Factor Authentication Ready
        </div>
      </footer>
    </div>
  );
};

export default SignUp;