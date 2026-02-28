import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { CheckCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceSidebar from "../../components/ServiceSidebar";

import Button from "../../components/ui/Button";


const breadcrumbItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Business Advisory" },
];

const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

const BusinessAdvisoryPage = () => {
  return (
    <div className="w-full mx-0 px-4 sm:px-0 sm:mx-15 py-10 h-[90vh] min-h-fit flex items-center justify-center">
      {/* Breadcrumb */}
      {/* <Breadcrumb items={breadcrumbItems} /> */}

      <div className="grid grid-cols-1 md:grid-cols-13 gap-8 ">
        {/* Left Image */}
        <div className="md:col-span-4" data-aos="fade-up">
          <div className="rounded-2xl overflow-hidden shadow-lg h-[320px] md:h-[450px]">
            <img
              src="/servicesPagesImages/BusinessAdvisory.webp"
              alt="Business Advisory Service"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Middle Content */}
        <div className="md:col-span-5 flex flex-col" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-gwen-semibold text-gray-800 leading-snug">
            Business Advisory
          </h1>
          <ul className="mt-6 space-y-4 text-gray-700">
            {/* {[
              "Empowering businesses and individuals with robust financial strategies.",
              "Expert advisory supporting business setup, financial planning, and strategic consulting.",
              "Risk management frameworks to foster sustainable growth.",
              "Compliance support and informed decision-making in an evolving economic landscape.",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <CheckCheck className="h-5 w-5 text-[#2b3780] shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))} */}
            {[
              "Empowering businesses and individuals through robust financial and strategic solutions.",
              "Advisory on business setup, financial planning, and strategic consulting.",
              "Implementation of risk management frameworks to foster sustainable growth.",
              "Compliance support and data-driven insights for informed decision-making in an evolving economic landscape.",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <CheckCheck className="h-5 w-5 text-[#2b3780] shrink-0 mt-1" />
                <span  className="text-justify">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Sidebar */}
        {/* <div className="md:col-span-3 h-full flex flex-col justify-between gap-5 ">
          <div className="bg-violet-50 rounded-2xl shadow-md p-5 h-full min-h-fit">
            <h2 className="text-xl font-gwen-semibold text-gray-800 mb-4">
              Our Other Services
            </h2>
            <ul className="flex flex-col divide-y divide-gray-300">
              {[
                { label: "Accounting & Financial Reporting", to: "/accounting" },
                { label: "Audit and Assurance", to: "/audit_and_assurance" },
                { label: "Direct & Indirect Tax Advisory", to: "/direct_indirect_tax" },
                { label: "Regulatory & Compliance Support", to: "/compliance_support" },
                { label: "Specialized Advisory Services", to: "/specialized_services" },
              ].map((service, idx) => (
                <li key={idx}>
                  <Link
                    to={service.to}
                    onClick={handleScrollTop}
                    className="flex justify-between items-center py-3 text-gray-700 hover:text-[#2b3780] transition group"
                  >
                    <span>{service.label}</span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-transform duration-300 translate-x-0 group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
           

        </div> */}

                <ServiceSidebar />
      </div>
    </div>
  );
};

export default BusinessAdvisoryPage;
