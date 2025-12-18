import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#4fbf8b]/10 w-full mt-24">
      {/* content wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
        {/* top section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 py-12 border-b border-gray-500/30 text-gray-500">
          {/* logo */}
          <div className="max-w-sm">
            <img className="w-32" src="/logo.svg" alt="GreenCart" />
            <p className="mt-6 text-sm leading-relaxed">
              We deliver fresh groceries and snacks straight to your door.
              Trusted by thousands, we aim to make your shopping experience
              simple and affordable.
            </p>
          </div>

          {/* links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div>
              <h2 className="font-semibold text-gray-900 mb-4">Quick Links</h2>
              <ul className="space-y-2 text-sm">
                <li>Home</li>
                <li>Best Sellers</li>
                <li>Offers & Deals</li>
                <li>Contact Us</li>
                <li>FAQs</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-gray-900 mb-4">Need help?</h2>
              <ul className="space-y-2 text-sm">
                <li>Delivery Information</li>
                <li>Return & Refund Policy</li>
                <li>Payment Methods</li>
                <li>Track your Order</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-gray-900 mb-4">Follow Us</h2>
              <ul className="space-y-2 text-sm">
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="py-6 text-center text-sm text-gray-500">
          Copyright 2025 © GreatStack.dev All Right Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
