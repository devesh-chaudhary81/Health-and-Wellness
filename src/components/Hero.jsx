import React from "react";
import leaf from "../assets/leaf.png";
import { Sparkles, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = ({ onSignInClick }) => (
  <section className="w-screen text-center py-8 px-4 bg-gradient-to-b from-[#fce8ce] to-[#fcf4e8]">
    {/* Logo ring */}
    <div className="w-[60px] h-[60px] bg-white rounded-full flex justify-center items-center animate-[spin_3s_linear_infinite]">
      <img src={leaf} alt="Tridosha Logo" className="w-[50px] h-[50px] rounded-full" />
    </div>

    {/* Heading */}
    <h1 className="text-5xl text-orange-500 font-bold my-2">Tridosha AI</h1>

    {/* Subtitle */}
    <p className="max-w-[700px] mx-auto text-[17px]">
      Discover your unique Ayurvedic constitution and receive personalized
      wellness guidance powered by ancient wisdom and modern AI.
    </p>

    {/* Buttons */}
    <div className="flex flex-wrap gap-4 justify-center mt-8">
      <button
        onClick={onSignInClick}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium border-none cursor-pointer transition-all duration-200 text-white bg-gradient-to-r from-[#f9a825] to-[#f57c00] hover:from-[#ffb300] hover:to-[#fb8c00]"
      >
        <Sparkles size={18} /> Start Dosha Assessment
      </button>

      <Link
        to="/learn"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium border border-orange-600 text-orange-500 bg-white hover:bg-[#fafafa] hover:text-black hover:border-[#999]"
      >
        <BookOpen size={18} /> Learn About Ayurveda
      </Link>
    </div>

    {/* Stats */}
    <div className="flex justify-center gap-10 flex-wrap text-sm mt-4">
      <div>
        <strong className="block text-lg text-orange-500 font-semibold">Smart Ayurveda</strong>
        <p>For Modern You</p>
      </div>
      <div>
        <strong className="block text-lg text-orange-500 font-semibold">3</strong>
        <p>Doshas Analyzed</p>
      </div>
      <div>
        <strong className="block text-lg text-orange-500 font-semibold">∞</strong>
        <p>Personalized Plans</p>
      </div>
    </div>
  </section>
);

export default Hero;

