import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
    { label: "Accounting & Financial Reporting", to: "/accounting" },
    { label: "Business Advisory", to: "/business_advisory" },
    { label: "Audit and Assurance", to: "/audit_and_assurance" },
    { label: "Direct & Indirect Tax Advisory", to: "/direct_indirect_tax" },
    { label: "Regulatory & Compliance Support", to: "/compliance_support" },
    { label: "Specialized Advisory Services", to: "/specialized_services" },
];

const ServiceSidebar = ({ className = "" }) => {
    const location = useLocation();

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: "instant" });
    };

    return (
        <div className={`md:col-span-3 h-full flex flex-col justify-between gap-5 ${className}`}  data-aos="fade-up">
            <div className="bg-violet-50 rounded-2xl shadow-md p-5 h-full min-h-fit">
                <h2 className="text-xl font-gwen-semibold text-gray-800 mb-4">Other Services</h2>
                <ul className="flex flex-col divide-y divide-gray-300">
                    {services.map((service, idx) => {
                        const isActive = location.pathname === service.to;
                        return (
                            <li key={idx}>
                                <Link
                                    to={service.to}
                                    onClick={handleScrollTop}
                                    className={`flex justify-between items-center py-3 text-gray-700 hover:text-[#2b3780]  transition group ${isActive ? "" : ""
                                        }`}
                                >
                                    <span className={isActive ? " text-white w-full bg-[#ff6b6b] px-3 py-2 rounded-xl" : ""}>{service.label}</span>
                                    <ArrowRight className={`${isActive? "opacity-0 hidden": ""} h-4 w-4 opacity-0 group-hover:opacity-100 transition-transform duration-300 translate-x-0 group-hover:translate-x-1`} />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ServiceSidebar;
