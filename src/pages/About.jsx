import React from 'react'
import Button from '../components/ui/Button'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'

const breadcrumbItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us' },
]

const About = () => {
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
            About Sanjay K Pathak <span className='font-gwynerCondensedFont'>&</span> Associates
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mb-6">Excellence in Professional Services</p>
          <div className="flex items-center justify-center w-full mt-4" data-aos="fade-up">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full flex justify-center items-center px-4 py-10 relative z-10" data-aos="fade-up" data-aos-delay="500">
          <div className="w-full sm:w-[95%] lg:w-[85%] flex flex-col justify-between items-center h-fit bg-white rounded-2xl shadow-lg shadow-blue-200/30 border border-blue-100 px-6 sm:px-10 md:px-16 py-8 sm:py-12 mb-20 text-base sm:text-lg">
            {/* Objective */}
            <div className="w-full pb-8 mb-8 border-b border-blue-100">
              <h1 className="text-2xl sm:text-3xl md:text-4xl mb-6 font-gwen-semibold text-[#2b3780]">Our Objective</h1>
              <p className="text-justify text-gray-700 leading-7">
                We aim to provide professional services in finance, accounting, and compliance with a focus on accuracy, reliability, and adherence to applicable laws and standards. Our objective is to assist organizations in meeting their statutory and regulatory responsibilities in an efficient and professional manner.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="w-full flex flex-col md:flex-row gap-8 mb-6">
              <div className="w-full p-8 rounded-xl bg-gradient-to-br from-[#2b3780] to-[#3d4a9c] text-white shadow-lg shadow-blue-500/20 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-xl">👁️</div>
                  <h2 className="text-xl sm:text-2xl font-gwen-semibold">Our Vision</h2>
                </div>
                <p className="text-justify leading-7 text-blue-100">
                  To uphold the values of ethics, integrity, and professionalism in the practice of chartered accountancy, to promote sound financial and compliance practices across sectors, and to contribute meaningfully to the professional community, business environment, and society at large.
                </p>
              </div>
              <div className="w-full p-8 rounded-xl bg-gradient-to-br from-[#2b3780] to-[#3d4a9c] text-white shadow-lg shadow-blue-500/20 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-xl\">🎯</div>
                  <h2 className="text-xl sm:text-2xl font-gwen-semibold">Our Mission</h2>
                </div>
                <p className="text-justify leading-7 text-blue-100">
                  To provide services in assurance, taxation, accounting and consultancy with integrity and independence, to ensure ethical practices in all engagements, and to foster an environment supporting professional growth and learning for associates in practice.
                </p>
              </div>


            </div>

            {/* CTA + Image */}
            {/* <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 mt-6">

            
            <div className="flex items-center justify-center gap-5">
              <h1 className="text-lg sm:text-2xl italic">Go Ahead</h1>
              <Button label="Services" href="/services" />
            </div>
            
            <div className="w-full md:w-auto flex justify-center">
              <img src="AboutImage.svg" className="w-48 sm:w-64 md:w-72 lg:w-80" alt="About" />
            </div>

          </div> */}
          </div>
        </div>

      </div>
    </>
  )
}

export default About
