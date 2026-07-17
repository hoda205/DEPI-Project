import React, { useState } from 'react';
import { 
  User, Droplet, AlertCircle, AlertTriangle, Heart, Activity, 
  Phone, X, Save, Edit2, Info, Shield 
} from 'lucide-react';

export default function EmergencyCard() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPublic, setIsPublic] = useState(true);

  // 1. خلينا كل الداتا المبدئية فاضية تماماً (Empty Strings)
  const [medicalData, setMedicalData] = useState({
    fullName: "",
    bloodType: "",
    allergies: "",
    chronicConditions: "",
    criticalMedications: "",
    contactName: "",
    contactPhone: "",
    contactRelation: "",
    additionalNotes: ""
  });

  const [tempData, setTempData] = useState({ ...medicalData });

  const handleSave = (e) => {
    e.preventDefault();
    setMedicalData({ ...tempData });
    setIsEditModalOpen(false);
  };

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(JSON.stringify(medicalData))}`;

  // تظبيط شكل جهة الاتصال عشان لو فاضية متظهرش أقواس وشرط فاضية
  const hasContactInfo = medicalData.contactName || medicalData.contactPhone;
  const contactDisplay = hasContactInfo 
    ? `${medicalData.contactName || 'N/A'} ${medicalData.contactPhone ? '- ' + medicalData.contactPhone : ''} ${medicalData.contactRelation ? '(' + medicalData.contactRelation + ')' : ''}`
    : "";

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 font-sans">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Emergency Card</h1>
          <p className="text-slate-500 text-sm">Your critical medical information for emergencies</p>
        </div>
        <button 
          onClick={() => { setTempData({...medicalData}); setIsEditModalOpen(true); }}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all shadow-sm font-medium cursor-pointer"
        >
          <Edit2 size={16} /> Edit Card
        </button>
      </div>

      <div className="bg-[#eff6ff] border border-blue-100 rounded-xl p-4 mb-8 flex items-start gap-3 text-blue-600">
        <Info size={20} className="mt-0.5 shrink-0" />
        <p className="text-sm">Emergency responders can scan the QR code to access your critical medical information instantly.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-[#dc2626] text-white px-6 py-4 flex items-center gap-2">
              <AlertTriangle size={20} />
              <h2 className="font-bold uppercase tracking-wider text-sm">Emergency Card</h2>
            </div>
            
            <div className="p-6 space-y-4">
              <CardItem icon={<User size={18}/>} color="bg-red-50 text-red-500" label="Full Name" value={medicalData.fullName} />
              <CardItem icon={<Droplet size={18}/>} color="bg-red-50 text-red-600" label="Blood Type" value={medicalData.bloodType} isBold valueColor="text-red-600" />
              <CardItem icon={<AlertCircle size={18}/>} color="bg-yellow-50 text-yellow-600" label="Allergies" value={medicalData.allergies} />
              <CardItem icon={<Heart size={18}/>} color="bg-blue-50 text-blue-500" label="Chronic Conditions" value={medicalData.chronicConditions} />
              <CardItem icon={<Activity size={18}/>} color="bg-purple-50 text-purple-500" label="Critical Medications" value={medicalData.criticalMedications} />
              <CardItem icon={<Phone size={18}/>} color="bg-green-50 text-green-500" label="Emergency Contact" value={contactDisplay} />
              
              <div className="mt-6 p-4 bg-[#f1f5f9] rounded-xl">
                <p className="text-xs text-slate-500 font-medium mb-1">Additional Notes</p>
                <p className="text-sm text-slate-800 font-medium">{medicalData.additionalNotes || 'No additional notes provided.'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center shadow-sm">
            <div className="w-full flex items-center gap-2 mb-8 self-start">
               <Shield size={18} className="text-blue-600" />
               <h3 className="font-bold text-sm">Emergency QR Code</h3>
            </div>
            <div className="p-4 border-2 border-dashed border-blue-100 rounded-3xl mb-4 bg-slate-50">
               <img src={qrUrl} alt="QR Code" className="w-40 h-40" />
            </div>
            <p className="text-sm text-slate-500 text-center mb-8">Scan this QR code to access emergency information instantly.</p>
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="sr-only" checked={isPublic} onChange={() => setIsPublic(!isPublic)} />
                <div className={`w-11 h-6 rounded-full transition-colors ${isPublic ? 'bg-blue-600' : 'bg-slate-300'}`}></div>
                <div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${isPublic ? 'translate-x-5' : ''}`}></div>
              </div>
              <span className="text-sm font-medium text-slate-700">Make publicly accessible</span>
            </label>
          </div>
        </div>
      </div>

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-800">Edit Emergency Card</h2>
              <button onClick={() => setIsEditModalOpen(false)} className="p-1 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"><X size={20}/></button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              <InputField label="Full Name" placeholder="e.g., John Doe" value={tempData.fullName} onChange={v => setTempData({...tempData, fullName: v})} />

              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700">Blood Type</label>
                <select 
                  value={tempData.bloodType}
                  onChange={(e) => setTempData({...tempData, bloodType: e.target.value})}
                  className="w-full border-2 border-slate-200 rounded-xl p-2.5 outline-none focus:border-blue-500 transition-colors bg-white appearance-none"
                >
                  <option value="">Select blood type...</option>
                  {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(type => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>

              <InputField label="Allergies" placeholder="e.g., Penicillin, peanuts, latex" value={tempData.allergies} onChange={v => setTempData({...tempData, allergies: v})} isTextArea />
              <InputField label="Chronic Conditions" placeholder="e.g., Diabetes, hypertension, asthma" value={tempData.chronicConditions} onChange={v => setTempData({...tempData, chronicConditions: v})} isTextArea />
              <InputField label="Critical Medications" placeholder="e.g., Insulin, Epinephrine" value={tempData.criticalMedications} onChange={v => setTempData({...tempData, criticalMedications: v})} isTextArea />

              <div className="border-t pt-4">
                <p className="text-sm font-bold text-slate-800 mb-4">Emergency Contact</p>
                <div className="space-y-4">
                  <InputField label="Contact Name" placeholder="e.g., Jane Doe" value={tempData.contactName} onChange={v => setTempData({...tempData, contactName: v})} />
                  <InputField label="Phone Number" placeholder="e.g., +1 234 567 8900" value={tempData.contactPhone} onChange={v => setTempData({...tempData, contactPhone: v})} />
                  <InputField label="Relation" placeholder="e.g., Spouse, Parent" value={tempData.contactRelation} onChange={v => setTempData({...tempData, contactRelation: v})} />
                </div>
              </div>

              <InputField label="Additional Notes" placeholder="Any other important information..." value={tempData.additionalNotes} onChange={v => setTempData({...tempData, additionalNotes: v})} isTextArea />
            </div>

            <div className="p-4 border-t bg-slate-50 rounded-b-2xl">
              <button 
                onClick={handleSave}
                className="w-full bg-[#2563eb] hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer"
              >
                <Save size={18}/> Save Emergency Card
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CardItem({ icon, color, label, value, isBold, valueColor }) {
  return (
    <div className="flex items-center gap-4 border-b border-slate-50 pb-3 last:border-0 last:pb-0">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${color}`}>{icon}</div>
      <div>
        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">{label}</p>
        {/* إظهار "Not set" لو القيمة فاضية */}
        <p className={`text-sm ${isBold ? 'font-bold' : 'font-medium'} ${valueColor || 'text-slate-800'}`}>{value || <span className="text-slate-400 italic">Not set</span>}</p>
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