import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div
      className="
        font-[Inter] leading-[1.6] text-gray-800
        bg-[linear-gradient(to_bottom_right,#fef7ed,#fef3c7,#fefce8)]
        min-h-screen mx-auto p-8
      "
    >
      {/* Header */}
      <div
        className="
          text-center w-[900px] mx-auto mb-12 py-8
          border-b-2 border-[#ea580c]
        "
      >
        <h1 className="text-[2.25rem] font-semibold mb-1">Privacy Policy</h1>
        <p className="text-[0.95rem] text-gray-500 mb-2">
          Last updated: January 2025
        </p>
      </div>

      {/* Card */}
      <div
        className="
          bg-white rounded-2xl p-8 w-[900px] mx-auto mb-8
          shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05)]
          border border-gray-100
        "
      >
        {/* Introduction */}
        <section>
          <h2
            className="
              text-xl font-semibold mb-3 text-gray-800
              border-b border-gray-200 pb-2
            "
          >
            Introduction
          </h2>
          <p className="mb-4 text-gray-600">
            Welcome to Tridosha AI. We respect your privacy and are committed to
            protecting your personal data.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mt-8">
          <h2
            className="
              text-xl font-semibold mb-3 text-gray-800
              border-b border-gray-200 pb-2
            "
          >
            Information We Collect
          </h2>
          <p className="mb-4 text-gray-600">
            We collect information you provide directly to us, such as:
          </p>
          <ul className="pl-6 mb-4 list-disc">
            <li className="mb-2 text-gray-600">
              Account information (name, email address)
            </li>
            <li className="mb-2 text-gray-600">
              Health and wellness data you share
            </li>
            <li className="mb-2 text-gray-600">
              Dosha assessment responses
            </li>
            <li className="mb-2 text-gray-600">
              Communication preferences
            </li>
            <li className="mb-2 text-gray-600">
              Usage data and interaction patterns
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="mt-8">
          <h2
            className="
              text-xl font-semibold mb-3 text-gray-800
              border-b border-gray-200 pb-2
            "
          >
            How We Use Your Information
          </h2>
          <ul className="pl-6 mb-4 list-disc">
            <li className="mb-2 text-gray-600">
              Provide personalized Ayurvedic wellness recommendations
            </li>
            <li className="mb-2 text-gray-600">
              Improve our AI algorithms and services
            </li>
            <li className="mb-2 text-gray-600">
              Send relevant health content
            </li>
            <li className="mb-2 text-gray-600">
              Provide customer support
            </li>
            <li className="mb-2 text-gray-600">
              Analyze user experience
            </li>
          </ul>
        </section>

        {/* Data Security */}
        <section className="mt-8">
          <h2
            className="
              text-xl font-semibold mb-3 text-gray-800
              border-b border-gray-200 pb-2
            "
          >
            Data Security
          </h2>
          <p className="mb-4 text-gray-600">
            We implement appropriate technical and organizational security
            measures to protect your data.
          </p>
        </section>

        {/* Data Sharing */}
        <section className="mt-8">
          <h2
            className="
              text-xl font-semibold mb-3 text-gray-800
              border-b border-gray-200 pb-2
            "
          >
            Data Sharing
          </h2>
          <ul className="pl-6 mb-4 list-disc">
            <li className="mb-2 text-gray-600">
              To provide services you’ve requested
            </li>
            <li className="mb-2 text-gray-600">When required by law</li>
            <li className="mb-2 text-gray-600">To protect our legal rights</li>
          </ul>
        </section>

        {/* Your Rights */}
        <section className="mt-8">
          <h2
            className="
              text-xl font-semibold mb-3 text-gray-800
              border-b border-gray-200 pb-2
            "
          >
            Your Rights
          </h2>
          <ul className="pl-6 mb-4 list-disc">
            <li className="mb-2 text-gray-600">
              Access your personal data
            </li>
            <li className="mb-2 text-gray-600">
              Correct inaccurate information
            </li>
            <li className="mb-2 text-gray-600">Delete your account</li>
            <li className="mb-2 text-gray-600">Export your data</li>
            <li className="mb-2 text-gray-600">
              Opt-out of marketing communications
            </li>
          </ul>
        </section>

        {/* Cookies and Tracking */}
        <section className="mt-8">
          <h2
            className="
              text-xl font-semibold mb-3 text-gray-800
              border-b border-gray-200 pb-2
            "
          >
            Cookies and Tracking
          </h2>
          <p className="mb-4 text-gray-600">
            We use cookies to enhance your experience. See our{" "}
            <Link to="/cookies-policy" className="text-orange-500 underline">
              Cookie Policy
            </Link>
            .
          </p>
        </section>

        {/* Changes to This Policy */}
        <section className="mt-8">
          <h2
            className="
              text-xl font-semibold mb-3 text-gray-800
              border-b border-gray-200 pb-2
            "
          >
            Changes to This Policy
          </h2>
          <p className="mb-4 text-gray-600">
            We may update this privacy policy occasionally. If we do, we’ll
            update the “Last updated” date above.
          </p>
        </section>

        {/* Contact Us */}
        <section
          className="
            bg-[#fff7ed] border border-[#fed7aa] rounded-xl
            px-6 py-5 mt-8
          "
        >
          <h3 className="text-lg font-semibold text-[#ea580c] mb-2">
            Contact Us
          </h3>
          <p className="text-gray-600 mb-4">If you have any questions:</p>
          <p className="text-gray-600">
            Email:{" "}
            <a
              href="mailto:privacy@Tridosha.ai"
              className="text-orange-500 underline"
            >
              privacy@Tridosha.ai
            </a>
            <br />
            Phone: +1 (555) 123-4567
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

