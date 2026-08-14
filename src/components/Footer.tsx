const Footer = () => {
    return (
        <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} StoreAdmin. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
