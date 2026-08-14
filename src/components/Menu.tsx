import { NavLink } from "react-router";

const Menu = () => {
    return (
        <nav className="bg-white/70 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-40 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-12 items-center justify-center space-x-8">
                    <NavLink
                        to="/categories"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-600 border-b-2 border-blue-600 px-1 py-3 text-sm font-semibold transition-colors"
                                : "text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300 px-1 py-3 text-sm font-medium transition-colors"
                        }
                    >
                        Categories
                    </NavLink>
                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-600 border-b-2 border-blue-600 px-1 py-3 text-sm font-semibold transition-colors"
                                : "text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300 px-1 py-3 text-sm font-medium transition-colors"
                        }
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="/contacts"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-600 border-b-2 border-blue-600 px-1 py-3 text-sm font-semibold transition-colors"
                                : "text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300 px-1 py-3 text-sm font-medium transition-colors"
                        }
                    >
                        Contacts
                    </NavLink>
                    <NavLink
                        to="/search"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-600 border-b-2 border-blue-600 px-1 py-3 text-sm font-semibold transition-colors"
                                : "text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300 px-1 py-3 text-sm font-medium transition-colors"
                        }
                    >
                        Search
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
