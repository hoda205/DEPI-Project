import { Menu, Search } from "lucide-react";

export default function Header({ sidebarOpen, setSidebarOpen }) {
    return (
        // sticky top-0 z-30
        <header className=" h-16 bg-white border-b border-gray-200">
            <div className="flex h-full items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">

                {/* Menu */}
                <button
                    className="lg:hidden p-2 cursor-pointer rounded-lg hover:bg-gray-100 transition"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <Menu className="w-6 h-6" />
                </button>

                {/* Search */}
                <div className="relative flex-1 max-w-xl">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

                    <input
                        type="text"
                        placeholder="Search records, medications..."
                        className="
                            w-full
                            rounded-full
                            border border-gray-200
                            bg-gray-50
                            py-2
                            pl-10
                            pr-4
                            text-sm
                            focus:border-blue-500
                            focus:outline-none
            "
                    />
                </div>

                {/* Profile */}
                <button className="shrink-0">
                    <img
                        src="https://ui-avatars.com/api/?name=Alex&background=EBF4FF&color=1E3A8A"
                        alt="Profile"
                        className="w-9 h-9 rounded-full border border-gray-200"
                    />
                </button>
            </div>
        </header>
    );
}