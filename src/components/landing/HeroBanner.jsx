import React from 'react'
import Button from '../ui/Button'
import { Link } from 'react-router-dom'

const HeroBanner = () => {
    const services = [
        { name: "Accounting & Financial Reporting", link: "/accounting" },
        { name: "Business Advisory", link: "/business_advisory" },
        { name: "Audit and Assurance", link: "/audit_and_assurance" },
        { name: "Direct & Indirect Tax Advisory", link: "/direct_indirect_tax" },
        { name: "Regulatory & Compliance Support", link: "/compliance_support" },
        { name: "Specialized Advisory Services", link: "/specialized_services" },
    ]

    return (
        <>
            <style>{`
                @keyframes scroll-right-to-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                .service-scroll-container {
                    animation: scroll-right-to-left 40s linear infinite;
                }
                
                .service-scroll-container:hover {
                    animation-play-state: paused;
                }
            `}</style>
            
            <div 
                className="h-[75dvh] w-dvw relative flex items-center justify-start mt-[10dvh]" 
            >
                <img 
                    src="/landing/skp_banner.webp" 
                    alt="skp and associates landing page image" 
                    className='absolute w-auto h-full object-cover right-0 bottom-0'
                />
                {/* content wrapper */}
                <div className='flex flex-col absolute mx-15 max-w-2xl' >

                    <h1 className="  text-[color:var(--color-primary)] text-3xl  md:text-5xl font-gwen-semibold z-10">Comprehensive Financial, <br /> Audit and Tax Services</h1>

                    <p className="mt-5 md:mt-7 mb-5 md:mb-7 text-md md:text-base text-gray-700">
                        Comprehensive Accounting, Taxation, and Advisory Services designed to support regulatory compliance, financial reporting, and informed decision-making for businesses and individuals.
                    </p>

                    <div className="w-fit">
                        <Button label="Our Services" href="/services" b_radius="rounded-full" border={false} hov_bg="[#2b3780]" hov_text="white" 
                        />
                    </div>
                </div>
            </div>
            

            {/* major services - scrolling banner */}
            <div className='relative w-full bg-gradient-to-br from-(--color-primary) via-[#3d4a9c] to-(--color-primary) py-5 md:py-7 overflow-hidden shadow-2xl'>
                
                <div className='service-scroll-container flex gap-5 md:gap-8 w-fit cursor-pointer'>
                    {[...services, ...services].map((service, idx) => (
                        <Link
                            to={service.link}
                            key={idx}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                            className='flex-shrink-0 whitespace-nowrap no-underline'
                        >
                            <div className='inline-flex items-center gap-5 px-5 md:px-10  rounded-lg text-white font-semibold text-sm md:text-base hover:from-white/15 hover:to-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300'>
                                <div className='w-2 h-2 rounded-full bg-[#ff6b6b]'></div>
                                {service.name}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
export default HeroBanner