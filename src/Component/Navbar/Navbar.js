import React, { useState } from "react";
import Close from "../../assets/icon/close";
import Logo from "../../assets/log2.png";
import { Link } from "react-scroll";

const Navbar = () => {
  let [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10000) {
      setNav(true);
    }
    else {
      setNav(false);
    }
  }
  window.addEventListener('scroll', changeBackground);
  return (
    <nav className="w-full sm:flex justify-between items-center pt-4 sticky top-0 bg-bgblue/60 backdrop-filter backdrop-blur-xl px-5 md:px-4 lg:px-28 ">
      <div className=" text-slate-200 font-Sora text-base flex items-center">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div
          className="absolute right-0 flex items-center sm:hidden "
          onClick={() => setNav(!nav)}
          smooth={true} duration={2000}
        >
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400"
            aria-controls="mobile-menu"
            aria-expanded="false"
            name={nav ? "close" : "menu"}
          >
            <span className="sr-only"></span>

            <svg
              className="block h-12 w-12"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width=""
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg
              className="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* menu icon */}

      <div
        className={`sm:hidden bg-[#222E50] fixed top-0 ${nav ? "block right-0" : "hidden"
          } px-2 pt-2 pb-3 space-y-1 transition-all duration-500 ease-in-out translate-x-0 `}
      >
        <div className="pl-4 py-4">
          <Close onClick={() => setNav(!nav)} />

          <ul className="sm:flex justify-evenly align-middle pt-5">

            <li className="mx-4 my-5 sm:my-0 text-[#C7D2FC] font-Sora text-base">
              <p className="border-b-2 border-transparent cursor-pointer text-text hover:border-b-2 hover:border-[#52DEE5]">
                <Link to="about" onClick={() => setNav(!nav)}
                  smooth={true} duration={1000}>
                  <span className="text-[#52DEE5]">1.</span> About
                </Link>
              </p>
            </li>

            <li className="mx-4 my-5 sm:my-0 text-[#C7D2FC] font-Sora text-base">
              <p className="border-b-2 border-transparent cursor-pointer text-text hover:border-b-2 hover:border-[#52DEE5]">
                <Link to="about" onClick={() => setNav(!nav)}
                  smooth={true} duration={1000}>
                  <span className="text-[#52DEE5]">2.</span> Projects
                </Link>
              </p>
            </li>

            <li className="mx-4 my-5 sm:my-0 text-[#C7D2FC] font-Sora text-base">
              <p className="border-b-2 border-transparent cursor-pointer text-text hover:border-b-2 hover:border-[#52DEE5]">
                <Link to="skills" onClick={() => setNav(!nav)}
                  smooth={true} duration={1000}>
                  <span className="text-[#52DEE5]">3.</span> Skills

                </Link>
              </p>
            </li>

            <li className="mx-4 my-5 sm:my-0 text-[#C7D2FC] font-Sora text-base">
              <p className="border-b-2 border-transparent cursor-pointer text-text hover:border-b-2 hover:border-[#52DEE5]">
                <Link to="contact" onClick={() => setNav(!nav)}
                  smooth={true} duration={1000}>
                  <span className="text-[#52DEE5]">4.</span> Contact
                </Link>
              </p>
            </li>
          </ul>
        </div>
      </div>
      {/* desktop */}
      <div className="hidden sm:block">
        <ul className="sm:flex justify-evenly align-middle">

          <li className="mx-4 my-5 sm:my-0 text-[#C7D2FC] font-Sora text-base">
            <p className="border-b-2 border-transparent cursor-pointer text-text hover:border-b-2 hover:border-[#52DEE5]">
              <Link to="about" smooth={true} duration={1000}>
                <span className="text-[#52DEE5]">1.</span> About
              </Link>
            </p>
          </li>

          <li className="mx-4 my-5 sm:my-0 text-[#C7D2FC] font-Sora text-base">
            <p className="border-b-2 border-transparent cursor-pointer text-text hover:border-b-2 hover:border-[#52DEE5]">
              <Link to="project" smooth={true} duration={1000}>
                <span className="text-[#52DEE5]">2.</span> Projects
              </Link>
            </p>
          </li>

          <li className="mx-4 my-5 sm:my-0 text-[#C7D2FC] font-Sora text-base">
            <p className="border-b-2 border-transparent cursor-pointer text-text hover:border-b-2 hover:border-[#52DEE5]">
              <Link to="skills" smooth={true} duration={1000}>
                <span className="text-[#52DEE5]">3.</span> Skills
              </Link>
            </p>
          </li>

          <li className="mx-4 my-5 sm:my-0 text-[#C7D2FC] font-Sora text-base">
            <p className="border-b-2 border-transparent cursor-pointer text-text hover:border-b-2 hover:border-[#52DEE5]">
              <Link to="contact" smooth={true} duration={1000}>
                <span className="text-[#52DEE5]">4.</span> Contact
              </Link>
            </p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
