import React from "react";
import * as lucide from "lucide-react";

const About = () => {
  return (
    <div className="bg-[#fff8f0] text-[#333] font-['Segoe_UI',sans-serif] w-full min-h-screen py-16 text-center leading-relaxed">
      <div className="max-w-[1100px] mx-auto px-5">
        <h1 className="text-[42px] font-bold text-[#333] mb-5">
          About Tridosha AI
        </h1>
        <p className="text-lg text-[#666] max-w-[1100px] mx-auto mb-12">
          We're revolutionizing wellness by combining 5,000 years of Ayurvedic
          wisdom with cutting edge artificial intelligence to provide
          personalized health guidance.
        </p>

        {/* Mission & Vision */}
        <section className="flex flex-wrap justify-center gap-8 mb-16 max-w-[1100px] mx-auto">
          <div className="flex-1 min-w-[420px] bg-white border border-[#ddd] rounded-xl p-8 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <div className="w-[60px] h-[60px] rounded-full text-[26px] flex justify-center items-center mx-auto mb-5 bg-[#ffe6ea] text-[#e11d48]">
              <lucide.Heart />
            </div>
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p>
              To make ancient Ayurvedic wisdom accessible to everyone through modern technology, helping individuals achieve optimal health and wellness through personalized, holistic approaches that honor both tradition and innovation.
            </p>
          </div>

          <div className="flex-1 min-w-[420px] bg-white border border-[#ddd] rounded-xl p-8 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <div className="w-[60px] h-[60px] rounded-full text-[26px] flex justify-center items-center mx-auto mb-5 bg-[#e0edff] text-[#2563eb]">
              <lucide.Brain />
            </div>
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p>
              A world where everyone has access to personalized wellness guidance rooted in time-tested Ayurvedic principles, empowering individuals to live balanced, healthy lives in harmony with their unique constitution.
            </p>
          </div>
        </section>

        {/* Values */}
        <h2 className="text-[28px] mb-8 text-[#333]">Our Values</h2>
        <section className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="flex-1 min-w-[280px] bg-white border border-[#ddd] rounded-xl p-8 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <div className="w-[60px] h-[60px] rounded-full text-[26px] flex justify-center items-center mx-auto mb-5 bg-[#d1fae5] text-[#10b981]">
              <lucide.Globe />
            </div>
            <h4 className="text-lg font-semibold">Holistic Wellness</h4>
            <p>We believe true wellness encompasses mind, body, and spirit in perfect harmony.</p>
          </div>

          <div className="flex-1 min-w-[280px] bg-white border border-[#ddd] rounded-xl p-8 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <div className="w-[60px] h-[60px] rounded-full text-[26px] flex justify-center items-center mx-auto mb-5 bg-[#ede9fe] text-[#8b5cf6]">
              <lucide.Users />
            </div>
            <h4 className="text-lg font-semibold">Personalized Care</h4>
            <p>Every individual is unique, and their wellness journey should be too.</p>
          </div>

          <div className="flex-1 min-w-[280px] bg-white border border-[#ddd] rounded-xl p-8 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <div className="w-[60px] h-[60px] rounded-full text-[26px] flex justify-center items-center mx-auto mb-5 bg-[#fff7ed] text-[#f97316]">
              <lucide.Award />
            </div>
            <h4 className="text-lg font-semibold">Ancient Wisdom</h4>
            <p>Honoring traditional Ayurvedic knowledge while embracing modern innovation.</p>
          </div>
        </section>

        {/* Story */}
        <section className="bg-gradient-to-r from-[#fc9b75] to-[#fecba2] p-8 rounded-lg text-left mb-16 leading-loose">
          <h3 className="text-[30px] text-center mb-4">Our Story</h3>
          <p className="text-[17px] font-medium">
            Tridosha AI was born from a simple observation: while Ayurveda offers profound wisdom for health and wellness, accessing personalized guidance has traditionally required extensive knowledge or expensive consultations.
            <br /><br />
            Our team of Ayurvedic practitioners, AI researchers, and wellness enthusiasts came together with a shared vision to democratize access to this ancient wisdom through modern technology. By combining machine learning with traditional Ayurvedic principles, we’ve created a platform that provides personalized wellness based on your unique constitution and current state of health.
            <br /><br />
            Today, Tridosha AI serves thousands of users worldwide, helping them discover their optimal path to wellness through the timeless wisdom of Ayurveda.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
