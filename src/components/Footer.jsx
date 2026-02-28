import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom';

const Footer = () => {

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center text-sm bg-(--color-primary) text-white">

      {/* About
          <div className="flex flex-col items-center  text-center md:text-left w-full justify-center mt-10 ">
            <Link to="/" onClick={handleScrollTop} className="mb-5 block w-full text-center">
              <p className="font-light font-playfair-display text-2xl sm:text-3xl">Sanjay K Pathak & Associates</p>
              <p className="font-light font-playfair-display text-base sm:text-lg">Chartered Accountants</p>
            </Link>
            <p className="text-xs sm:text-base md:text-md font-light text-center max-w-[60vw]">
              We understand the critical role that expert financial guidance plays in achieving success in today’s dynamic economic landscape.
              Our CA firm is dedicated to delivering financial and advisory services that empower businesses, startups, and individuals to thrive.
            </p>
          </div> */}
      {/* Footer Main */}
      <footer className="w-full flex items-center justify-center">
        {/* content wrapper */}
        <div className="w-full px-4 sm:px-6 md:px-15 py-10 grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* About */}
          <div className="lg:col-span-2 flex flex-col items-center text-center md:items-start md:text-left justify-start">
            <Link to="/" onClick={handleScrollTop} className="mb-5 block text-center md:text-left">
              <p className="font-light font-playfair-display text-2xl sm:text-3xl">Sanjay K Pathak & Associates</p>
              <p className="font-light font-playfair-display text-base sm:text-lg">Chartered Accountants</p>
            </Link>
            <p className="text-xs sm:text-base md:text-md text-justify font-light sm:text-center  md:text-justify max-w-[90%]">
              {/* Our firm offers financial, taxation, audit, and advisory services to businesses, startups, and individuals, assisting them in meeting statutory and regulatory requirements and facilitating informed financial and operational decision-making. */}
              Comprehensive Accounting, Taxation, and Advisory Services designed to support regulatory compliance, financial reporting, and informed decision-making for businesses and individuals.
            </p>
          </div>

          {/* Important Links */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:mt-7">
            <p className="text-lg sm:text-2xl font-gwen-semibold pb-2">Important Links</p>
            <div className="flex flex-row sm:gap-6 gap-10">
              <span className="flex flex-col gap-2 text-sm sm:text-base font-light items-center md:items-start">
                <Link target='_blank' to="https://www.icai.org/">ICAI</Link>
                <Link target='_blank' to="https://www.gst.gov.in/">GST</Link>
                <Link target='_blank' to="https://www.mca.gov.in/">MCA</Link>
              </span>
              <span className="flex flex-col gap-2 text-sm sm:text-base font-light items-center md:items-start">
                <Link target='_blank' to="https://www.sebi.gov.in/">SEBI</Link>
                <Link target='_blank' to="https://www.rbi.org.in/">RBI</Link>
                <Link target='_blank' to="https://www.incometax.gov.in/iec/foportal/">Income Tax</Link>
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:mt-7">
            <p className="text-lg sm:text-2xl font-gwen-semibold pb-2">Contact Information</p>
            <ul className="flex flex-col gap-2 text-sm sm:text-base font-light items-center md:items-start">
              <li><a href="mailto:info@skpandassociates.com">Email : info@skpandassociates.com</a></li>
              {/* <li><a href="tel:+919897295511">Phone : +91 98972 95511</a></li> */}
            </ul>
          </div>

        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="w-full border-t border-gray-200 py-4 px-4 sm:px-6 md:px-15 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm font-light">

        <span className='flex gap-5 mb-2 sm:mb-0' >
          <Link className='hover:underline' to="/privacy_policy" onClick={handleScrollTop}>Privacy Policy</Link>
          <Link className='hover:underline' to="/terms_and_conditions" onClick={handleScrollTop} >Terms & Conditions</Link>
          <Link className='hover:underline' to="/legal_disclamer" onClick={handleScrollTop}>Legal Disclaimer</Link>
        </span>

        <p className="mb-2 sm:mb-0">© {new Date().getFullYear()} Sanjay K Pathak & Associates. All rights reserved.</p>

        {/* Socials */}
        {/* <div className="flex items-center gap-4">
          <a href="#"><Instagram className="h-4 w-4 cursor-pointer hover:text-amber-400" /></a>
          <a href="#"><Linkedin className="h-4 w-4 cursor-pointer hover:text-amber-400" /></a>
          <a href="#"><Facebook className="h-4 w-4 cursor-pointer hover:text-amber-400" /></a>
          <a href="#"><Twitter className="h-4 w-4 cursor-pointer hover:text-amber-400" /></a>
        </div> */}
      </div>
    </div>
  )
}

export default Footer
