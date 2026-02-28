import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ArrowRight } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import { ExternalLink, Plus } from 'lucide-react'

const breadcrumbItems = [
  { label: 'Home', to: '/' },
  { label: 'Our Services' },
]

const Services = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const services = [
    {
      link: "/accounting",
      img: assets.AccountingManagement,
      title: "Accounting & Financial Reporting",
      bg: "bg-[#9B7EBD80]",
    },
    {
      link: "/business_advisory",
      img: assets.FinanceOptimization,
      title: "Business Advisory",
      bg: "bg-gray-100",
    },
    {
      link: "/audit_and_assurance",
      img: assets.AuditAndAssurance,
      title: "Audit and Assurance",
      bg: "bg-[#74887380]",
    },
    {
      link: "/direct_indirect_tax",
      img: assets.TaxPlanningConsultancy,
      title: "Direct & Indirect Tax Advisory",
      bg: "bg-[#A3DC9A80]",
    },
    {
      link: "/compliance_support",
      img: assets.CorporateCompliance,
      title: "Regulatory & Compliance Support",
      bg: "bg-[#98A1BC80]",
    },
    {
      link: "/specialized_services",
      img: assets.EducationIcon,
      title: "Specialized Advisory Services",
      bg: "bg-[#D1A98080]",
    },
  ]

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
        {/* Page Heading */}
        <div className="text-center w-full pt-16 sm:pt-20 px-4 relative z-10" data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-gwen-semibold w-full leading-tight text-[#2b3780] mb-3">
            Our Services
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mb-6">Comprehensive financial solutions tailored to your needs</p>
          <div className="flex items-center justify-center w-full mt-4" data-aos="fade-up">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>

        {/* Services Grid */}
        <div className="w-full flex items-center justify-center py-12 px-4 relative z-10" data-aos="fade-up" data-aos-delay="500">
          <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, idx) => (
              <Link
                to={service.link}
                key={idx}
                onClick={handleScrollTop}
                className={`rounded-2xl shadow-md hover:shadow-xl border border-blue-100 transition-all duration-300 hover:scale-105 hover:border-[#2b3780] overflow-hidden group bg-white`}
              >
                <div className={`${service.bg} h-32 sm:h-40 flex items-center justify-center relative overflow-hidden`}>
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-16 w-16 sm:h-20 sm:w-20 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                </div>
                <div className="p-6 sm:p-8">
                  <h2 className="text-lg sm:text-xl font-gwen-semibold text-[#2b3780] text-center group-hover:text-[#ff6b6b] transition-colors duration-300">
                    {service.title}
                  </h2>
                  <div className="flex items-center justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="flex items-center gap-2 text-sm text-[#ff6b6b] font-semibold">
                      Learn More <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </div>



                {/* <div className='flex items-center justify-center w-full sm:hidden ' >
                  <span className='flex items-center jusitfy-center gap-2 bg-[#2b3780]/80 rounded p-2 px-4 text-white text-sm' >
                    Open <ExternalLink className="w-5 h-5 " /> 
                  </span>
                </div> */}

              </Link>
            ))}
          </div>
        </div>
      </div>







    </>
  )
}

export default Services
