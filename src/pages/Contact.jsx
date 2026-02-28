import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
// import emailjs from 'emailjs-com';

const Contact = () => {
  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Contact Us' },
  ]


  // previous emailjs method used to send form data is commented out below 

  // const handleTempSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Error Submitting the form please contact via phone numbers present on the contact page");
  // }

  // const handleContactSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_ivdzs0m", // Replace with your EmailJS service ID
  //       "template_axor5sk", // Replace with your EmailJS template ID
  //       e.target,
  //       "mWN22rx8VMaAnrB5f" // Replace with your EmailJS public key
  //     )
  //     .then(
  //       (result) => {
  //         alert("Message sent successfully!");
  //         e.target.reset();
  //       },
  //       (error) => {
  //         console.error("EmailJS Error:", error.text);
  //         alert("Failed to send message. Try again later.");
  //       }
  //     );
  // };

  const [loading, setLoading] = useState(false);
  const handleContactSubmitWeb3Froms = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "4201d802-39f4-472e-807f-5da71cf40965"); // Replace with Web3Forms access key if using any other email excepts info@kinraandassociates.com

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        alert("Failed to send message. Please try again later.");
        console.error(result);
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);
      alert("Error submitting form. Please contact us directly.");
    } finally {
      setLoading(false);
    }
  };


  // Branch and head office data
  const office_locations = [
    // head office uttar pradesh
    {
      name: "Uttar Pradesh",
      contacePerson: "GAGAN KINRA",
      email: "email@gmil.com",
      phone: "+91 98972 95511",
      address: "H. No 32, Phase-III-B, Pant Vihar, ITC Road, Saharanpur, U.P.- 247001",
      // mapEmbed: <iframe
      //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.119964024052!2d77.5452343151156!3d29.96411098191116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb3e0e0e0e0e0%3A0x0!2sH.%20No%2032%2C%20Phase-III-B%2C%20Pant%20Vihar%2C%20ITC%20Road%2C%20Saharanpur%2C%20U.P.-%20247001!5e0!3m2!1sen!2sin!4v1710000000004!5m2!1sen!2sin"
      //   width="100%"
      //   height="100%"
      //   style={{ border: 0 }}
      //   allowFullScreen=""
      //   loading="lazy"
      //   referrerPolicy="no-referrer-when-downgrade"
      //   title="Registered Office"
      // ></iframe>



      mapEmbed: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2253.569379038977!2d77.53277785025406!3d29.942723976340492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eebca38815c15%3A0x5b7ee36557760617!2sKinra%20%26%20Associates!5e0!3m2!1sen!2sin!4v1759843353310!5m2!1sen!2sin" width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Registered Office"></iframe>
    },

    // branch offices
    // delhi
    {
      name: "Delhi",
      contacePerson: "CHETAN KHURANA",
      email: "email@gmail.com",
      phone: "+91 78273 01577",
      address: "843, Gautam, Gali Jwala Nagar, Shahdara, Delhi-110032",
      mapEmbed: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.6347927110155!2d77.29724577457438!3d28.670651882350278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb70cf59db6d%3A0x1fe19019ab89202f!2s843%2C%20Gautam%20Gali%2C%20Jawala%20Nagar%2C%20Shahdara%2C%20Delhi%2C%20110032!5e0!3m2!1sen!2sin!4v1754998898331!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Delhi Office"></iframe>
    },
    // karnataka
    {
      name: "Karnataka",
      contacePerson: "ADITYA A K",
      email: "email@gmail.com",
      phone: "+91 82173 93670",
      address: "76, 2nd Floor, Hanumanthanagara, 50 ft Road, Bengaluru, Karnataka-560019",
      mapEmbed: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62216.81902117869!2d77.51484087877355!3d12.936542272877045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f4b7246165%3A0x262e856aea3cb36d!2sSilicon%20Honda%20Hanumanthnagar!5e0!3m2!1sen!2sin!4v1754998967850!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mumbai Office"></iframe>
    },
    // maharashtra
    {
      name: "Maharashtra",
      contacePerson: "DEVANSH JI VAISHYA",
      email: "email@gmail.com",
      phone: "+91 89758 16000",
      address: "101-102/B7 Gangadham Phase 1, Marketyard Jagdish Niwas, Pune, Maharashtra-411037",
      mapEmbed: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.1648580777523!2d73.87197977423627!3d18.476190270530314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea9afbd3def9%3A0x1c8ce8f1fece189f!2sGangaDham%20Phase%201!5e0!3m2!1sen!2sin!4v1754999034638!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Bangalore Office"></iframe>
    },
    // madhya pradesh
    {
      name: "Madhya Pradesh",
      contacePerson: "AYUSH SAXENA",
      email: "email@gmail.com",
      phone: "+91 99588 34607",
      address: "H. No. 40, Shiv Shakti Nagar, Ahmadpur, Hoshangabad Road, Bhopal, Madhya Pradesh-462026",
      mapEmbed: <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3667.4048515703466!2d77.455826!3d23.191912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDExJzMwLjkiTiA3N8KwMjcnMjEuMCJF!5e0!3m2!1sen!2sin!4v1756895289549!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Chennai Office"></iframe>
    },
    // gujarat
    {
      name: "Gujarat",
      contacePerson: "BHAVIK HIRABHAI RUPAPARA",
      email: "email@gmail.com",
      phone: "+91 98791 53657",
      address: "310, Star Chamber, Rajkot, Gujarat-360001",
      mapEmbed: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.4531732158825!2d70.79621797434463!3d22.298694742955384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb00269c00e3%3A0x7f86ba477321e7ce!2sStarChember!5e0!3m2!1sen!2sin!4v1754999102400!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Chennai Office"></iframe>
    },
    // Bihar
    {
      name: "Bihar",
      contacePerson: "ABHINAV KUMAR",
      email: "email@gmail.com",
      phone: "+91 79034 10638",
      address: "435, Adison Arcade, Fraser Road, Patna, Bihar-800001",
      mapEmbed: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.749208696946!2d85.13840612445657!3d25.61324861472521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed585b92f5e263%3A0x264c261d6914a9b9!2sAdision%20Arcade!5e0!3m2!1sen!2sin!4v1754999150678!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Chennai Office"></iframe>
    },
  ];


  const [selectedBranch, setSelectedBranch] = useState(office_locations[0])

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

        {/* Page heading */}
        <div className="text-center w-full pt-16 sm:pt-20 px-4 relative z-10" data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-gwen-semibold w-full leading-tight text-[#2b3780] mb-3">
            Let<span className=' font-gwynerCondensedFont'>'</span>s Connect
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mb-6">We're here to help. Get in touch with us today.</p>
          <div className="flex items-center justify-center w-full mt-4" data-aos="fade-up">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>

        {/* Main wrapper */}
        <div className="w-full flex justify-center items-center px-4 py-10 relative z-10" data-aos="fade-up" data-aos-delay="500">
          <div className="w-full sm:w-[95%] lg:w-[85%] flex flex-col lg:flex-row gap-12 justify-between items-start h-fit bg-white rounded-2xl shadow-lg shadow-blue-200/30 border border-blue-100 px-6 sm:px-10 md:px-16 py-8 sm:py-12 mb-20 text-sm sm:text-base md:text-lg">

            {/* Contact Form Section */}
            <div className="w-full lg:w-1/2">
              <form
                // onSubmit={handleContactSubmit} 
                // onSubmit={handleTempSubmit}
                onSubmit={handleContactSubmitWeb3Froms}
                className="w-full space-y-4">


                {/* Hidden Access Key */}
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />


                <div className="flex flex-col gap-3">
                  <span htmlFor="name" className="font-semibold text-gray-700">Name :</span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full mt-1 border border-blue-200 rounded-lg p-3 outline-none focus:border-[#2b3780] focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-white"
                    required
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <span htmlFor="email" className="font-semibold text-gray-700">Email :</span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full mt-1 border border-blue-200 rounded-lg p-3 outline-none focus:border-[#2b3780] focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-white"
                    required
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <span htmlFor="subject" className="font-semibold text-gray-700">Subject :</span>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full mt-1 border border-blue-200 rounded-lg p-3 outline-none focus:border-[#2b3780] focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-white"
                    required
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <span htmlFor="message" className="font-semibold text-gray-700">Message :</span>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full mt-1 border border-blue-200 rounded-lg p-3 h-40 resize-none outline-none focus:border-[#2b3780] focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-white"
                    required
                  />
                </div>
                {/* Captcha removed as per request */}
                <button
                  type="submit"
                  disabled={loading}
                  className="cursor-pointer w-full p-3 bg-gradient-to-r from-[#ff6b6b] to-[#ff5252] text-white font-semibold hover:shadow-lg hover:shadow-red-300/50 transition-all duration-300 rounded-full disabled:opacity-50 mt-6"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>

            {/* Branch Office Selector */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl text-[#2b3780]">Our Offices</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {office_locations.map((branch) => (
                  <button
                    key={branch.name}
                    className={`px-4 sm:px-5 py-2.5 rounded-lg border-2 text-xs sm:text-sm md:text-base cursor-pointer font-medium transition-all duration-300 ${selectedBranch.name === branch.name
                      ? "bg-gradient-to-r from-[#ff6b6b] to-[#ff5252] text-white border-[#ff6b6b] shadow-lg shadow-red-300/30"
                      : "bg-white text-[#2b3780] border-blue-200 hover:border-[#ff6b6b] hover:bg-blue-50"
                      }`}
                    onClick={() => setSelectedBranch(branch)}
                    type="button"
                  >
                    {branch.name}
                  </button>
                ))}
              </div>

              {/* Selected Branch Info */}
              <div className="w-full flex flex-col gap-6 mt-4 p-6 bg-blue-50 rounded-xl border border-blue-200">
                {/* <div className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-gray-600">PHONE</span>
                  <a href={`tel:${selectedBranch.phone}`} className="text-lg font-semibold text-[#ff6b6b] hover:underline">
                    {selectedBranch.phone}
                  </a>
                </div> */}
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-gray-600">ADDRESS</span>
                  <p className="text-gray-700">
                    {selectedBranch.address}
                  </p>
                </div>
                <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden shadow-lg border border-blue-200">
                  {selectedBranch.mapEmbed}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
  </>
  )
}

export default Contact
