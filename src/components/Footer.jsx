import React from "react";
import { X, Send, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-gray-300 px-6 md:px-20 py-16 border-t border-white/10">

      {/* Top Section */}
      <div className="grid md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="mb-6 flex items-center gap-2">
              <img
                src="/images/logo-high-res.png"
                alt="logo"
                className="w-40 h-30 object-contain"
              />
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            The next generation of decentralized finance,
            simplified for everyone.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li className="hover:text-white cursor-not-allowed opacity-50">
              Careers (Coming Soon)
            </li>
            <li>
            <a
  href="https://m5dex.medium.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition"
>
  Blog
</a>
            </li>
            <li>
               <a
  href="https://m5dex.medium.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition"
>
  News
</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-not-allowed opacity-50">
              Help Center (Coming Soon)
            </li>

            {/* Email Click */}
            <li>
              <a
                href="mailto:support@m5dex.com"
                className="hover:text-white transition"
              >
                support@m5dex.com
              </a>
            </li>

            <li className="hover:text-white cursor-not-allowed opacity-50">
              API Documentation (Coming Soon)
            </li>
            <li className="hover:text-white cursor-not-allowed opacity-50">
              System Status (Coming Soon)
            </li>
          </ul>
        </div>

        {/* ✅ Legal (UPDATED WITH LINKS) */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/gdpr"
                className="hover:text-white transition"
              >
                GDPR Policy
              </Link>
            </li>

            <li>
              {/* <Link
                to="/CookiePolicy"
                className="hover:text-white transition"
              >
                Cookie Policy
              </Link> */}
            </li>

            <li>
              <Link
                to=""
                className="hover:text-white transition"
              >
                Terms of Service (Coming Soon)
              </Link>
            </li>

            <li>
              <Link
                to="/legal-disclaimers"
                className="hover:text-white transition"
              >
                Disclaimers
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2025 M5DEX. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-4 md:mt-0">

          <a
            href="https://x.com/M5Dex_Official"
            target="_blank"
            rel="noopener noreferrer"
          >
            <X className="hover:text-white transition" />
          </a>

          <a
            href="https://t.me/m5dex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Send className="hover:text-white transition" />
          </a>

          <a
            href="https://discord.com/invite/StFvg4jRBj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="hover:text-white transition" />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;