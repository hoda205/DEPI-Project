import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-gray-50 flex h-screen overflow-hidden text-gray-800 w-full">
      {/* Sidebar / Aside */}
      <aside className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col justify-between h-full">
        <div>
          <div className="p-6 flex items-center gap-3">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <i className="fa-solid fa-shield-heart text-xl"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">MediVault</h1>
              <p className="text-xs text-gray-500">Health Management</p>
            </div>
          </div>

          <nav className="px-4 space-y-1 mt-4">
            <a href="#" className="flex items-center gap-3 bg-blue-600 text-white px-4 py-3 rounded-lg font-medium shadow-sm">
              <i className="fa-solid fa-border-all w-5"></i> Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 px-4 py-3 rounded-lg font-medium transition">
              <i className="fa-regular fa-user w-5"></i> Medical Profile
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 px-4 py-3 rounded-lg font-medium transition">
              <i className="fa-solid fa-pills w-5"></i> Medications
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 px-4 py-3 rounded-lg font-medium transition">
              <i className="fa-regular fa-calendar-check w-5"></i> Appointments
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 px-4 py-3 rounded-lg font-medium transition">
              <i className="fa-regular fa-folder-open w-5"></i> Medical Records
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 px-4 py-3 rounded-lg font-medium transition">
              <i className="fa-solid fa-file-prescription w-5"></i> Prescriptions
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 px-4 py-3 rounded-lg font-medium transition">
              <i className="fa-solid fa-kit-medical w-5"></i> Emergency Card
            </a>
          </nav>
        </div>

        <div className="p-4 space-y-2">
          <button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-bold transition shadow-sm">
            <i className="fa-solid fa-truck-medical"></i> Emergency SOS
          </button>
          <a href="#" className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium transition text-sm">
            <i className="fa-regular fa-circle-question w-5"></i> Help Center
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium transition text-sm">
            <i className="fa-solid fa-arrow-right-from-bracket w-5"></i> Sign Out
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full relative overflow-y-auto">
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="relative w-96">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input type="text" placeholder="Search records, medications..." className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500 text-sm text-gray-700" />
          </div>
          <div className="flex items-center gap-5 text-gray-500">
            <button className="hover:text-blue-600 transition relative">
              <i className="fa-regular fa-bell text-xl"></i>
              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-2 h-2"></span>
            </button>
            <button className="hover:text-blue-600 transition"><i class="fa-regular fa-circle-question text-xl"></i></button>
            <img src="https://ui-avatars.com/api/?name=Alex&background=EBF4FF&color=1E3A8A" alt="Profile" className="w-8 h-8 rounded-full border border-gray-200 cursor-pointer" />
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto w-full space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Welcome to MediVault, Alex</h2>
              <p className="text-gray-500 mt-1">Let's get your health profile started today.</p>
            </div>
            <button className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition shadow-sm">
              <i className="fa-solid fa-clock-rotate-left"></i> View History
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-blue-600 rounded-2xl p-8 text-white relative overflow-hidden shadow-md flex justify-between items-center">
              <div className="z-10 max-w-md">
                <span className="text-blue-200 text-xs font-bold tracking-wider uppercase mb-2 block">Action Required</span>
                <h3 className="text-2xl font-bold mb-3">Medical Profile Completion</h3>
                <p className="text-blue-100 text-sm mb-6 leading-relaxed">Complete your medical history to help doctors provide better care and to receive personalized health alerts.</p>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-blue-100 mb-2">
                    <span>Current Progress</span>
                    <span>0%</span>
                  </div>
                  <div className="w-full bg-blue-800 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-0"></div>
                  </div>
                </div>
                
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2.5 rounded-lg font-bold text-sm transition flex items-center gap-2">
                  Complete My Profile <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
              <div className="hidden md:block z-10 w-48 h-48 rounded-xl overflow-hidden shadow-inner flex-shrink-0">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPdcmPdXYlKIStUOWJpRruQEvcCn8NMEXRz5_LjkXDX8DjealpCCcl3hypXN8fRpZB1QjQDnnvelQovFl2l9yA-8MJCvW8epm24meBLbB4SkvMqJSY5O3_BKgC4wgnbHCPj6mrp3g7QOv5bHCeaBj12PD6tNGiC1Z0Y6HjulTKTRqpNjT_O1aXx95YlJKxdU0ZS-hnXPnaUeW2HMFIk_WXYwN_-rXwH7BCL5GJcahccezuezNdIYXXjG0CHNV43lQiFGbDirmkoLg" alt="Medical Clipboard" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-between">
              <button className="bg-white p-5 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition flex items-start gap-4 text-left group">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-full group-hover:bg-blue-600 group-hover:text-white transition">
                  <i className="fa-solid fa-plus"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Add Medication</h4>
                  <p className="text-xs text-gray-500 mt-1">Log a new prescription</p>
                </div>
              </button>
              <button className="bg-white p-5 rounded-xl border border-gray-200 hover:border-green-400 hover:shadow-md transition flex items-start gap-4 text-left group">
                <div className="bg-green-50 text-green-600 p-3 rounded-full group-hover:bg-green-600 group-hover:text-white transition">
                  <i className="fa-regular fa-calendar-plus"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Add Appointment</h4>
                  <p className="text-xs text-gray-500 mt-1">Schedule a follow-up</p>
                </div>
              </button>
              <button className="bg-white p-5 rounded-xl border border-gray-200 hover:border-purple-400 hover:shadow-md transition flex items-start gap-4 text-left group">
                <div className="bg-purple-50 text-purple-600 p-3 rounded-full group-hover:bg-purple-600 group-hover:text-white transition">
                  <i className="fa-solid fa-cloud-arrow-up"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Upload Record</h4>
                  <p className="text-xs text-gray-500 mt-1">PDF, JPG or Scan</p>
                </div>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col h-64">
              <h4 className="font-semibold text-gray-800 flex items-center gap-2 mb-auto">
                <img src="https://healthicons.org/icons/svg/filled/devices/medicine-bottle.svg" alt="Medicine Bottle" className="w-5 h-5 filter-blue" /> Today's Medications
              </h4>
              <div className="text-center flex flex-col items-center justify-center">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center text-gray-400 text-2xl mb-4">
                  <i className="fa-solid fa-syringe"></i>
                </div>
                <h5 className="text-sm font-bold text-gray-800 mb-1">No medications logged</h5>
                <p className="text-xs text-gray-500 mb-4 max-w-[200px]">Start tracking your daily meds to get reminders and stay on schedule.</p>
                <button className="text-blue-600 font-bold text-sm hover:underline">+ Add First Med</button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col h-64">
              <h4 className="font-semibold text-gray-800 flex items-center gap-2 mb-auto">
                <img src="https://healthicons.org/icons/svg/outline/objects/calendar.svg" alt="Calendar" className="w-5 h-5 filter-green" /> Appointments
              </h4>
              <div className="text-center flex flex-col items-center justify-center">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <img src="https://cdn-icons-png.flaticon.com/128/13606/13606288.png" alt="No Appointments" className="w-8 h-8" />
                </div>
                <h5 className="text-sm font-bold text-gray-800 mb-1">No upcoming visits</h5>
                <p className="text-xs text-gray-500 mb-4 max-w-[200px]">Your schedule is clear. Add visits to receive prep instructions.</p>
                <button className="text-green-600 font-bold text-sm hover:underline">Book a Consultation</button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col h-64">
              <h4 className="font-semibold text-gray-800 flex items-center gap-2 mb-auto">
                <svg className="w-5 h-5 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 16l4-5 5 4 9-11" />
                  <circle cx="17" cy="17" r="3" />
                  <path d="M19.2 19.2l2.8 2.8" />
                </svg>
                Weekly Adherence
              </h4>
              <div className="text-center flex flex-col items-center justify-center">
                <div className="flex items-end justify-center gap-2 mb-4 h-16 opacity-30 w-full">
                  <div className="w-4 bg-gray-300 rounded-t-sm h-1/4"></div>
                  <div className="w-4 bg-gray-300 rounded-t-sm h-1/2"></div>
                  <div className="w-4 bg-gray-300 rounded-t-sm h-1/3"></div>
                  <div className="w-4 bg-gray-300 rounded-t-sm h-3/4"></div>
                  <div className="w-4 bg-gray-300 rounded-t-sm h-1/4"></div>
                  <div className="w-4 bg-gray-300 rounded-t-sm h-full"></div>
                </div>
                <h5 className="text-sm font-bold text-gray-800 mb-1">Insight pending</h5>
                <p className="text-xs text-gray-500 max-w-[200px]">Adherence data will appear here once you start logging your daily doses.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10 flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center mb-4">
              <img src="https://media.istockphoto.com/id/166083043/vector/file-cabinet.jpg?s=612x612&w=0&k=20&c=D8UxskKGjrxnBrJp55O_cGIuVHVdcA66X6PA5VtyaWs=" alt="Medical Vault Empty" className="w-24 h-24 object-contain mix-blend-multiply" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Your Medical Vault is Empty</h3>
            <p className="text-sm text-gray-500 max-w-md mb-6">Securely store your blood tests, vaccination records, and imaging results. We support automated importing from over 3,000+ medical providers.</p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition shadow-sm flex items-center gap-2">
                <i className="fa-solid fa-file-arrow-up"></i> Upload First Record
              </button>
              <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2.5 rounded-lg font-bold text-sm transition shadow-sm flex items-center gap-2">
                <i className="fa-solid fa-link"></i> Connect Hospital Portal
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;