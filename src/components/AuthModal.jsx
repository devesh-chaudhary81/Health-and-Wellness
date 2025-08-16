import React from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const AuthModal = ({ type, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[200]">
      {/* Background Blur */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -50 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="
          relative bg-white rounded-2xl shadow-2xl 
          w-[400px] p-8
          flex flex-col items-center
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X size={22} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-orange-600 mb-6">
          {type === "signin" ? "Welcome Back" : "Create Account"}
        </h2>

        {/* Form */}
        <form className="w-full flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            type="submit"
            className="
              mt-4 px-4 py-2 rounded-lg
              bg-gradient-to-r from-orange-400 to-orange-600 
              text-white font-semibold shadow-md
              hover:scale-[1.02] transition-all duration-300
            "
          >
            {type === "signin" ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AuthModal;


