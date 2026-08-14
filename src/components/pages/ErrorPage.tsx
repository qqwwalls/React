import { useRouteError, isRouteErrorResponse, Link } from "react-router";

const ErrorPage = () => {
    const error = useRouteError();
    
    let errorMessage = "Unknown Error";
    if (isRouteErrorResponse(error)) {
        errorMessage = `${error.status} ${error.statusText}`;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6">
            <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center border border-gray-100">
                <h1 className="text-6xl font-black text-red-500 mb-4 drop-shadow-sm">
                    Oops!
                </h1>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Щось пішло не так
                </h2>
                
                <p className="text-gray-500 mb-6 font-medium">
                    {errorMessage}
                </p>
                
                <p className="text-gray-500 text-sm mb-8">
                    Спробуйте повернутися на головну сторінку.
                </p>

                <Link
                    to="/"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-xl transition-colors shadow-md hover:shadow-lg"
                >
                    На головну
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
