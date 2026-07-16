import { useState } from "react";
import {
    Pill,
    Plus,
    CheckCircle2,
    XCircle,
    Clock,
    Search,
    Trash2,
    Calendar,
    X,
} from "lucide-react";

const INITIAL_MEDICATIONS = [
    {
        id: 1,
        name: "Panadol Joint",
        dosage: "1000mg",
        frequency: "Every 8 hours",
        status: "active",
        durationDays: 7,
        startDate: "2026-07-15",
        instructions: "Take after meals with plenty of water.",
    },
    {
        id: 2,
        name: "Vitamin C",
        dosage: "500mg",
        frequency: "Once daily",
        status: "active",
        durationDays: 30,
        startDate: "2026-07-01",
        instructions: "Best taken in the morning.",
    },
];

const INITIAL_DOSES = [
    {
        id: 101,
        medicationName: "Panadol Joint",
        medicationDosage: "1000mg",
        scheduledTime: "08:00",
        status: "pending",
    },
    {
        id: 102,
        medicationName: "Vitamin C",
        medicationDosage: "500mg",
        scheduledTime: "10:00",
        status: "taken",
    },
    {
        id: 103,
        medicationName: "Panadol Joint",
        medicationDosage: "1000mg",
        scheduledTime: "16:00",
        status: "pending",
    },
];

const INITIAL_HISTORY = [
    {
        id: 201,
        medicationName: "Panadol Joint",
        medicationDosage: "1000mg",
        scheduledTime: "08:00",
        scheduledDate: "2026-07-15",
        status: "taken",
    },
    {
        id: 202,
        medicationName: "Vitamin C",
        medicationDosage: "500mg",
        scheduledTime: "10:00",
        scheduledDate: "2026-07-15",
        status: "missed",
    },
];

