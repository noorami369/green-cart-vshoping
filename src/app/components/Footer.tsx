import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#EDF8F3] w-full mt-24">
      {/* content wrapper */}
      <div className="bg-primary/10 px-6 md:px-16 lg:px-24 xl:px-32 mt-24">
        {/* top section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 py-12 border-b border-gray-500/30 text-gray-500">
          {/* logo */}
          <div className="max-w-sm">
            <img className="w-32" src="/logo.svg" alt="GreenCart" />
            <p className="max-w-102.5 mt-6">
              We deliver fresh groceries and snacks straight to your door.
              Trusted by thousands, we aim to make your shopping experience
              simple and affordable.
            </p>
          </div>

          {/* links */}
          <div className="flex flex-wrap justify-between w-3/8 space-y-5">
            <div>
              <h2 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                Quick Links
              </h2>
              <ul className="text-sm space-y-1">
                <li>Home</li>
                <li>Best Sellers</li>
                <li>Offers & Deals</li>
                <li>Contact Us</li>
                <li>FAQs</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                Need help?
              </h2>
              <ul className="text-sm space-y-1">
                <li>Delivery Information</li>
                <li>Return & Refund Policy</li>
                <li>Payment Methods</li>
                <li>Track your Order</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                Follow Us
              </h2>
              <ul className="text-sm space-y-1">
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="py-4 text-center text-sm md:text-base">
          Copyright 2025 © GreatStack.dev All Right Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
