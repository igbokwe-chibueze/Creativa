

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <nav className="w-full bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <div className="text-lg font-bold">Neve</div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Home
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                  About
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                  Blog
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                  Shop
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                  Contact
                </a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <a href="#" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M3 7h18M3 11h18M3 15h18M3 19h18M3 23h18" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <header className="w-full flex-1 flex flex-col items-center justify-center text-center bg-gray-100">
        <div className="max-w-2xl mx-auto p-8">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Create and grow your website fast, with Neve
          </h1>
          <div className="mt-8 flex justify-center space-x-4">
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-md text-lg font-medium hover:bg-yellow-600">
              Start Now
            </button>
            <button className="bg-white text-gray-900 py-2 px-4 rounded-md text-lg font-medium border border-gray-300 hover:bg-gray-50">
              Download
            </button>
          </div>
        </div>
      </header>
      <footer className="w-full py-4 bg-white text-center">
        <p className="text-sm text-gray-500">© 2023 Neve. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
