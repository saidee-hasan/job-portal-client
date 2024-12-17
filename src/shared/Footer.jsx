import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white text-black py-8 px-4 border-t border-gray-300 shadow-sm">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8  rounded-lg p-6">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="https://img.icons8.com/clouds/100/000000/job.png"
            alt="Job Portal Logo"
            className="w-20"
          />
          <p className="mt-4 text-center md:text-left text-sm md:text-base">
            Your trusted partner in finding your dream job and hiring top talent. 
            Join us today and shape the future.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/jobs"
                className="hover:underline text-black hover:text-gray-700 transition duration-200"
              >
                Find Jobs
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:underline text-black hover:text-gray-700 transition duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:underline text-black hover:text-gray-700 transition duration-200"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:underline text-black hover:text-gray-700 transition duration-200"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-2xl text-black hover:text-gray-700 transition duration-200"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-2xl text-black hover:text-gray-700 transition duration-200"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-2xl text-black hover:text-gray-700 transition duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-2xl text-black hover:text-gray-700 transition duration-200"
            >
              <FaInstagram />
            </a>
          </div>
          <p className="text-sm">
            Email:{' '}
            <a
              href="mailto:support@jobportal.com"
              className="underline text-black hover:text-gray-700 transition duration-200"
            >
              support@jobportal.com
            </a>
          </p>
          <p className="text-sm">Phone: +1 234 567 890</p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Job Portal. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
