import { NavLink, Outlet } from "react-router-dom"

export function PageLayout(){
    return (
       <div className="min-h-screen bg-gray-50">
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="font-semibold">Pokemon Stock Monitor</div>

                    <nav className="flex gap-4 text-sm">
                        <NavLink
                            to="/"
                            className={({ isActive }) => 
                                isActive ? "text-gray-900 font-medium" : "text-gray-500 hover:text-gray-800"
                        }
                        >
                        Dashboard    
                        </NavLink>
                    </nav>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8">
                <Outlet />
            </main>
       </div>
    );
}
