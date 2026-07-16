import React, { useState } from 'react';
import { 
  User, Calendar, Droplet, Users, Phone, MapPin, 
  Edit2, X, Save, ShieldAlert 
} from 'lucide-react';

export default function Profile() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [profileData, setProfileData] = useState({
    fullName: "",
    username: "",
    dob: "",
    bloodType: "",
    gender: "",
    phone: "",
    emergencyContact: "",
    address: ""
  });

  const [tempData, setTempData] = useState({ ...profileData });

  const handleSave = (e) => {
    e.preventDefault();
    setProfileData({ ...tempData });
    setIsEditModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 lg:p-10 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Personal Profile</h1>
            <p className="text-slate-500 text-base mt-1">Manage and view your personal details below</p>
          </div>
          <button 
            onClick={() => { setTempData({ ...profileData }); setIsEditModalOpen(true); }}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#2563eb] hover:bg-blue-700 text-white rounded-xl transition-all shadow-md font-semibold text-base cursor-pointer hover:shadow-lg active:scale-95"
          >
            <Edit2 size={18} /> Edit Profile
          </button>
        </div>

        {/* Display Card (2 Columns Grid) */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          
          {/* Card Title Bar */}
          <div className="bg-[#2563eb] text-white px-8 py-5 flex items-center gap-3">
            <User size={24} />
            <h2 className="font-bold uppercase tracking-wider text-base">Personal Information</h2>
          </div>
          
          {/* Grid Layout inside the Card */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              
              <InfoItem icon={<User size={22}/>} color="bg-blue-50 text-blue-600" label="Full Name" value={profileData.fullName} />
              
              <InfoItem icon={<User size={22}/>} color="bg-indigo-50 text-indigo-600" label="Username" value={profileData.username ? `@${profileData.username.replace('@', '')}` : ''} />
              
              <InfoItem icon={<Calendar size={22}/>} color="bg-purple-50 text-purple-600" label="Date of Birth" value={profileData.dob} />
              
              <InfoItem icon={<Droplet size={22}/>} color="bg-red-50 text-red-600" label="Blood Type" value={profileData.bloodType} isBold valueColor="text-red-600" />
              
              <InfoItem icon={<Users size={22}/>} color="bg-amber-50 text-amber-600" label="Gender" value={profileData.gender} />
              
              <InfoItem icon={<Phone size={22}/>} color="bg-green-50 text-green-600" label="Phone" value={profileData.phone} />
              
              <div className="md:col-span-2">
                <InfoItem icon={<ShieldAlert size={22}/>} color="bg-rose-50 text-rose-600" label="Emergency Contact" value={profileData.emergencyContact} />
              </div>

              <div className="md:col-span-2">
                <InfoItem icon={<MapPin size={22}/>} color="bg-slate-100 text-slate-600" label="Address" value={profileData.address} />
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* ================= EDIT MODAL ================= */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b flex justify-between items-center bg-slate-50/50 rounded-t-2xl">
              <h2 className="text-xl font-bold text-slate-800">Edit Personal Profile</h2>
              <button 
                onClick={() => setIsEditModalOpen(false)} 
                className="p-2 hover:bg-slate-200 rounded-full transition-colors cursor-pointer text-slate-500"
              >
                <X size={20}/>
              </button>
            </div>
            
            {/* Modal Form Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InputField label="Full Name" placeholder="Your full name" value={tempData.fullName} onChange={v => setTempData({...tempData, fullName: v})} />
                <InputField label="Username" placeholder="@username" value={tempData.username} onChange={v => setTempData({...tempData, username: v})} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">Date of Birth</label>
                  <input 
                    type="date"
                    value={tempData.dob}
                    onChange={(e) => setTempData({...tempData, dob: e.target.value})}
                    className="w-full border-2 border-slate-100 rounded-xl p-3 text-sm focus:border-blue-500 outline-none transition-all bg-slate-50/50 text-slate-700"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">Blood Type</label>
                  <select 
                    value={tempData.bloodType}
                    onChange={(e) => setTempData({...tempData, bloodType: e.target.value})}
                    className="w-full border-2 border-slate-100 rounded-xl p-3 text-sm focus:border-blue-500 outline-none transition-all bg-slate-50/50 text-slate-700 cursor-pointer"
                  >
                    <option value="">Select blood type...</option>
                    {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(type => <option key={type} value={type}>{type}</option>)}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">Gender</label>
                  <select 
                    value={tempData.gender}
                    onChange={(e) => setTempData({...tempData, gender: e.target.value})}
                    className="w-full border-2 border-slate-100 rounded-xl p-3 text-sm focus:border-blue-500 outline-none transition-all bg-slate-50/50 text-slate-700 cursor-pointer"
                  >
                    <option value="">Select gender...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InputField label="Phone" placeholder="+1 234 567 8900" value={tempData.phone} onChange={v => setTempData({...tempData, phone: v})} />
                <InputField label="Emergency Contact" placeholder="Name & phone" value={tempData.emergencyContact} onChange={v => setTempData({...tempData, emergencyContact: v})} />
              </div>
              
              <InputField label="Address" placeholder="Your full address" value={tempData.address} onChange={v => setTempData({...tempData, address: v})} isTextArea />

            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t bg-slate-50 rounded-b-2xl">
              <button 
                onClick={handleSave}
                className="w-full bg-[#2563eb] hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md text-base cursor-pointer"
              >
                <Save size={20}/> Save Profile Changes
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

// Helper Components
function InfoItem({ icon, color, label, value, isBold, valueColor }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${color} shadow-sm`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-1">{label}</p>
        <p className={`text-base ${isBold ? 'font-bold' : 'font-semibold'} ${valueColor || 'text-slate-800'} truncate`}>
          {value || <span className="text-slate-400 italic font-normal text-sm">Not set</span>}
        </p>
      </div>
    </div>
  );
}

function InputField({ label, placeholder, value, onChange, isTextArea }) {
  const Component = isTextArea ? 'textarea' : 'input';
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-semibold text-slate-700">{label}</label>
      <Component 
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={isTextArea ? 3 : 1}
        className="w-full border-2 border-slate-100 rounded-xl p-3 text-sm focus:border-blue-500 outline-none transition-all placeholder:text-slate-300 bg-slate-50/50 resize-none"
      />
    </div>
  );
}