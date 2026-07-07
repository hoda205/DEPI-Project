import { useState } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { Outlet } from "react-router-dom";

export default function Page() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="flex">
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <div className="flex-1 lg:ml-64">
                <Header
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />

                <main className="p-6">
                    <Outlet />
                </main>
        </div>
        </div >
    );
}