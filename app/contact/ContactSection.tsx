"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const ContactSection = () => {
  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [error, setError] = useState("");

  // Generate new captcha
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let text = "";
    for (let i = 0; i < 6; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(text);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // CAPTCHA validation (frontend only)
    if (userCaptcha.trim().toUpperCase() !== captcha) {
      setError("❌ Invalid CAPTCHA. Please try again.");
      generateCaptcha();
      return;
    }

    setError("");
    alert("✅ Message Sent Successfully!");
  };

  return (
    <section className="pt-10 pb-20">
      {/* Background Banner */}
      <div
        className="h-48 sm:h-60 md:h-72 lg:h-80 w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/contact-us-hand-man-holding-mobile-smartphone-with-mail-phone-email-chat-icon-cutomer-support-concept-blue-wide-banner_256259-3866.jpg?w=740&q=80')",
        }}
      ></div>

      {/* Contact Card */}
      <div className="max-w-6xl mx-auto -mt-12 sm:-mt-20 bg-white shadow-xl rounded-2xl p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Contact Info */}
          <div className="space-y-6 flex flex-col h-full">
            <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
            <p className="text-gray-600">
              We’re here to help! Reach out with any questions or issues.
            </p>

            <div className="space-y-5 flex flex-col h-full">
              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" />
                <a href="tel:+914274099999" className="hover:text-blue-700">
                  +91 427 4099999
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" />
                <a
                  href="mailto:sonacsri@sonatech.ac.in"
                  className="hover:text-blue-700"
                >
                 sonacsri@sonatech.ac.in
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" />
                Sona College of Technology, Junction Main Road, Salem, Tamil Nadu – 636005
              </div>

              <div className="w-full h-full rounded-lg overflow-hidden shadow-md">
                <iframe
                  title="Sona College of Technology Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.081615093267!2d78.15151287589618!3d11.664538241820662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1b896806197%3A0x9dbeb3d1b52f0604!2sSona%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1700000000000"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 flex flex-col h-full">
            <input
              type="text"
              required
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              required
              placeholder="Email address"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              required
              rows={4}
              placeholder="Message"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            ></textarea>

            {/* CAPTCHA */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 text-blue-600 font-mono font-bold px-4 py-2 rounded-md select-none tracking-widest border border-gray-300">
                  {captcha}
                </div>
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="text-sm text-blue-600 hover:underline"
                >
                  ↻ Refresh
                </button>
              </div>

              <input
                type="text"
                value={userCaptcha}
                onChange={(e) => setUserCaptcha(e.target.value)}
                placeholder="Enter CAPTCHA"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              {error && <p className="text-red-600 text-sm">{error}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition shadow-md mt-auto"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