export default function Medications() {
    const [activeTab, setActiveTab] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [addOpen, setAddOpen] = useState(false);

    const [medications, setMedications] = useState(INITIAL_MEDICATIONS);
    const [todayDoses, setTodayDoses] = useState(INITIAL_DOSES);
    const [history, setHistory] = useState(INITIAL_HISTORY);

    // Form State
    const [form, setForm] = useState({
        name: "",
        dosage: "",
        frequency: "",
        timesPerDay: 1,
        durationDays: "",
        startDate: "",
        instructions: "",
    });

    const handleAddMedication = (e) => {
        e.preventDefault();
        const medId = Date.now();
        const medItem = {
            id: medId,
            name: form.name,
            dosage: form.dosage,
            frequency: form.frequency,
            status: "active",
            durationDays: form.durationDays ? Number(form.durationDays) : undefined,
            startDate: form.startDate || new Date().toISOString().split("T")[0],
            instructions: form.instructions,
        };
        setMedications([medItem, ...medications]);

        const newDoses = [];
        const times = Number(form.timesPerDay);
        for (let i = 0; i < times; i++) {
            const hour = Math.floor((16 / times) * i) + 8;
            const formattedTime = `${String(hour).padStart(2, "0")}:00`;
            newDoses.push({
                id: medId + i,
                medicationName: form.name,
                medicationDosage: form.dosage,
                scheduledTime: formattedTime,
                status: "pending",
            });
        }
        setTodayDoses([...newDoses, ...todayDoses]);
        setAddOpen(false);
        setForm({
            name: "",
            dosage: "",
            frequency: "",
            timesPerDay: 1,
            durationDays: "",
            startDate: "",
            instructions: "",
        });
    };

    const handleDeleteMedication = (id) => {
        setMedications(medications.filter((m) => m.id !== id));
    };

    const handleUpdateDoseStatus = (doseId, status) => {
        setTodayDoses(
            todayDoses.map((dose) =>
                dose.id === doseId ? { ...dose, status } : dose
            )
        );

        const matchedDose = todayDoses.find((d) => d.id === doseId);
        if (matchedDose) {
            const historyItem = {
                id: Date.now(),
                medicationName: matchedDose.medicationName,
                medicationDosage: matchedDose.medicationDosage,
                scheduledTime: matchedDose.scheduledTime,
                scheduledDate: new Date().toISOString().split("T")[0],
                status: status,
            };
            setHistory([historyItem, ...history]);
        }
    };

    const filteredMeds = medications.filter((m) =>
        m.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const pendingDoses = todayDoses.filter((d) => d.status === "pending");
    const takenDoses = todayDoses.filter((d) => d.status === "taken");

    return (
        <div className="space-y-6 p-6 max-w-5xl mx-auto font-sans">
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-4">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900">Medications</h2>
                    <p className="text-slate-500 mt-1 text-sm">
                        Manage your medications and track doses
                    </p>
                </div>
                <button
                    onClick={() => setAddOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors text-sm shadow-sm"
                >
                    <Plus className="h-4 w-4" />
                    Add Medication
                </button>
            </div>

            {/* Tabs Headers */}
            <div className="flex gap-2 border-b border-slate-200 pb-px">
                <button
                    onClick={() => setActiveTab("all")}
                    className={`pb-2 px-4 text-sm font-medium border-b-2 transition-colors ${activeTab === "all"
                            ? "border-blue-600 text-blue-600"
                            : "border-transparent text-slate-500 hover:text-slate-700"
                        }`}
                >
                    All Medications
                </button>
                <button
                    onClick={() => setActiveTab("today")}
                    className={`pb-2 px-4 text-sm font-medium border-b-2 transition-colors flex items-center gap-1.5 ${activeTab === "today"
                            ? "border-blue-600 text-blue-600"
                            : "border-transparent text-slate-500 hover:text-slate-700"
                        }`}
                >
                    Today's Doses
                    {pendingDoses.length > 0 && (
                        <span className="h-5 w-5 rounded-full bg-blue-600 text-[10px] text-white flex items-center justify-center font-bold">
                            {pendingDoses.length}
                        </span>
                    )}
                </button>
                <button
                    onClick={() => setActiveTab("history")}
                    className={`pb-2 px-4 text-sm font-medium border-b-2 transition-colors ${activeTab === "history"
                            ? "border-blue-600 text-blue-600"
                            : "border-transparent text-slate-500 hover:text-slate-700"
                        }`}
                >
                    History
                </button>
            </div>

            {/* Tab Contents */}
            {activeTab === "all" && (
                <div className="space-y-4">
                    <div className="relative max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search medications..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        />
                    </div>

                    {filteredMeds.length === 0 ? (
                        <div className="border border-dashed rounded-xl py-12 text-center text-slate-500 bg-white">
                            <Pill className="h-12 w-12 mx-auto text-slate-300 mb-3" />
                            <p className="font-medium">No medications found</p>
                        </div>
                    ) : (
                        <div className="grid gap-3">
                            {filteredMeds.map((med) => (
                                <div key={med.id} className="border rounded-xl p-4 bg-white shadow-sm flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-semibold text-slate-800 text-lg">{med.name}</h3>
                                            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                                                {med.status}
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-600 mt-1">
                                            {med.dosage} — {med.frequency}
                                        </p>
                                        <div className="flex items-center gap-4 mt-3 text-xs text-slate-400">
                                            {med.durationDays && (
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    {med.durationDays} days
                                                </span>
                                            )}
                                            {med.startDate && (
                                                <span>Started {new Date(med.startDate).toLocaleDateString()}</span>
                                            )}
                                        </div>
                                        {med.instructions && (
                                            <p className="text-xs text-slate-600 mt-3 bg-slate-50 p-2 rounded-lg border">
                                                {med.instructions}
                                            </p>
                                        )}
                                    </div>
                                    <button
                                        className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                                        onClick={() => {
                                            if (confirm("Are you sure you want to delete this medication?")) {
                                                handleDeleteMedication(med.id);
                                            }
                                        }}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {activeTab === "today" && (
                <div className="space-y-4">
                    {todayDoses.length === 0 ? (
                        <div className="border border-dashed rounded-xl py-12 text-center text-slate-500 bg-white">
                            <Pill className="h-12 w-12 mx-auto text-slate-300 mb-3" />
                            <p className="font-medium">No doses for today</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {pendingDoses.length > 0 && (
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                        Pending ({pendingDoses.length})
                                    </h3>
                                    <div className="space-y-2">
                                        {pendingDoses.map((dose) => (
                                            <div key={dose.id} className="flex items-center justify-between border rounded-xl p-4 bg-white shadow-sm">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-8 w-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
                                                        <Clock className="h-4 w-4" />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-slate-800 text-sm">{dose.medicationName}</p>
                                                        <p className="text-xs text-slate-500">{dose.medicationDosage} — {formatTime(dose.scheduledTime)}</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => handleUpdateDoseStatus(dose.id, "taken")}
                                                        className="px-3 py-1 text-xs font-semibold rounded-lg border border-emerald-500 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all flex items-center gap-1"
                                                    >
                                                        <CheckCircle2 className="h-3 w-3" /> Take
                                                    </button>
                                                    <button
                                                        onClick={() => handleUpdateDoseStatus(dose.id, "missed")}
                                                        className="px-3 py-1 text-xs font-semibold rounded-lg border border-rose-300 text-rose-600 hover:bg-rose-500 hover:text-white transition-all flex items-center gap-1"
                                                    >
                                                        <XCircle className="h-3 w-3" /> Skip
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {takenDoses.length > 0 && (
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                        Taken ({takenDoses.length})
                                    </h3>
                                    <div className="space-y-2">
                                        {takenDoses.map((dose) => (
                                            <div key={dose.id} className="flex items-center justify-between border rounded-xl p-4 bg-emerald-50/40 border-emerald-100 shadow-sm">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-8 w-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                                                        <CheckCircle2 className="h-4 w-4" />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-slate-800 text-sm">{dose.medicationName}</p>
                                                        <p className="text-xs text-slate-500">{dose.medicationDosage} — {formatTime(dose.scheduledTime)}</p>
                                                    </div>
                                                </div>
                                                <span className="text-xs font-bold text-emerald-600 uppercase">Taken</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

            {activeTab === "history" && (
                <div>
                    {history.length === 0 ? (
                        <div className="border border-dashed rounded-xl py-12 text-center text-slate-500 bg-white">
                            <Clock className="h-12 w-12 mx-auto text-slate-300 mb-3" />
                            <p className="font-medium">No history yet</p>
                        </div>
                    ) : (
                        <div className="border rounded-xl bg-white shadow-sm divide-y">
                            {history.map((h) => (
                                <div key={h.id} className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className={`h-8 w-8 rounded-full flex items-center justify-center ${h.status === "taken" ? "bg-emerald-500 text-white" : "bg-rose-500 text-white"
                                            }`}>
                                            {h.status === "taken" ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-800 text-sm">{h.medicationName}</p>
                                            <p className="text-xs text-slate-400">{h.medicationDosage}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-slate-700">{formatTime(h.scheduledTime)}</p>
                                        <p className="text-xs text-slate-400">{new Date(h.scheduledDate).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Custom Add Modal */}
            {addOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl relative max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => setAddOpen(false)}
                            className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Add New Medication</h3>

                        <form onSubmit={handleAddMedication} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Medication Name *</label>
                                <input
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    placeholder="e.g., Paracetamol"
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Dosage *</label>
                                <input
                                    type="text"
                                    required
                                    value={form.dosage}
                                    onChange={(e) => setForm({ ...form, dosage: e.target.value })}
                                    placeholder="e.g., 500mg"
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Frequency *</label>
                                <input
                                    type="text"
                                    required
                                    value={form.frequency}
                                    onChange={(e) => setForm({ ...form, frequency: e.target.value })}
                                    placeholder="e.g., 3 times daily"
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Times Per Day *</label>
                                <select
                                    value={form.timesPerDay}
                                    onChange={(e) => setForm({ ...form, timesPerDay: Number(e.target.value) })}
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                >
                                    {[1, 2, 3, 4, 5, 6].map((n) => (
                                        <option key={n} value={n}>
                                            {n} {n === 1 ? "time" : "times"} per day
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Duration (days)</label>
                                <input
                                    type="number"
                                    value={form.durationDays}
                                    onChange={(e) => setForm({ ...form, durationDays: e.target.value })}
                                    placeholder="Optional"
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Start Date</label>
                                <input
                                    type="date"
                                    value={form.startDate}
                                    onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Instructions</label>
                                <textarea
                                    value={form.instructions}
                                    onChange={(e) => setForm({ ...form, instructions: e.target.value })}
                                    placeholder="Take after meals, etc."
                                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-20"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2.5 rounded-lg text-sm shadow transition-colors"
                            >
                                Add Medication
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

function formatTime(time) {
    if (!time) return "";
    const [hours, minutes] = time.split(":");
    const h = parseInt(hours);
    const ampm = h >= 12 ? "PM" : "AM";
    const h12 = h % 12 || 12;
    return `${h12}:${minutes} ${ampm}`;
}