import { NavLink } from "react-router";

const NotFound = () => {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
            <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">
                404
            </h1>

            <h2 className="mt-6 text-4xl font-extrabold text-gray-900 tracking-tight">
                Oops! Page not found
            </h2>

            <p className="mt-4 max-w-lg text-lg text-gray-500">
                The page you are looking for may have been removed,
                renamed, or is temporarily unavailable. Let's get you back on track!
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <NavLink
                    to="/"
                    className="rounded-xl bg-blue-600 px-8 py-3.5 font-bold text-white transition hover:bg-blue-700 shadow-lg shadow-blue-200"
                >
                    🏠 Back to Home
                </NavLink>

                <NavLink
                    to="/categories"
                    className="rounded-xl border-2 border-blue-600 px-8 py-3.5 font-bold text-blue-600 transition hover:bg-blue-50"
                >
                    📂 Browse Categories
                </NavLink>
            </div>

            <div className="mt-16 text-6xl animate-bounce">
                🛒
            </div>
        </div>
    );
};

export default NotFound;
