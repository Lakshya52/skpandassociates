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
    // head office bihar
    {
      name: "Darbhanga - Bihar",
      // contacePerson: "Professor Shravan Kumar Mishra",
      // email: "email@gmil.com",
      // phone: "+91 98972 95511",
      address: "H/O Professor Shravan Kumar Mishra Retd. Principal West Of Dighi Pokhar Professor’s Colony Darbhanga- 846004",
      mapEmbed: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1790.6921633982558!2d85.90207821066146!3d26.15161007779663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb91a510d23f3%3A0xeabdbc55df1b51c7!2sProfessor&#39;s%20Colony!5e0!3m2!1sen!2sin!4v1772255321684!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Registered Head Office"></iframe>
    },

    // branch offices
    // noida
    {
      name: "Noida - Uttar Pradesh",
      // contacePerson: "CHETAN KHURANA",
      // email: "email@gmail.com",
      // phone: "+91 78273 01577",
      address: "C- 69, Sector-2, Noida, Uttar Pradesh- 201301",
      mapEmbed: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.373249038951!2d77.31241644296803!3d28.583727426874365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45ed6f7bf2d%3A0xafef075582efcd5e!2sSANJAY%20K%20PATHAK%20%26%20ASSOCIATES!5e0!3m2!1sen!2sin!4v1772255564153!5m2!1sen!2sin" 
       width="100%" 
       height="100%" 
       style={{ border: 0 }} 
       allowFullScreen="" 
       loading="lazy" 
       referrerPolicy="no-referrer-when-downgrade" 
       title="Noida Office"></iframe>
    },
    // Lic Building
    {
      name: "Chennai",
      // contacePerson: "ADITYA A K",
      // email: "email@gmail.com",
      // phone: "+91 82173 93670",
      address: "Room No- 137 – New, 2nd Floor Above Andhra Bank. Mount Road, Near LIC Building Chennai- 600002",
      mapEmbed: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.2755832844216!2d80.26473107161392!3d13.064216705935731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526619fb44a541%3A0x7d2cd756512a6984!2sLIC%20Building%2C%20LIC%20SOUTHERN%20ZONAL%20OFFICE%2C%20Anna%20Salai%2C%20Chennai%2C%20Tamil%20Nadu%20600002!5e0!3m2!1sen!2sin!4v1772255699898!5m2!1sen!2sin" 
      width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Chennai Office"></iframe>
      
    },
    // maharashtra
    {
      name: "New Delhi",
      // contacePerson: "DEVANSH JI VAISHYA",
      // email: "email@gmail.com",
      // phone: "+91 89758 16000",
      address: "GF - 22, Hans Bhawan 1, Bahadur Shah Zafar Marg New Delhi – 110002",
      mapEmbed: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1041.1782420316442!2d77.24107179250342!3d28.626998495617656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0024d67645%3A0x53166238b9f005f3!2sHans%20Bhawan%20Wing-1!5e0!3m2!1sen!2sin!4v1772255850350!5m2!1sen!2sin" 
      width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="New Delhi Office"></iframe>
    }
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
