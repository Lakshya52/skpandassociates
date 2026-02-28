import React from 'react'
import { assets } from '../assets/assets'
import Breadcrumb from '../components/Breadcrumb'

const breadcrumbItems = [
  { label: 'Home', to: '/' },
  { label: 'Industries We Serve' },
]

const Industries = () => {
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
        {/* Hero Section */}
        <div className="text-center w-full pt-16 sm:pt-20 px-4 relative z-10" data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-gwen-semibold w-full leading-tight text-[#2b3780] mb-3">
            Industries We Serve
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mb-6">Trusted expertise across diverse sectors</p>

          <div className="flex items-center justify-center w-full mt-4" data-aos="fade-up">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full flex justify-center items-center px-4 py-10 relative z-10" data-aos="fade-up" data-aos-delay="500">

          <div className="w-full sm:w-[95%] lg:w-[85%] flex items-center flex-col h-fit bg-white rounded-2xl shadow-lg shadow-blue-200/30 border border-blue-100 px-6 sm:px-10 md:px-16 py-8 sm:py-12 mb-20 text-base sm:text-lg">


            <div className="flex flex-col md:flex-row w-full justify-between gap-8 md:gap-16">
              {/* Left Column */}
              <div className="w-full md:w-1/2 flex items-start justify-start gap-6">
                <ul className="flex flex-col gap-6 w-full">
                  <li className="flex items-center gap-5 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-white border border-blue-100 hover:border-[#2b3780] hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:bg-[#2b3780]/10 transition-colors duration-300">
                      <img
                        src={assets.ManufacturingIcon}
                        className="h-10 w-10 object-contain"
                        alt="Manufacturing"
                      />
                    </div>
                    <span className="text-base sm:text-lg md:text-lg font-medium text-gray-800 group-hover:text-[#2b3780] transition-colors duration-300">
                      Manufacturing & Consumer Industries
                    </span>
                  </li>
                  <li className="flex items-center gap-5 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-white border border-blue-100 hover:border-[#2b3780] hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:bg-[#2b3780]/10 transition-colors duration-300">
                      <img
                        src={assets.TradingIcon}
                        className="h-10 w-10 object-contain"
                        alt="Trading"
                      />
                    </div>
                    <span className="text-base sm:text-lg md:text-lg font-medium text-gray-800 group-hover:text-[#2b3780] transition-colors duration-300">Retail & Trading Sector</span>
                  </li>
                  <li className="flex items-center gap-5 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-white border border-blue-100 hover:border-[#2b3780] hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:bg-[#2b3780]/10 transition-colors duration-300">
                      <img
                        src={assets.RealestateIcon}
                        className="h-10 w-10 object-contain"
                        alt="Real Estate"
                      />
                    </div>
                    <span className="text-base sm:text-lg md:text-lg font-medium text-gray-800 group-hover:text-[#2b3780] transition-colors duration-300">
                      Real Estate & Infrastructure
                    </span>
                  </li>
                  <li className="flex items-center gap-5 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-white border border-blue-100 hover:border-[#2b3780] hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:bg-[#2b3780]/10 transition-colors duration-300">
                      <img
                        src={assets.ItIcon}
                        className="h-10 w-10 object-contain"
                        alt="IT"
                      />
                    </div>
                    <span className="text-base sm:text-lg md:text-lg font-medium text-gray-800 group-hover:text-[#2b3780] transition-colors duration-300">Information Technology</span>
                  </li>
                  <li className="flex items-center gap-5 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-white border border-blue-100 hover:border-[#2b3780] hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:bg-[#2b3780]/10 transition-colors duration-300">
                      <img
                        src={assets.ConsultancyIcon}
                        className="h-10 w-10 object-contain"
                        alt="Consultancy"
                      />
                    </div>
                    <span className="text-base sm:text-lg md:text-lg font-medium text-gray-800 group-hover:text-[#2b3780] transition-colors duration-300">
                      Professional Services & Consultancy
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right Column */}
              <div className="w-full md:w-1/2 flex items-start justify-start gap-6">
                <ul className="flex flex-col gap-6 w-full">
                  <li className="flex items-center gap-5 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-white border border-blue-100 hover:border-[#2b3780] hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:bg-[#2b3780]/10 transition-colors duration-300">
                      <img
                        src={assets.HealthcareIcon}
                        className="h-10 w-10 object-contain"
                        alt="Healthcare"
                      />
                    </div>
                    <span className="text-base sm:text-lg md:text-lg font-medium text-gray-800 group-hover:text-[#2b3780] transition-colors duration-300">
                      Healthcare & Pharmaceuticals
                    </span>
                  </li>
                  <li className="flex items-center gap-5 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-white border border-blue-100 hover:border-[#2b3780] hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:bg-[#2b3780]/10 transition-colors duration-300">
                      <img
                        src={assets.LogisticsIcon}
                        className="h-10 w-10 object-contain"
                        alt="Logistics"
                      />
                    </div>
                    <span className="text-base sm:text-lg md:text-lg font-medium text-gray-800 group-hover:text-[#2b3780] transition-colors duration-300">
                      Logistics & Transportation
                    </span>
                  </li>
                  <li className="flex items-center gap-5 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-white border border-blue-100 hover:border-[#2b3780] hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:bg-[#2b3780]/10 transition-colors duration-300">
                      <img
                        src={assets.AgricultureIcon}
                        className="h-10 w-10 object-contain"
                        alt="Agriculture"
                      />
                    </div>
                    <span className="text-base sm:text-lg md:text-lg font-medium text-gray-800 group-hover:text-[#2b3780] transition-colors duration-300">
                      Agriculture & Allied Sectors
                    </span>
                  </li>
                  <li className="flex items-center gap-5 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-white border border-blue-100 hover:border-[#2b3780] hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:bg-[#2b3780]/10 transition-colors duration-300">
                      <img
                        src={assets.FinancialIcon}
                        className="h-10 w-10 object-contain"
                        alt="Financial"
                      />
                    </div>
                    <span className="text-base sm:text-lg md:text-lg font-medium text-gray-800 group-hover:text-[#2b3780] transition-colors duration-300">Financial Services Sector</span>
                  </li>
                  <li className="flex items-center gap-5 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-white border border-blue-100 hover:border-[#2b3780] hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:bg-[#2b3780]/10 transition-colors duration-300">
                      <img
                        src={assets.EducationIcon}
                        className="h-10 w-10 object-contain"
                        alt="Education"
                      />
                    </div>
                    <span className="text-base sm:text-lg md:text-lg font-medium text-gray-800 group-hover:text-[#2b3780] transition-colors duration-300">
                      Education & Non-Profit Entities
                    </span>
                  </li>
                </ul>
              </div>
            </div>


          </div>
        </div>
      </div>


    </>
  )
}

export default Industries
