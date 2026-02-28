import React from 'react'

const Terms = () => {
    return (


        <>

            <div className="h-[90vh] min-h-fit w-full flex justify-center items-start">
                <div className="flex flex-col justify-between text-justify  sm:text-left mx-4 sm:mx-6 md:mx-15 py-4 gap-10 my-15">

                    <div className="text-center sm:text-start w-full font-bold  ">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-light w-full leading-snug font-gwen-semibold" >
                            Terms <span className='font-gwynerCondensedFont' >&</span> Conditions


                            {/* Terms & Conditions – Sanjay K Pathak & Associates */}
                        </h1>


                    </div>

                    {/* <p>The information and services provided on this website are intended solely for general guidance in accounting, taxation, and compliance matters. By accessing this website, you agree to use the content responsibly and acknowledge that it does not constitute professional advice.</p>


                    <p>Sanjay K Pathak & Associates makes reasonable efforts to ensure the accuracy of information shared on this site. However, we disclaim liability for any loss, damage, or inconvenience arising from reliance on the content. Users should seek direct consultation with a qualified professional before making any decisions.</p>


                    <p>All materials, including text and downloadable content, are the intellectual property of Sanjay K Pathak & Associates. Unauthorized copying, distribution, or reproduction is prohibited. Links to external websites are provided for convenience; we do not control or endorse their content.</p>


                    <p>By using this site, you agree to comply with all applicable laws and regulations. Any misuse of content or unauthorized access attempts may result in legal action. These Terms & Conditions may be updated periodically, and continued use of the site constitutes acceptance of the latest version.</p> */}

                    <div className="flex flex-col w-full gap-7">
                        <p className="w-full text-justify">

                            This website is owned and maintained by Sanjay K Pathak & Associates, Chartered Accountants. By accessing or using this site, you agree to these Terms and Conditions and acknowledge that the content is for general informational purposes only, not constituting solicitation of work.

                        </p>
                        <p className="w-full text-justify">
                            All information presented here is intended to provide general guidance on accounting, taxation, and regulatory matters. While care is taken to ensure accuracy, Sanjay K Pathak & Associates makes no warranties regarding completeness or reliability and disclaims any liability for loss or damage arising from reliance on this information.
                        </p>
                        <p className="w-full text-justify">

                            This website may contain links to external sites provided for user convenience. Sanjay K Pathak & Associates does not endorse or control such sites and is not responsible for their content, accuracy, or availability. Users should verify all information independently before reliance.


                        </p>
                        <p className="w-full text-justify">By continuing to use this website, you agree to comply with all applicable laws and these Terms and Conditions. Sanjay K Pathak & Associates reserves the right to update or modify these terms at any time without prior notice. Continued use implies acceptance of any such changes.</p>

                        <p className="w-full text-justify font-semibold">© Sanjay K Pathak & Associates, Chartered Accountants. <br /> All rights reserved.
                            Designed and maintained in accordance with ICAI website guidelines.</p>

                    </div>






                </div>

            </div>
        </>
    )
}

export default Terms