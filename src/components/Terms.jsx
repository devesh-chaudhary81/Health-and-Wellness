import React, { useEffect, useState } from 'react';
import { ArrowLeft, Leaf, Shield, Scale, Eye, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: <Scale className="w-6 h-6 text-emerald-700" />,
      title: "Acceptance of Terms",
      content: `By accessing and using the Ayurveda AI Guide website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.`
    },
    {
      icon: <Leaf className="w-6 h-6 text-emerald-700" />,
      title: "Nature of Service",
      content: `Our Ayurveda AI Guide provides educational information about Ayurvedic principles, practices, and lifestyle recommendations. The AI-generated content is based on traditional Ayurvedic knowledge and is intended for informational purposes only. This service does not replace professional medical advice, diagnosis, or treatment.`
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-700" />,
      title: "Medical Disclaimer",
      content: `The information provided by our AI guide is not intended to diagnose, treat, cure, or prevent any disease. Always consult with qualified healthcare professionals before making any changes to your health regimen. Individual results may vary, and what works for one person may not work for another.`
    },
    {
      icon: <Eye className="w-6 h-6 text-emerald-700" />,
      title: "Privacy and Data Protection",
      content: `We are committed to protecting your privacy. Personal information shared with our AI guide is processed securely and used solely to provide personalized Ayurvedic recommendations. We do not sell, share, or distribute your personal data to third parties without your explicit consent.`
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-700" />,
      title: "Intellectual Property",
      content: `All content, including but not limited to text, graphics, logos, and AI-generated recommendations, is the property of Ayurveda AI Guide or its licensors. Users may not reproduce, distribute, or create derivative works without written permission.`
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-700" />,
      title: "Service Availability",
      content: `While we strive to maintain continuous service availability, we do not guarantee uninterrupted access to our platform. We reserve the right to modify, suspend, or discontinue any aspect of our service with reasonable notice to users.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef7ed] via-[#fef3c7] to-[#fefce8]">
      
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ease-out ${!isVisible ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}
          >
            <h1 className="text-5xl font-bold text-emerald-900 mb-6">Terms & Conditions</h1>
            <p className="text-xl text-emerald-700 mb-8 leading-relaxed">
              Understanding our commitment to providing safe, educational Ayurvedic guidance
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-emerald-200/10">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-900 font-medium">Last Updated: January 17, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-emerald-200/10 transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl ${!isVisible ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-emerald-500/10 rounded-xl text-emerald-700">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-emerald-900 mb-4">{section.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{section.content}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Additional Terms */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-emerald-200/10">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6">Additional Important Terms</h3>
            <div className="flex flex-col gap-6 text-gray-700">
              <div>
                <h4 className="font-semibold text-emerald-700 mb-2">User Responsibilities</h4>
                <p className="leading-relaxed">
                  Users are responsible for providing accurate information and using the service in accordance with these terms. Misuse of the platform or providing false information may result in service termination.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-700 mb-2">Limitation of Liability</h4>
                <p className="leading-relaxed">
                  Ayurveda AI Guide shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our service. Our liability is limited to the maximum extent permitted by law.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-700 mb-2">Governing Law</h4>
                <p className="leading-relaxed">
                  These terms are governed by applicable local laws. Any disputes will be resolved through appropriate legal channels in the jurisdiction where our service is provided.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-emerald-700 mb-2">Changes to Terms</h4>
                <p className="leading-relaxed">
                  We reserve the right to modify these terms at any time. Users will be notified of significant changes, and continued use of the service constitutes acceptance of updated terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Terms;
