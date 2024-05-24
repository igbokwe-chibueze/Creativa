import React, { useState } from "react";
import { navLinks2 } from "../constants/Data"; // Ensure this path is correct

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({});

  const toggleDropdown = (key) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const renderSubMenu = (subMenu, parentKey) => {
    return (
      <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-20">
        {subMenu.map((item, index) => {
          const key = `${parentKey}-${index}`;
          if (item.subMenu) {
            return (
              <div className="relative" key={key}>
                <button
                  onClick={() => toggleDropdown(key)}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-200"
                >
                  {item.title}
                </button>
                {dropdowns[key] && renderSubMenu(item.subMenu, key)}
              </div>
            );
          }
          return (
            <a
              key={key}
              href={item.href}
              className="block px-4 py-2 text-sm hover:bg-gray-200"
            >
              {item.title}
            </a>
          );
        })}
      </div>
    );
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navLinks2.map((link, index) => {
                  const key = `menu-${index}`;
                  if (link.subMenu) {
                    return (
                      <div className="relative" key={key}>
                        <button
                          onClick={() => toggleDropdown(key)}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          {link.title}
                        </button>
                        {dropdowns[key] && renderSubMenu(link.subMenu, key)}
                      </div>
                    );
                  }
                  return (
                    <a
                      key={key}
                      href={link.href}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {link.title}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks2.map((link, index) => {
              const key = `mobile-menu-${index}`;
              if (link.subMenu) {
                return (
                  <div className="relative" key={key}>
                    <button
                      onClick={() => toggleDropdown(key)}
                      className="w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {link.title}
                    </button>
                    {dropdowns[key] && (
                      <div className="mt-2 space-y-1">
                        {link.subMenu.map((item, subIndex) => {
                          const subKey = `${key}-${subIndex}`;
                          if (item.subMenu) {
                            return (
                              <div className="relative" key={subKey}>
                                <button
                                  onClick={() => toggleDropdown(subKey)}
                                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                >
                                  {item.title}
                                </button>
                                {dropdowns[subKey] && renderSubMenu(item.subMenu, subKey)}
                              </div>
                            );
                          }
                          return (
                            <a
                              key={subKey}
                              href={item.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                            >
                              {item.title}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={key}
                  href={link.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.title}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
