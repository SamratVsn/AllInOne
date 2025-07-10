import React from 'react';

function Contact() {
  return (
    <div className="bg-[#1a1a2e] text-white min-h-screen pt-24 px-6 py-12 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6 border-b-2 border-yellow-400 inline-block pb-1">
          Contact Me
        </h2>

        <div className="space-y-2 mb-8">
          <h3 className="text-xl font-semibold">Samrat Parajuli</h3>
          <p className="text-sm text-gray-300">📍 Based in Anamnagar, Kathmandu</p>
          <p className="text-sm text-gray-300">🧠 8+ Months of Coding Experience</p>
          <p className="text-sm text-gray-300">🎂 Age: 16</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
          <div className="bg-white bg-opacity-10 p-4 rounded-xl hover:bg-opacity-20 transition">
            <p className="text-yellow-500 font-extrabold">📞 Phone:</p>
            <p className="text-lg text-black font-bold">+977 9847313479</p>
          </div>
          <div className="bg-white bg-opacity-10 p-4 rounded-xl hover:bg-opacity-20 transition">
            <p className="text-yellow-500 font-extrabold">📧 Email:</p>
            <p className="text-lg text-black font-bold">std.samrat068@gmail.com</p>
          </div>
        </div>

        <div className="mt-4">
          <p className="mb-2 text-gray-300">👀 Check out my portfolio:</p>
          <a
            href="https://samratvsn.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full transition"
          >
            View Portfolio
          </a>
        </div>

        <footer className="mt-12 text-gray-500 text-xs border-t border-gray-600 pt-4">
          &copy; 2025 Samrat_vsn. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default Contact;
