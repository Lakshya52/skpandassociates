import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { CheckCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import ServiceSidebar from "../../components/ServiceSidebar";


const breadcrumbItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Financial Reporting" },
];
const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

const AccountingPage = () => {
  return (
    <div className="w-full mx-0 px-4 sm:px-0 sm:mx-15 py-10 h-[90vh] min-h-fit flex items-center justify-center">
      {/* Breadcrumb */}
      {/* <Breadcrumb items={breadcrumbItems} /> */}  

      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-13 gap-8 ">


        {/* Left Image */}
        <div className="md:col-span-4" data-aos="fade-up">
          <div className="rounded-2xl overflow-hidden shadow-lg h-[320px] md:h-[450px]">
            <img
              src="/servicesPagesImages/Accounting.webp"
              alt="Accounting Service"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Middle Content */}
        <div className="md:col-span-5 flex flex-col" data-aos="fade-up" >

          <h1 className="text-3xl md:text-4xl font-gwen-semibold text-gray-800 leading-snug">
            Accounting <span className="font-playfair-display">&</span> Financial Reporting
          </h1>
          <ul className="mt-6 space-y-4 text-gray-700">
            {/* {[
              "Maintain statutory-compliant financial records and prepare clear financial statements.",
              "Manage payables, receivables, reconciliations, and general ledger efficiently.",
              "Support tax compliance, budgeting, and financial analysis for informed decision-making.",
              "Leverage cloud-based solutions and automation for real-time insights and process optimization.",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <CheckCheck className="h-5 w-5 text-[#2b3780] shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))} */}
            {[
              "Maintaining statutory-compliant financial records and preparation of financial statements as per regulatory framework",
              "Managing payables, receivables, reconciliations, and general ledger efficiently.",
              "Support for tax compliance, budgeting, and financial analysis for quick and informed decision-making.",
              "Leveraging cloud-based solutions and automation for real-time insights and process optimization.",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <CheckCheck className="h-5 w-5 text-[#2b3780] shrink-0 mt-1" />
                <span className="text-justify" >{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Sidebar */}
        <ServiceSidebar   />


      </div>

    </div>
  );
};

export default AccountingPage;
