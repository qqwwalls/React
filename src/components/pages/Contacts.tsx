const Contacts = () => {
    return (
        <div className="bg-white/40 rounded-3xl p-8 border border-white/60 shadow-xl backdrop-blur-sm overflow-hidden">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                        Get in Touch
                    </h1>
                    <p className="mt-4 text-lg text-gray-500">
                        We'd love to hear from you. Reach out to our admin team anytime!
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info Card */}
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg transform transition hover:scale-[1.02]">
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-white/20 p-3 rounded-full">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-blue-100 text-sm">Email us</p>
                                    <p className="font-semibold text-lg">admin@store.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-white/20 p-3 rounded-full">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-blue-100 text-sm">Call us</p>
                                    <p className="font-semibold text-lg">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-white/20 p-3 rounded-full">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-blue-100 text-sm">Location</p>
                                    <p className="font-semibold text-lg">Kyiv, Ukraine</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 bg-gray-50" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea rows={4} className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 bg-gray-50" placeholder="How can we help?"></textarea>
                            </div>
                            <button type="button" className="w-full bg-blue-600 text-white rounded-xl py-3 px-4 font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-200">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
