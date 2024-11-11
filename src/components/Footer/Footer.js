import React from "react";

export default function Footer() {
  return (
    <div className="max-w-[800px] mx-auto flex justify-center items-center">
      <footer className="bg-gray-300 py-8 text-gray-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
              <h3 className="text-lg font-semibold text-gray-500 mb-4">
                About Us
              </h3>
              <p className="text-sm justify-evenly">
                We are dedicated to providing safe and quality food in
                compliance with FSSAI standards. Our aim is to serve our
                customers with the highest level of quality and integrity.
              </p>
            </div>
            <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
              <h3 className="text-lg font-semibold text-gray-500 mb-4">
                Contact Us
              </h3>
              <p className="text-sm">Customer Support: +91 12345 67890</p>
              <p className="text-sm">Email: support@example.com</p>
              <p className="text-sm">Address: 123 Main St, Anytown, India</p>
            </div>
            <div className="w-full sm:w-1/3">
              <h3 className="text-lg font-semibold text-gray-500 mb-4">
                FSSAI & Legal
              </h3>
              <p className="text-sm mb-2">
                <strong>FSSAI License Number:</strong> 1122334455
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-sm text-gray-800 hover:text-gray-500"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-service"
                    className="text-sm text-gray-800 hover:text-gray-500"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/fssai-guidelines"
                    className="text-sm text-gray-800 hover:text-gray-500"
                  >
                    FSSAI Guidelines
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} YourCompanyName. All rights
              reserved.
            </p>
            <p className="text-gray-500">
              Designed in compliance with FSSAI standards and regulations.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
