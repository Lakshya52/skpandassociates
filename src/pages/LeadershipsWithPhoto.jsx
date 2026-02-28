import React, { useState } from 'react'
import { assets } from '../assets/assets'
import Breadcrumb from '../components/Breadcrumb'
import { Plus } from 'lucide-react'


const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Our Leadership' },
]
const partners = [
    {
        name: "CA Sanjay Kumar Pathak",
        imageThumb: "/pratnerThumbnails/compressed/sanjay.png",
        image: "/fullSizeImages/sanjay.png",
        // phone: "+91 12345 67891",
        description:
            "He was enrolled as a member of the ICAI in 1997 and has a vast experience of more than 14 years in almost every facet of the Accounting Profession. He is Managing Partner of the firm and in that capacity looks after the entire range of practice relating to Audit, Direct Taxation including planning for corporate and non resident Indians and rendering of consultancy on Company law matters & FEMA matters.",
    },
    {
        name: "CA Dharmendra Kumar",
        imageThumb: "/pratnerThumbnails/compressed/dharmendra.png",
        image: "/fullSizeImages/dharmendra.png",
        // phone: "+91 12345 67891",
        description:
            "Chartered Accountant F.C.A with post qualification experience of more than 13 years for diversified areas of audit, like Internal audits, Consultancy assignments, company law matters and System Audit."
    },
    {
        name: "CA Ravi Shankar",
        imageThumb: "/pratnerThumbnails/compressed/ravi.png",
        image: "/fullSizeImages/ravi.png",
        phone: "+91 12345 67891",
        description:
            "F.C.A having more than 5 years post qualification experience in Statutory/Internal Audit of Banks, NBFC, Private Sector Companies and various Government Organizations, due diligence, Project Financing, Service Tax matters. "
    },
    {
        name: "CA Meenakshi Kumari",
        imageThumb: "/pratnerThumbnails/compressed/meenakshi.png",
        image: "/fullSizeImages/meenakshi.png",
        phone: "+91 12345 67891",
        description:
            "F.C.A having more than 5 years post qualification experience in Internal audit, Bank Audits, Indirect Taxation, Peer Review, Transfer Pricing and handling various Company Law Matters."
    }
];

