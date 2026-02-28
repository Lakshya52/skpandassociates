import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import HeroBanner from "./HeroBanner"


const HeroNew = () => {

   const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  return (

    <>
    <HeroBanner />
    <section
      className="relative h-screen w-full flex items-center justify-center text-center text-white"
    >
      {/* Background Image */}
      <img
        src="/HeroNewImage.webp"
        alt="hero section background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay (optional dark filter for text readability) */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Centered Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-3xl md:text-5xl font-light leading-tight font-gwen-semibold">
          {/* Comprehensive Accounting and <br /> Tax Services */}

          Comprehensive Financial, Audit, <br /> and Tax Services
          {/* Business Solution */}
        </h1>
        {/* <h1 className="text-3xl md:text-5xl font-light leading-tight font-gwen-semibold">
          Your Partner in Finance, Tax and <br />
          Business Solution
        </h1> */}
        <p className="my-4 mb-6 text-gray-200 text-md md:text-xl">
          Integrated Accounting, Taxation, and Advisory Services for Businesses and Individuals
        </p>
        <Button label='Explore Our Services' href='/services'  bg_color='#2b3780' border={false} onClick={handleScrollTop} className='font-normal text-sm sm:text-lg py-2 px-5 bg-[#2b3780]  hover:bg-black rounded-full'  to="/services">
          
        </Button>
      </div> 
    </section>
      </>
  )
}

export default HeroNew



// previous component with gsap text animations

// import React, { useEffect, useRef } from 'react'
// import { gsap } from "gsap";
// import { SplitText } from "gsap/SplitText";

// gsap.registerPlugin(SplitText);

// const HeroNew = () => {
//   const headingsRef = useRef([]);

//   useEffect(() => {
//     // Select all headings inside the ref array
//     const headings = headingsRef.current;
    
//     headings.forEach((heading) => {
//       const split = new SplitText(heading, { type: "chars" });
//       const duration = 0.6;
//       const staggerTime = duration / 10;

//       gsap.set(split.chars, { yPercent: 50 });

//       gsap.to(split.chars, {
//         yPercent: 0,
//         duration: duration,
//         stagger: staggerTime,
//         ease: "power1.inOut",
//       });
//     });
//   }, []);

//   return (
//     <section className="relative h-screen w-full flex items-center justify-center text-center text-white">
//       {/* Background Image */}
//       <img
//         src="/HeroNewImage.webp"
//         alt="hero section background"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/45" />

//       {/* Centered Content */}
//       <div className="relative z-10 px-4">
//         {/* Masked Headings */}
//         <div className="overflow-hidden space-y-2">
//           <h1
//             ref={(el) => (headingsRef.current[0] = el)}
//             className="text-3xl md:text-5xl font-light leading-tight font-gwen-semibold leading-tight overflow-hidden"
//           >
//             Your Partner in Finance, Tax and <br className='sm:block hidden' /> Business Solution
//           </h1>
//           <h1
//             ref={(el) => (headingsRef.current[1] = el)}
//             className="text-3xl md:text-5xl font-light leading-tight font-gwen-semibold leading-tight overflow-hidden"
//           >
            
//           </h1>
//         </div>

//         <p className="mt-4 text-gray-200 text-sm md:text-base">
//           Integrated Professional Services For Businesses and Individuals
//         </p>
//       </div>
//     </section>
//   )
// }

// export default HeroNew
