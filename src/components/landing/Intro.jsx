import React from 'react'
import Button from '../ui/Button'

const Intro = () => {
  return (
    <>
      {/* wrapper */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-10 lg:px-20 py-16 md:py-24 h-auto gap-12 lg:gap-20">

        {/* left */}
        <div className="w-full lg:w-1/2 h-auto flex items-center lg:items-start justify-center flex-col text-center lg:text-left" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-gwen-semibold w-full leading-snug text-(--color-primary)">
            Supporting Businesses and Individuals with Professional Services
          </h1>
          <p className="mt-6 md:mt-8 mb-8 md:mb-10 text-base md:text-lg text-gray-700 leading-7">
            We offer taxation, audit, financial, and accounting services, along with compliance support, assisting organizations and individuals in meeting statutory and regulatory obligations.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button label="About US" href="/about" b_radius="rounded-full" border={false} hov_bg="[#2b3780]" hov_text="white" 
            />
          </div>
        </div>

        {/* right images */}
        <div className="w-full lg:w-1/2 h-auto flex flex-row lg:flex-row items-center justify-center gap-6 lg:gap-8" data-aos="fade-up">
          <img
            src="IntroNew1.webp"
            className="w-1/2 object-cover overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 h-[200px] md:h-[300px] lg:h-96 mb-6 lg:mb-20 rounded-2xl shadow-lg"
            alt="Intro visual 1"
          />
          <img
            src="IntroNew2.webp"
            className="w-1/2 object-cover overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 h-[200px] md:h-[300px] lg:h-96 mt-6 lg:mt-10 rounded-2xl shadow-lg"
            alt="Intro visual 2"
          />
        </div>
      </div>

    </>
  )
}

export default Intro
