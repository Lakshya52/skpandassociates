import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { CheckCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import ServiceSidebar from "../../components/ServiceSidebar";


const breadcrumbItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Regulatory & Compliance Support" },
];

const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

const ComplianceSupportPage = () => {
  return (
    <div className="w-full mx-0 px-4 sm:px-0 sm:mx-15 py-10 h-[90vh] min-h-fit flex items-center justify-center">
      {/* Breadcrumb */}
      {/* <Breadcrumb items={breadcrumbItems} /> */}

      <div className="grid grid-cols-1 md:grid-cols-13 gap-8 ">
        {/* Left Image */}
        <div className="md:col-span-4"  data-aos="fade-up">
          <div className="rounded-2xl overflow-hidden shadow-lg h-[320px] md:h-[450px]">
            <img
              src="/servicesPagesImages/ComplianceSupport.webp"
              alt="Regulatory & Compliance Support"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Middle Content */}
        <div className="md:col-span-5 flex flex-col" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-gwen-semibold text-gray-800 leading-snug">
            Regulatory <span className="font-playfair-display">&</span> Compliance Support
          </h1>
          <ul className="mt-6 space-y-4 text-gray-700">
            {/* {[
              "Secretarial compliances including company incorporation, statutory register maintenance, board/AGM documentation, and corporate governance.",
              "Advisory and filings for foreign investments under FEMA, cross-border transactions, and RBI regulations.",
              "Support for obtaining and renewing licenses: FSSAI, MSME, BIS, ISO, and other sector-specific registrations.",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <CheckCheck className="h-5 w-5 text-[#2b3780] shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))} */}
            {[
              "Secretarial compliances including company incorporation, maintenance of statutory registers, and preparation of Board/AGM documentation in line with corporate governance norms.",
              "Advisory and filings under FEMA and RBI regulations for foreign investments, cross-border transactions, and related compliance matters.",
              "Assistance in obtaining and renewing statutory licenses and registrations such as FSSAI, MSME, BIS, ISO, and other sector-specific approvals.",
              "Regulatory monitoring and compliance management to ensure timely adherence to evolving legal and statutory requirements."
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <CheckCheck className="h-5 w-5 text-[#2b3780] shrink-0 mt-1" />
                <span className="text-justify">{item}</span>
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
                { label: "Business Advisory", to: "/business_advisory" },
                { label: "Audit and Assurance", to: "/audit_and_assurance" },
                { label: "Direct & Indirect Tax Advisory", to: "/direct_indirect_tax" },
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

export default ComplianceSupportPage;
