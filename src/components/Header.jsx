import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Leaf } from "lucide-react";

const Header = ({ onSignInClick, onSignUpClick }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <header
      className="
        flex justify-between items-center 
        px-6 py-3 shadow-sm 
        w-screen box-border relative z-[100] 
        font-[Poppins] text-[16px]
      "
    >
      {/* Logo section */}
      <div className="flex items-center gap-[10px]">
        <div
          className="
            bg-[#fef3c7] rounded-full w-12 h-12 
            flex items-center justify-center
          "
        >
          <Leaf color="#f97316" size={30} strokeWidth={2.5} />
        </div>
        <h1
          className="
            text-[24px] font-semibold text-[#ea580c] 
            tracking-[-0.4px] m-0 font-[Poppins]
          "
        >
          Tridosha AI
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-4 flex-wrap font-[Poppins]">
        <Link
          to="/"
          className="
            cursor-pointer text-[15px] font-medium text-[#333] 
            px-[14px] py-[6px] rounded-md transition-colors duration-200
            hover:bg-[#f97316] hover:text-white
          "
        >
          Home
        </Link>
        <Link
          to="/about"
          className="
            cursor-pointer text-[15px] font-medium text-[#333] 
            px-[14px] py-[6px] rounded-md transition-colors duration-200
            hover:bg-[#f97316] hover:text-white
          "
        >
          About
        </Link>
        <Link
          to="/contact"
          className="
            cursor-pointer text-[15px] font-medium text-[#333] 
            px-[14px] py-[6px] rounded-md transition-colors duration-200
            hover:bg-[#f97316] hover:text-white
          "
        >
          Contact
        </Link>

        {!isAuthenticated ? (
          <>
            <button
              onClick={onSignInClick}
              className="
                cursor-pointer text-[15px] font-medium text-[#333] 
                px-[14px] py-[6px] rounded-md transition-colors duration-200
                hover:bg-[#f97316] hover:text-white
              "
            >
              Sign In
            </button>
            <button
              onClick={onSignUpClick}
              className="
                cursor-pointer text-[15px] font-medium text-[#333] 
                px-[14px] py-[6px] rounded-md transition-colors duration-200
                hover:bg-[#f97316] hover:text-white
              "
            >
              Sign Up
            </button>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="
              cursor-pointer text-[15px] font-medium text-[#333] 
              px-[14px] py-[6px] rounded-md transition-colors duration-200
              hover:bg-[#f97316] hover:text-white
            "
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;