const LeadershipsWithPhoto = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const handleToggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx) // allow toggle open/close
    }

    return (
        <>
            <div className="min-h-screen w-full relative bg-gradient-to-br from-white via-blue-50 to-white">
                {/* Subtle Background Pattern */}
                <div
                    className="absolute inset-0 z-0 opacity-30"
                    style={{
                        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, #2b3780 10px, #2b3780 20px)",
                        opacity: 0.03
                    }}
                />
                
                {/* Your Content/Components */}
                {/* Page Title */}
                <div className="text-center w-full pt-16 sm:pt-20 px-4 relative z-10" data-aos="fade-up">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-gwen-semibold w-full leading-tight text-[#2b3780] mb-2">
                        Meet Our Partners
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base mb-6">Experienced professionals dedicated to excellence</p>
                    <div className="flex items-center justify-center w-full mt-4">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                </div>

                {/* Content Box */}
                <div className="w-full flex justify-center items-center px-4 py-10 relative z-10" data-aos="fade-up" data-aos-delay="500">
                    <div className="w-full sm:w-[95%] lg:w-[85%] flex flex-col justify-between items-center h-fit bg-white rounded-2xl shadow-lg shadow-blue-200/30 border border-blue-100 px-6 sm:px-10 md:px-16 py-8 sm:py-12 mb-20 text-base sm:text-lg">
                        {/* Accordion */}
                        <section className="w-full space-y-4">
                            {partners.map((partner, idx) => (
                                <div
                                    key={partner.name}
                                    className={`accordion rounded-xl transition-all duration-300 border overflow-hidden ${openIndex === idx 
                                        ? "bg-gradient-to-r from-[#2b3780] to-[#3d4a9c] text-white border-[#2b3780] shadow-lg shadow-blue-500/20" 
                                        : "bg-white border-blue-100 hover:border-blue-300 hover:shadow-md hover:shadow-blue-100/50 cursor-pointer"
                                        }`}
                                    id={`partner-heading-${idx}`}
                                    onClick={() => handleToggle(idx)}
                                >
                                    {/* Accordion Toggle */}
                                    <button
                                        className="accordion-toggle cursor-pointer w-full text-left"
                                        aria-controls={`partner-collapse-${idx}`}
                                        aria-expanded={openIndex === idx}
                                        onClick={() => handleToggle(idx)}
                                    >
                                        <div className="flex items-center gap-4 sm:gap-6 p-6 sm:p-7 transition-all duration-200">
                                            {/* Partner Image */}
                                            <div className={`flex-shrink-0 transition-all duration-300 ${openIndex === idx ? "hidden" : "block"}`}>
                                                <div className={`w-16 sm:w-20 h-16 sm:h-20 rounded-lg border-2 ${openIndex === idx ? "border-white/20" : "border-blue-200"} bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center shadow-sm`}>
                                                    {partner.imageThumb ? (
                                                        <img
                                                            src={partner.imageThumb}
                                                            alt={partner.name}
                                                            className="w-full h-full object-cover rounded-lg"
                                                        />
                                                    ) : (
                                                        <div className="text-blue-400 text-2xl font-gwen-semibold">
                                                            {partner.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            
                                            {/* Partner Info */}
                                            <div className="flex-1 min-w-0">
                                                <div className={` sm:text-xl font-gwen-semibold tracking-wide ${openIndex === idx ? "text-xl" : "text-lg"}`}>
                                                    {partner.name}
                                                </div>
                                                {openIndex !== idx && (
                                                    <p className="text-sm sm:text-base mt-2 line-clamp-2 transition-colors duration-200 text-gray-600">
                                                        {partner.description.slice(0, 100)}...
                                                    </p>
                                                )}
                                            </div>

                                            {/* Toggle Icon */}
                                            <div className="flex-shrink-0">
                                                <Plus className={`w-6 h-6 transition-transform duration-300 ${
                                                    openIndex === idx ? "rotate-45" : "rotate-0"
                                                }`} />
                                            </div>
                                        </div>
                                    </button>

                                    {/* Accordion Content */}
                                    <div
                                        className={`accordion-content overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx
                                            ? "opacity-100 visible"
                                            : "opacity-0 invisible h-0"
                                            }`}
                                        aria-labelledby={`partner-heading-${idx}`}
                                    >
                                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start border-t border-white/20 sm:border-t-blue-200 p-6 sm:p-8">
                                            {/* Partner Image - Expanded View */}
                                            <div className="flex-shrink-0 w-full sm:w-auto">
                                                <div className="w-full sm:w-48 h-50 sm:h-62 rounded-xl overflow-hidden border-2 border-white/20 sm:border-blue-200 shadow-lg">
                                                    {partner.image ? (
                                                        <img
                                                            src={partner.image}
                                                            alt={`${partner.name} profile`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className={`w-full h-full flex items-center justify-center text-6xl font-gwen-semibold ${openIndex === idx ? "bg-gradient-to-br from-blue-300 to-blue-200 text-white" : "bg-blue-100 text-blue-300"}`}>
                                                            {partner.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Partner Description */}
                                            <div className="flex-1">
                                                <h3 className="text-xl sm:text-2xl font-gwen-semibold mb-3">About {partner.name.split(' ')[1]}</h3>
                                                <p className="text-sm sm:text-base leading-7 text-justify whitespace-pre-line">
                                                    {partner.description}
                                                </p>
                                                {/* {partner.phone && (
                                                    <div className="mt-5 pt-5 border-t border-white/20 sm:border-gray-300">
                                                        <p className="text-sm font-medium">
                                                            <span className="opacity-70">Phone: </span>
                                                            <a href={`tel:${partner.phone}`} className="font-semibold hover:underline">
                                                                {partner.phone}
                                                            </a>
                                                        </p>
                                                    </div>
                                                )} */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>
                </div>
            </div>



        </>
    )
}

export default LeadershipsWithPhoto
