import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <nav className="bg-[#1f2937] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center min-h-16 ">
              {/* Logo */}
              <div className="text-[28px] font-bold flex items-center space-x-2.5">
                {/* <img
                  src="Images/nile logo thin.png"
                  alt=""
                  className="w-9 h-7"
                /> */}
                <a href="">JUXTA</a>
              </div>

              {/* Hamburger Button (Mobile) */}
              <div className="flex space-x-5 md:hidden">
                <div className="hidden sm:flex space-x-6">
                  {/* <button className="bg-[#FFE492] text-[#043873] h-15 w-31 rounded-[8px] my-4">
                    <a href="" className="hover:text-blue-500">
                      Contact Us
                    </a>
                  </button> */}

                  <button className="bg-[#4F9CF9] w-57 h-15 rounded-[8px] my-4">
                    <a href="" className="hover:text-blue-500">
                      Try Whitepace free
                    </a>
                  </button>
                </div>

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white focus:outline-none cursor-pointer"
                  aria-label="Toggle menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links (Desktop) */}
              <div className="hidden md:flex items-center space-x-5 dm-sans-font font-medium text-lg">
                <a href="" className=" hover:text-blue-500">
                  Shop
                </a>

                <Link
                  to="/"
                  className="hover:text-blue-500"
                  state={{ scrollTo: "product-section" }}
                >
                  Product
                </Link>

                <a
                  href=""
                  // state={{ scrollTo: 'project-section' }}
                  className="hover:text-blue-500"
                >
                  Resources
                </a>

                <a href="" className="hover:text-blue-500">
                  Contact Us
                </a>

                <div className="hidden md:flex space-x-6">
                  <button className="bg-[#4F9CF9] hover:text-white py-3 px-5 rounded-[8px] my-4">
                    <a href="" className="hover:text-blue-500">
                      Contact Us
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden flex flex-col px-4 pb-4 space-y-2">
              <a href="" className="hover:text-blue-500 py-1 px-2">
                Shops
              </a>

              <Link
                to="/"
                className="hover:text-blue-500 py-1 px-2"
                state={{ scrollTo: "product-section" }}
              >
                Product
              </Link>

              <a
                href=""
                // state={{ scrollTo: 'project-section' }}
                className="hover:text-blue-500 py-1 px-2"
              >
                Resources
              </a>

              <a href="" className="hover:text-blue-500 py-1.5 px-2">
                Contact Us
              </a>

              <div className="flex flex-col md:hidden">
                <button className="bg-[#4F9CF9] w-full h-15 rounded-[8px] my-3">
                  <a href="" className="hover:text-blue-500">
                    Contact Us
                  </a>
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
