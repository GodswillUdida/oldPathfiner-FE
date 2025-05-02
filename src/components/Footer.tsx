import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              Pathfinder Accounting
            </h2>
            <p className="mt-2 text-sm opacity-75">
              Home of Accounting Legends.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition duration-300"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          <nav>
            <h3 className="text-lg font-semibold text-blue-400 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Pricing", "Courses", "Contact"].map(
                (link, index) => (
                  <li key={index}>
                    <Link
                      to={`/${link.toLowerCase().replace(/\s+/g, "")}`}
                      className="text-gray-300 hover:underline hover:text-white transition duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-3">
              Contact Us
            </h3>
            <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-300">
              <FaEnvelope className="text-blue-400" />{" "}
              support@pathfinderaccounting.com
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-300 mt-2">
              <FaPhone className="text-green-400" /> +234 7010 187793
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-300 mt-2">
              <FaMapMarkerAlt className="text-red-400" /> 123 Finance Street,
              Lagos, Nigeria
            </p>
          </div>
        </div>

        <div className="border-t border-white/30 mt-6 pt-4 text-sm text-center text-gray-400">
          © {new Date().getFullYear()} Pathfinder Accounting. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
