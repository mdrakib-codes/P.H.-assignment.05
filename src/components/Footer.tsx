import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="border-t border-gray-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-16">

        {/* Footer Main Content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Dev Stack"
              className="w-32"
            />

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers building
modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-3">

              <a
               
              >
                GitHub
              </a>

              <a
                
              >
                Twitter
              </a>

              <a
               
              >
               LinkedIn
              </a>

            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900">
              Product
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-500">

              <li>
                <a
                  href="#technologies"
                  className="transition hover:text-[#D91B7E]"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-[#D91B7E]"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#technologies"
                  className="transition hover:text-[#D91B7E]"
                >
                  Features
                </a>
              </li>

            

            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-500">

              <li>
                <a
                  href="#about"
                  className="transition hover:text-[#D91B7E]"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-[#D91B7E]"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-[#D91B7E]"
                >
                  Careers
                </a>
              </li>

           

            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900">
              Legal
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-500">

              <li>
                <a
                  href="#"
                  className="transition hover:text-[#D91B7E]"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-[#D91B7E]"
                >
                  Terms of Service
                </a>
              </li>

           

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-6">

          <div className="flex flex-col gap-4 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex items-center gap-5">

              <a
                href="#"
                className="transition hover:text-gray-900"
              >
                Privacy
              </a>

              <a
                href="#"
                className="transition hover:text-gray-900"
              >
                Terms
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;