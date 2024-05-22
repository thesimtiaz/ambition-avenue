import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1A1919]">
      <footer className="footer container mx-auto p-10 text-white">
        <aside>
          <h2 className="text-3xl font-extrabold">Ambition Avenue</h2>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Work</a>
          <a className="link link-hover">Latest News</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Prototype</a>
          <a className="link link-hover">Plans & Pricing</a>
          <a className="link link-hover">Customers</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Help Desk</a>
          <a className="link link-hover">Sales</a>
          <a className="link link-hover">Become a Partner</a>
          <a className="link link-hover">Developers</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover">524 Broadway , NYC</a>
          <a className="link link-hover">+1 777 - 978 - 5570</a>
        </nav>
      </footer>
      <footer className="footer container mx-auto px-10 py-4 border-t text-white border-base-300">
        <aside className="items-center grid-flow-col">
          <p>@2023 CareerHub. All Rights Reserved</p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <p>Powered by Ambition Avenue</p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
