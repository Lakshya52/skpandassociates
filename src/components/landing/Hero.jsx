import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>



      <div className="min-h-fit w-full  relative" data-aos="fade-up">
        {/* Bottom Fade Grid Background */}
        <div
          className="absolute inset-0 opacity-60 z-[-1]"
          style={{
            backgroundImage: ` linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px) `,
            backgroundSize: "20px 30px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
          }}
        />
        {/* Your Content/Components */}
        {/* Heading + Subtitle */}
        <div className="text-center w-full  py-10 mt-0 md:mt-10 font-bold">
          <h1 className="text-3xl md:text-5xl font-light w-full leading-tight font-gwen-semibold" >
            <span className="italic font-extralight"  >Your</span> Partner in Finance, Tax and <br /> Business Solution
          </h1>
          <p className="mt-2 font-light text-gray-700 w-full text-sm md:text-base ">
            Integrated Professional Services For Businesses and Individuals
          </p>
        </div>
      </div>






      {/* Hero Image Section */}
      <div className="relative w-full">
        {/* Background Image */}
        <div className="h-[250px] md:h-[400px] w-full relative" >
          <img
            loading="lazy"
            src="HeorImage2.webp"
            className="object-cover w-full h-full"
            alt="hero section image for Sanjay K Pathak & Associates"
          />


          {/* CTA Button */}
          {/* <Link
            onClick={handleScrollTop}
            to="/contact"
            className="absolute left-1/6 top-0 -translate-x-1/2 -translate-y-1/2"
          >
            <img
              src="CTAButton.webp"
              // className="animate-spin-slow w-16 md:w-24"
              className="w-16 md:w-24"
              alt="CTA Button"
              
            />
          </Link> */}

          {/* Scrolling Links */}
          {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-[#2c2c2c]/90 text-white py-3">
            <div className="flex whitespace-nowrap animate-marquee">
              {[
                { to: "/accounting", label: "Accounting & Financials" },
                { to: "/audit_and_assurance", label: "Audit And Assurance" },
                { to: "/business_advisory", label: "Business Advisory" },
                { to: "/compliance_support", label: "Compliance Support" },
                { to: "/direct_indirect_tax", label: "Direct & Indirect Tax Advisory" },
                { to: "/specialized_services", label: "Specialized Services" },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  onClick={handleScrollTop}
                  to={item.to}
                  className="px-6 text-xs md:text-sm hover:underline"
                >
                  {item.label}
                </Link>
              ))}

               Duplicate list for seamless loop 
              {[
                { to: "/accounting", label: "Accounting & Financials" },
                { to: "/audit_and_assurance", label: "Audit And Assurance" },
                { to: "/business_advisory", label: "Business Advisory" },
                { to: "/compliance_support", label: "Compliance Support" },
                { to: "/direct_indirect_tax", label: "Direct & Indirect Tax Advisory" },
                { to: "/specialized_services", label: "Specialized Services" },
              ].map((item, idx) => (
                <Link
                  key={`dup-${idx}`}
                  onClick={handleScrollTop}
                  to={item.to}
                  className="px-6 text-xs md:text-sm hover:underline"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Hero
