import { Bell, BriefcaseMedical, Calendar, FileText, FolderOpen, LayoutDashboard, LogOut, Menu, Siren, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "./sidebar.css"

const tabs = [
    {
        id: "dashboard",
        title: "Dashboard",
        icon: LayoutDashboard,
    },
    {
        id: "medical-profile",
        title: "Medical Profile",
        icon: User,
    },
    {
        id: "appointment",
        title: "Appointment",
        icon: Calendar,
    },
    {
        id: "medical-records",
        title: "Medical Records",
        icon: FolderOpen,
    },
    {
        id: "prescriptions",
        title: "Prescriptions",
        icon: FileText,
    },
    {
        id: "emergency-card",
        title: "Emergency Card",
        icon: Siren,
    },
    {
        id: "notifications",
        title: "Notifications",
        icon: Bell,
    },
];

export default function Sidebar() {


    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("dashboard");
    const sidebarRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        }

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <div className="sidebar">
            <button
                className="md:hidden p-2"
                onClick={() => setOpen(!open)}
            >
                <Menu />
            </button>
            <aside ref={sidebarRef}
                className={`
                fixed md:static
                top-0 left-0
                h-screen w-64
                bg-white
                flex flex-col
                transition-transform duration-300
                ${open ? "translate-x-0" : "-translate-x-full"}
                md:translate-x-0`}>
                {/* Logo */}
                <div className="logo flex items-center gap-2 p-6 ">
                    <BriefcaseMedical className="logo-icon w-9 h-9  " />
                    <div className="">
                        <h1 className="text-xl font-bold ">
                            MedithVault
                        </h1>
                        <p className="text-sm font-medium">Health Management</p>
                    </div>
                </div>

                {/* Tabs */}

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;

                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-3 w-full p-3 rounded-lg text-left text-label-md transition-colors 
                                    ${activeTab === tab.id
                                        ? "active"
                                        : "hover:bg-blue-100"
                                    }`}
                            >
                                <Icon className="h-5 w-5" />
                                {tab.title}
                            </button>
                        );
                    })}
                </nav>
                {/* Bottom Buttons */}
                <div className="p-4  space-y-3">

                    <button className="emergency-sos flex items-center gap-2 justify-center w-full text-sm font-medium py-2 rounded-lg  ">
                        <Siren className="w-5 h-5" />Emergency SOS
                    </button>
                    {/* hover:bg-blue-100 w-full */}
                    <button className="sign-out text-label-md flex items-center gap-3  text-left p-3 rounded-lg ">
                        <LogOut className="w-4 h-4" />Sign Out
                    </button>
                </div>
            </aside>
        </div>
    )
}