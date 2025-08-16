import React, { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="bg-gradient-to-tr from-[#fef7ed] via-[#fed7aa] to-[#fbbf24] font-sans">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 fade-in opacity-0 translate-y-5 transition-all duration-700">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Have questions about Ayurveda or need help with your wellness journey?
            <br />
            We're here to support you every step of the way.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Form */}
          <div className="bg-white/90 backdrop-blur rounded-xl shadow-lg p-8 fade-in opacity-0 translate-y-5 transition-all duration-700">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Send us a Message</h2>
            <p className="text-sm text-gray-500 mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            {success && (
              <div className="bg-emerald-500 text-white p-4 rounded-lg mb-4">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="font-medium mb-2 text-black">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="p-3 border border-amber-500 bg-white rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="font-medium mb-2 text-black">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-3 border border-amber-500 bg-white rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject" className="font-medium mb-2 text-black">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="p-3 border border-amber-500 bg-white rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="font-medium mb-2 text-black">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us how we can help you..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="p-3 border border-amber-500 bg-white rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 min-h-[120px]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white/90 backdrop-blur rounded-xl shadow-lg p-8 fade-in opacity-0 translate-y-5 transition-all duration-700">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Information</h2>
            <p className="text-sm text-gray-500 mb-8">Reach out to us through any of these channels:</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-amber-100/50 border-l-4 border-orange-600 rounded-lg">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border">📧</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-sm text-gray-500">support@Tridosha.ai</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-amber-100/50 border-l-4 border-orange-600 rounded-lg">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border">📞</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-amber-100/50 border-l-4 border-orange-600 rounded-lg">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border">📍</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-sm text-gray-500">123 Wellness Street<br />Mindful City, MC 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-amber-100/70 rounded-xl shadow-md p-8 fade-in opacity-0 translate-y-5 transition-all duration-700">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <div className="font-semibold text-gray-800 mb-2">How accurate are the AI recommendations?</div>
              <div className="text-sm text-gray-500">
                Our AI is trained on traditional Ayurvedic texts and validated by certified practitioners, providing guidance with high accuracy for general wellness.
              </div>
            </div>

            <div>
              <div className="font-semibold text-gray-800 mb-2">Is this a replacement for medical care?</div>
              <div className="text-sm text-gray-500">
                No, our platform provides wellness guidance and should complement, not replace, medical advice.
              </div>
            </div>

            <div>
              <div className="font-semibold text-gray-800 mb-2">How do I get started?</div>
              <div className="text-sm text-gray-500">
                Simply take our dosha assessment on the homepage to receive personalized recommendations based on your unique constitution.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
