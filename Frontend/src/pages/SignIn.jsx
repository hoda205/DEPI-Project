import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // التعديل هنا: التأكد من أن الحقول ليست فارغة
    if (formData.email.trim() !== '' && formData.password.trim() !== '') {
      navigate('/dashboard', { replace: true });
    } else {
      setError('Please enter your email and password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#f7f9fb]">
      <main className="w-full max-w-[1100px] flex flex-col md:flex-row bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-200">
        
        {/* Left Side: Visual/Brand */}
        <div className="hidden md:flex md:w-1/2 bg-blue-600 p-12 flex-col justify-between text-white">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="text-blue-600 font-bold">M</span>
              </div>
              <span className="text-2xl font-bold">MediVault</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight mb-6">Secure your health <br/>data in one place.</h1>
            <p className="text-blue-100 text-lg max-w-md">Access your medical records, prescriptions, and appointment history with clinical-grade security.</p>
          </div>
        </div>

        {/* Right Side: Sign In Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="max-w-[400px] mx-auto w-full">
            <h2 className="text-2xl font-bold mb-2">Sign In</h2>
            <p className="text-gray-600 mb-8">Welcome back! Please enter your details.</p>
            
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email or Username</label>
                <input 
                  type="text" 
                  className="w-full p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none" 
                  placeholder="e.g. alex.smith@email.com" 
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input 
                  type="password" 
                  className="w-full p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none" 
                  placeholder="••••••••" 
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="w-4 h-4 rounded accent-blue-600" />
                  Remember Me
                </label>
                <Link to="/forget-password" className="text-sm font-semibold text-[#004ac6] hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-xl font-bold hover:bg-blue-700 transition">
                Sign In
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-500">
              Don't have an account? <Link to="/signup" className="text-blue-600 font-bold hover:underline">Create Account</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}