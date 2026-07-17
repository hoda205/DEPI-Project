import React, { useState } from 'react';

const Prescriptions = () => {
  const [showModal, setShowModal] = useState(false);
  const [prescriptions, setPrescriptions] = useState([]);
  const [formData, setFormData] = useState({
    doctor: '', specialization: '', date: '', notes: '', url: '', 
    medications: [{ name: '', dosage: '', duration: '' }]
  });

  const handleAddMedication = () => {
    setFormData({ ...formData, medications: [...formData.medications, { name: '', dosage: '', duration: '' }] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrescriptions([...prescriptions, { ...formData, id: Date.now() }]);
    setShowModal(false);
    setFormData({ doctor: '', specialization: '', date: '', notes: '', url: '', medications: [{ name: '', dosage: '', duration: '' }] });
  };

  // دالة الحذف
  const handleDelete = (id) => {
    setPrescriptions(prescriptions.filter((p) => p.id !== id));
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Prescriptions</h1>
          <p className="text-gray-500">Save and manage your medical prescriptions</p>
        </div>
        <button onClick={() => setShowModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <span>+</span> Add Prescription
        </button>
      </div>

      <input className="w-full p-2 mb-6 border rounded-lg" placeholder="Search by doctor, specialty, or medication..." />

      {/* Empty State */}
      {prescriptions.length === 0 ? (
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-16 text-center text-gray-500 bg-white">
          <div className="text-4xl mb-4">📄</div>
          <p className="font-bold">No prescriptions saved yet</p>
          <p>Add your first prescription</p>
        </div>
      ) : (
        /* List Display */
        <div className="space-y-4">
          {prescriptions.map((p) => (
            <div key={p.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">Dr. {p.doctor}</h3>
                  <p className="text-sm text-gray-400">{p.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  {/* الرابط المضاف لفتح الصورة */}
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">
                      View Prescription
                    </a>
                  )}
                  <button 
                    onClick={() => handleDelete(p.id)} 
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    🗑️
                  </button>
                </div>
              </div>
              <div className="mt-4 p-2 bg-gray-50 rounded text-sm text-gray-600">{p.notes}</div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-2xl border border-gray-200">
            <h2 className="text-xl font-bold mb-4">Add Prescription</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input required placeholder="Doctor Name *" className="w-full border p-2 rounded" onChange={(e) => setFormData({...formData, doctor: e.target.value})} />
              <input placeholder="Specialization" className="w-full border p-2 rounded" onChange={(e) => setFormData({...formData, specialization: e.target.value})} />
              <input type="date" required className="w-full border p-2 rounded" onChange={(e) => setFormData({...formData, date: e.target.value})} />
              
              <div>
                <label className="block font-bold mb-2">Medications</label>
                {formData.medications.map((m, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <input placeholder="Medication name" className="border p-2 w-full rounded" />
                    <input placeholder="Dosage" className="border p-2 w-20 rounded" />
                    <input placeholder="Duration" className="border p-2 w-20 rounded" />
                  </div>
                ))}
                <button type="button" onClick={handleAddMedication} className="text-blue-600 font-bold text-sm">+ Add Medication</button>
              </div>

              <textarea placeholder="Additional notes..." className="w-full border p-2 rounded" onChange={(e) => setFormData({...formData, notes: e.target.value})}></textarea>
              <input placeholder="File URL" className="w-full border p-2 rounded" onChange={(e) => setFormData({...formData, url: e.target.value})} />
              
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-bold">Add Prescription</button>
              <button type="button" onClick={() => setShowModal(false)} className="w-full text-gray-500">Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Prescriptions;