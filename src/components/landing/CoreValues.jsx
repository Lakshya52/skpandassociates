import React from 'react'
import { assets } from '../../assets/assets'

const CoreValues = () => {
    const values = [
        { icon: assets.IntegrityIcon, label: "Integrity", delay: 100 },
        { icon: assets.ResponsibilityIcon, label: "Responsibility", delay: 150  },
        { icon: assets.ConfidentialityIcon, label: "Confidentiality", delay: 200  },
        { icon: assets.IndependenceIcon, label: "Independence", delay: 250 },
        { icon: assets.TechnicalExcellenceIcon, label: "Professional Competency", delay: 300 },
        // { icon: assets.StatewardshipIcon, label: "Stewardship", delay: 400 },
    ];

    return (
        <>
            <style>{`
                /* Use a CSS variable for the wrapper gap so we can compute exact flex-basis values
                   that match the Tailwind gap utilities (gap-4 = 1rem, md:gap-8 = 2rem).
                   This ensures two-per-row on the smallest screens and five-per-row at >=1365px. */
                .core-values-wrapper { --cv-gap: 1rem; }

                .core-values-wrapper .core-value-item {
                    box-sizing: border-box;
                    min-width: 0;
                    /* two items per row: subtract one gap */
                    flex: 0 0 calc((100% - var(--cv-gap)) / 2);
                }

                @media (min-width: 640px) { /* sm: three items per row; there are 2 gaps between them */
                    .core-values-wrapper .core-value-item {
                        flex: 0 0 calc((100% - (var(--cv-gap) * 2)) / 3);
                    }
                }

                @media (min-width: 768px) { /* md: Tailwind switches gap to 2rem (gap-8) */
                    .core-values-wrapper { --cv-gap: 2rem; }
                }

                @media (min-width: 1365px) { /* large screens: five items in one row; 4 gaps between them */
                    .core-values-wrapper .core-value-item {
                        flex: 0 0 calc((100% - (var(--cv-gap) * 4)) / 5);
                    }
                }
            `}</style>

        <div className="w-full flex items-center justify-center px-6 md:px-10 lg:px-20 py-20 md:py-28">
            <div className="text-center w-full max-w-6xl" data-aos="fade-up">
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-gwen-semibold w-full leading-tight text-[#2b3780] mb-4">
                    Our Core Values
                </h1>
                <p className="mb-12 text-base md:text-lg text-gray-700 data-aos-delay=100">
                    Our approach to every project is guided by the following principles
                </p>

                {/* Responsive Flex layout: 2 per row on smallest screens, 3 on small, 5 on large. */}
                <div className="core-values-wrapper flex flex-wrap justify-center gap-4 md:gap-8 mt-16 font-light text-gray-700 text-sm md:text-base">
                    {values.map((val, i) => (
                        <div
                            key={i}
                            className="core-value-item flex flex-col items-center justify-start gap-4 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:border-[#2b3780] hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 h-full"
                            data-aos="fade-up"
                            data-aos-delay={val.delay}
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-[#2b3780]/10 to-[#2b3780]/5">
                                {val.icon ? (
                                    <img src={val.icon} alt={val.label} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-blue-100 rounded-full" aria-hidden="true" />
                                )}
                            </div>
                            <p className="text-center font-gwen-semibold text-gray-800 text-base md:text-lg">{val.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default CoreValues
