import React from "react";
import { Phone, Mail, ExternalLink } from "lucide-react";

function Contact() {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white min-h-screen pt-24 px-6 py-12 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-300 mb-6 border-b-2 border-sky-500 inline-block pb-1">
          Contact Me
        </h2>

        <div className="space-y-3 mb-10">
          <h3 className="text-xl font-semibold text-white">Samrat Parajuli</h3>
          <p className="text-sm text-slate-300">📍 Based in Anamnagar, Kathmandu</p>
          <p className="text-sm text-slate-300">🧠 8+ Months of Coding Experience</p>
          <p className="text-sm text-slate-300">🎂 Age: 16</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-5 rounded-xl hover:bg-white/20 transition shadow-md border border-white/10 w-full sm:w-auto">
            <Phone className="text-sky-400" size={22} />
            <div className="text-left">
              <p className="text-sm font-bold text-sky-400">Phone</p>
              <p className="text-lg font-semibold text-white">+977 9847313479</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-5 rounded-xl hover:bg-white/20 transition shadow-md border border-white/10 w-full sm:w-auto">
            <Mail className="text-sky-400" size={22} />
            <div className="text-left">
              <p className="text-sm font-bold text-sky-400">Email</p>
              <p className="text-lg font-semibold text-white">std.samrat068@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="mb-2 text-slate-400">👀 Check out my portfolio:</p>
          <a
            href="https://samratvsn.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-tr from-sky-500 to-indigo-600 hover:from-indigo-600 hover:to-sky-500 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
          >
            View Portfolio <ExternalLink size={18} />
          </a>
        </div>

        <footer className="mt-16 text-slate-500 text-xs border-t border-slate-700 pt-4">
          &copy; 2025 <span className="text-sky-300 font-medium">Samrat_vsn</span>. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default Contact;
