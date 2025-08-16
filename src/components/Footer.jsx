import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import leaf from "../assets/leaf.png";

const Footer = () => (
  <footer className="bg-[#2d3d2f] text-white px-5 py-1">
    <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between gap-10 py-[30px]">
      {/* Brand */}
      <div className="flex-1 min-w-[250px]">
        <div className="flex items-center gap-2">
          <img className="w-[50px] h-[50px] object-contain" src={leaf} alt="Tridosha logo" />
          <h2 className="m-0 text-[1.8rem]">Tridosha AI</h2>
        </div>
        <p className="mt-2 text-[#ddd] text-base leading-[1.5]">
          Combining 5,000 years of Ayurvedic wisdom with modern AI to provide personalized wellness guidance for optimal health and balance.
        </p>
        <div className="mt-4 flex gap-3">
          <a href="#" className="hover:underline">
            <Facebook />
          </a>
          <a href="#" className="hover:underline">
            <Twitter />
          </a>
          <a href="#" className="hover:underline">
            <Instagram />
          </a>
        </div>
      </div>

      {/* Quick links */}
      <div className="flex-1 min-w-[250px]">
        <h3 className="text-[1.2rem] text-white mb-[15px]">Quick Links</h3>
        <ul className="list-none">
          <li className="mb-2">
            <Link to="/" className="text-white hover:underline">Home</Link>
          </li>
          <li className="mb-2">
            <Link to="/learn" className="text-white hover:underline">Learn Ayurveda</Link>
          </li>
          <li className="mb-2">
            <Link to="/about" className="text-white hover:underline">About Us</Link>
          </li>
          <li className="mb-2">
            <Link to="/contact" className="text-white hover:underline">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="flex-1 min-w-[250px] pl-[130px]">
        <h3 className="text-[1.2rem] text-white mb-[15px]">Contact</h3>
        <p className="flex items-center mb-[10px] gap-2 text-[#ddd]">
          <Mail size={17} /> support@Tridosha.ai
        </p>
        <p className="flex items-center mb-[10px] gap-2 text-[#ddd]">
          <Phone size={17} /> +1 (555) 123-4567
        </p>
        <p className="flex items-center mb-[10px] gap-2 text-[#ddd]">
          <MapPin size={17} /> 123 Wellness Street, Mindful City
        </p>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="text-center border-t border-[#444] pt-[15px] mt-5 text-sm text-[#ccc]">
      © 2025 Tridosha AI. All rights reserved. |
      <Link to="/privacy-policy" className="hover:underline"> Privacy Policy</Link> |
      <Link to="/terms" className="hover:underline"> Terms and Conditions</Link> |
      <Link to="/cookies-policy" className="hover:underline"> Cookies Policy</Link>
    </div>
  </footer>
);

export default Footer;

