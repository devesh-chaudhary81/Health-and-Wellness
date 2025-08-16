import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Leaf } from "lucide-react";
import AuthModal from "./AuthModal";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [modalType, setModalType] = useState(null); // "signin" | "signup" | null
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
    <>
      {/* Sticky Glass Header */}
      <header
        className="
          sticky top-0 z-[100]
          flex justify-between items-center 
          px-8 py-4 shadow-md
          bg-white/70 backdrop-blur-lg
          border-b border-orange-100
          font-[Poppins] text-[16px]
        "
      >
        {/* Logo section */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div
            className="
              bg-gradient-to-br from-orange-200 to-orange-400
              rounded-full w-12 h-12 
              flex items-center justify-center
              shadow-md
            "
          >
            <Leaf color="white" size={26} strokeWidth={2.5} />
          </div>
          <h1
            className="
              text-2xl font-bold text-orange-600 
              tracking-tight
            "
          >
            Tridosha AI
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-5 font-medium">
          {["Home", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="
                text-gray-700 relative 
                after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px]
                after:bg-orange-500 after:transition-all after:duration-300
                hover:after:w-full hover:text-orange-600
              "
            >
              {item}
            </Link>
          ))}

          {!isAuthenticated ? (
            <>
              <button
                onClick={() => setModalType("signin")}
                className="
                  px-5 py-2 rounded-xl
                  bg-gradient-to-r from-orange-400 to-orange-600
                  text-white font-semibold shadow-md
                  hover:scale-105 hover:shadow-lg
                  transition-all duration-300
                "
              >
                Sign In
              </button>
              <button
                onClick={() => setModalType("signup")}
                className="
                  px-5 py-2 rounded-xl
                  border border-orange-500 text-orange-600 font-semibold
                  hover:bg-orange-50 hover:scale-105
                  transition-all duration-300
                "
              >
                Sign Up
              </button>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="
                px-5 py-2 rounded-xl
                bg-red-500 text-white font-semibold shadow-md
                hover:scale-105 hover:bg-red-600
                transition-all duration-300
              "
            >
              Logout
            </button>
          )}
        </nav>
      </header>

      {/* Modal */}
      {modalType && (
        <AuthModal type={modalType} onClose={() => setModalType(null)} />
      )}
    </>
  );
};

export default Header;



