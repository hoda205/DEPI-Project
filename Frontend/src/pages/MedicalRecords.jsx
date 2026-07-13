import React, { useState } from 'react';

const MedicalRecords = () => {
  const [records, setRecords] = useState([]);

  // States الأساسية
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('All'); // للفلترة بالنوع
  const [editingRecord, setEditingRecord] = useState(null); // عشان اعرف  بعدل ولا بضيف جديد

  // // بيانات الفورم
  const [formData, setFormData] = useState({
    title: '',
    type: 'Test',
    doctorName: '',
    facility: '',
    date: '2026-07-13',
    notes: '',
    fileUrl: ''
  });

// قتح record للاضافه الجديدة
  const handleOpenAddModal = () => {
    setEditingRecord(null);
    setFormData({
      title: '',
      type: 'Test',
      doctorName: '',
      facility: '',
      date: '',
      notes: '',
      fileUrl: ''
    });
    setIsModalOpen(true);
  };

  // record  للتعديل وملء البيانات القديمة في
  const handleOpenEditModal = (record) => {
    setEditingRecord(record);
    setFormData({ ...record });
    setIsModalOpen(true);
  };

  // حذف Record
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      setRecords(records.filter(record => record.id !== id));
    }
  };

  // // تحديث بيانات الفورم
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

// // حفظ البيانات الخاصه بالفورم
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingRecord) {
      // تعديل Record موجود
      setRecords(records.map(rec => rec.id === editingRecord.id ? { ...formData, id: rec.id } : rec));
    } else {

      // إضافة Record جديد
      const newRecord = {
        ...formData,
        id: Date.now() // ID عشوائي مؤقت
      };
      setRecords([newRecord, ...records]);
    }
    setIsModalOpen(false);
  };

  // حساب الأعداد للتابات (Badge Counts)
  const countRecords = (type) => {
    if (type === 'All') return records.length;
    return records.filter(r => r.type === type).length;
  };

// فلترة حسب البحث والنوع   
  const filteredRecords = records.filter(record => {
    const matchesTab = selectedTab === 'All' || record.type === selectedTab;
    const matchesSearch = 
      record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.doctorName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto font-sans relative">
      {/* header -- add record */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Medical Records</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your tests, X-rays, and medical reports</p>
        </div>
        <button 
          onClick={handleOpenAddModal}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold transition-colors shadow-sm"
        >
          <span className="text-lg">+</span> Add Record
        </button>
      </div>

      {/* شريط البحث */}
      <div className="flex gap-3 mb-6">
        <div className="relative flex-1">
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          <input 
            type="text" 
            placeholder="Search by title or doctor..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* التابات مع الفلترة التلقائية */}
      <div className="flex gap-2 mb-6 text-sm overflow-x-auto pb-2">
        {['All', 'Test', 'X-Ray', 'Report'].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-1.5 rounded-full font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
              selectedTab === tab 
                ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-transparent'
            }`}
          >
            {tab === 'All' && `All (${countRecords('All')})`}
            {tab === 'Test' && `🧪 Tests (${countRecords('Test')})`}
            {tab === 'X-Ray' && `🩻 X-Rays (${countRecords('X-Ray')})`}
            {tab === 'Report' && `📄 Reports (${countRecords('Report')})`}
          </button>
        ))}
      </div>

      {/* عرض السجلات  */}
      {filteredRecords.length === 0 ? (
        <div className="border border-gray-100 rounded-2xl bg-white p-16 flex flex-col items-center justify-center text-center min-h-[350px]">
          <div className="text-gray-300 text-5xl mb-4">🧪</div>
          <h3 className="text-gray-800 font-semibold text-lg">No records found</h3>
          <p className="text-gray-400 text-sm mt-1">Add your first medical record or change search filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRecords.map((record) => (
            <div key={record.id} className="border border-gray-100 rounded-xl p-5 bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                    record.type === 'Test' ? 'bg-purple-50 text-purple-600' :
                    record.type === 'X-Ray' ? 'bg-orange-50 text-orange-600' : 'bg-green-50 text-green-600'
                  }`}>
                    {record.type}
                  </span>
                  {/* أزرار التحكم: تعديل وحذف */}
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleOpenEditModal(record)}
                      className="text-gray-400 hover:text-blue-600 text-sm p-1 transition-colors"
                      title="Edit Record"
                    >
                      ✏️
                    </button>
                    <button 
                      onClick={() => handleDelete(record.id)}
                      className="text-gray-400 hover:text-red-600 text-sm p-1 transition-colors"
                      title="Delete Record"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
                <h3 className="text-gray-900 font-bold text-base mb-1">{record.title}</h3>
                <p className="text-xs text-gray-500 mb-2">Dr. {record.doctorName || 'Not specified'} • {record.facility || 'Unknown Facility'}</p>
                {record.notes && <p className="text-sm text-gray-600 bg-gray-50 p-2.5 rounded-lg mb-3 italic">"{record.notes}"</p>}
              </div>
              <div className="flex justify-between items-center text-xs text-gray-400 border-t border-gray-50 pt-3 mt-2">
                <span>📅 {record.date}</span>
                {record.fileUrl && (
                  <a href={record.fileUrl} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-semibold flex items-center gap-1">
                    🔗 View File
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* القائمة المنبثقة (Modal) للإضافة والتعديل */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* رأس المودال */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">
                {editingRecord ? 'Edit Medical Record' : 'Add Medical Record'}
              </h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-xl font-semibold"
              >
                ✕
              </button>
            </div>

            {/* فورم الإدخال */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Title *</label>
                <input 
                  type="text" 
                  name="title"
                  required
                  placeholder="e.g., Blood Sugar Test" 
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Type *</label>
                <select 
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-blue-500"
                >
                  <option value="Test">Test</option>
                  <option value="X-Ray">X-Ray</option>
                  <option value="Report">Report</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Doctor Name</label>
                <input 
                  type="text" 
                  name="doctorName"
                  placeholder="e.g., John Smith" 
                  value={formData.doctorName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Facility</label>
                <input 
                  type="text" 
                  name="facility"
                  placeholder="e.g., City Hospital" 
                  value={formData.facility}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Date *</label>
                <input 
                  type="date" 
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Notes</label>
                <textarea 
                  name="notes"
                  rows="3"
                  placeholder="Additional notes..." 
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">File URL</label>
                <input 
                  type="url" 
                  name="fileUrl"
                  placeholder="https://..." 
                  value={formData.fileUrl}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors mt-2"
              >
                {editingRecord ? 'Save Changes' : 'Add Record'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicalRecords;