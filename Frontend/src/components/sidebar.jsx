import { Bell, BriefcaseMedical, Calendar, FileText, FolderOpen, LayoutDashboard, LogOut, Siren, User, X } from "lucide-react";
import { useEffect, useRef } from "react";
import "./sidebar.css"
import { Link, NavLink } from "react-router-dom";

const tabs = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        path: "/",
    },
    {
        title: "Medical Profile",
        icon: User,
        path: "/profile",
    },
    {
        title: "Appointment",
        icon: Calendar,
        path: "/appointments",
    },
    {
        title: "Medical Records",
        icon: FolderOpen,
        path: "/records",
    },
    {
        title: "Prescriptions",
        icon: FileText,
        path: "/prescriptions",
    },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {



    const sidebarRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                setSidebarOpen(false);
            }
        }

        if (sidebarOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sidebarOpen]);


    return (

        <div className="sidebar">

            <aside ref={sidebarRef}
                className={`
                    fixed
                    top-0
                    left-0
                    bottom-0
                    w-64
                    bg-white
                    flex
                    flex-col
                    transition-transform
                    duration-300
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                    lg:translate-x-0
                    z-50
                `}>

                {/* Logo */}
                <div className="flex justify-between items-center p-6">
                    <div className="logo flex items-center gap-2  ">
                        <BriefcaseMedical className="logo-icon w-9 h-9  " />
                        <div className="">
                            <h1 className="text-xl font-bold ">
                                MedithVault
                            </h1>
                            <p className="text-sm font-medium">Health Management</p>
                        </div>
                    </div>
                    <button className="md:hidden p-1 rounded-md hover:bg-blue-100" onClick={() => setSidebarOpen(false)}><X className="w-4 h-4 cursor-pointer " /></button>
                </div>

                {/* Tabs */}

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;

                        return (
                            <NavLink
                                key={tab.path}
                                to={tab.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${isActive
                                        ? "bg-blue-600 text-white"
                                        : "hover:bg-blue-100"
                                    }`
                                }
                            >
                                <Icon className="h-5 w-5" />
                                {tab.title}
                            </NavLink>
                        );
                    })}
                </nav>
                {/* Bottom Buttons */}
                <div className="p-4  space-y-3">

                    
                    <Link to="/emergency">
                    <button className="emergency-sos flex items-center gap-2 justify-center w-full text-sm font-medium py-2 rounded-lg  ">
                        <Siren className="w-5 h-5" />Emergency SOS
                    </button>
                    </Link>
                    {/* hover:bg-blue-100 w-full */}
                    <Link to="/signin">
                    <button className="sign-out text-label-md flex items-center gap-3  text-left p-3 rounded-lg ">
                        <LogOut className="w-4 h-4" />Sign Out
                    </button></Link>
                </div>
            </aside>
        </div>
    )
}