import React, { useEffect, useRef } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Lenis from 'lenis'

// AOS import
import AOS from "aos";
import "aos/dist/aos.css";

// testing files
// import LeadershipsNew from './pages/LeadershipsNew.jsx'
import LeadershipsWithPhoto from './pages/LeadershipsWithPhoto.jsx';

// common components
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// pages
import Landing from './pages/Landing.jsx'
import About from './pages/About.jsx'
import Industries from './pages/Industries.jsx'
// import Leaderships from './pages/Leaderships.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'

// services pages
import Accounting from './pages/ServicesPages/AccountingPage.jsx'
import AuditAndAssurance from './pages/ServicesPages/AuditAndAssurancePage.jsx'
import BusinessAdvisory from './pages/ServicesPages/BusinessAdvisoryPage.jsx'
import ComplianceSupport from './pages/ServicesPages/ComplianceSupportPage.jsx'
import DirectIndirectTax from './pages/ServicesPages/DirectIndirectTaxAdvisoryPage.jsx'
import SpecializedServices from './pages/ServicesPages/SpecializedServicePage.jsx'


// least common links
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Terms from './pages/Terms.jsx';
import Disclamer from './pages/Disclamer.jsx';


const App = () => {

  // lenis implementation
  // const lenis = useRef(null);
  // useEffect(() => {
  // Initialize Lenis
  //   lenis.current = new Lenis({
  //     duration: 0.6, // Control the duration of the scroll
  //     easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
  //     smooth: true,
  //     smoothTouch: true, // Enable smooth scrolling on touch devices
  //   });

  //   const animate = (time) => {
  //     lenis.current.raf(time);
  //     requestAnimationFrame(animate);
  //   };

  //   requestAnimationFrame(animate);

  //   // Cleanup on unmount
  //   return () => {
  //     lenis.current.destroy();
  //   };
  // }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,  // Animation duration (ms)
      once: false,     // Animate only once
      offset: 120,    // Trigger animation before reaching element
    });
  }, []);


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} /> {/* landing */}
          <Route path="/about" element={<About />} />{/* about */}
          <Route path="/industries" element={<Industries />} />{/* industries */}
          {/* do not remove the below route or comment */}
          <Route path="/leaderships" element={<LeadershipsWithPhoto />} />
          {/* leaderships */}
          <Route path="/services" element={<Services />} />{/* services */}
          <Route path="/contact" element={<Contact />} />{/* contact */}

          {/* services Routes */}
          <Route path='/accounting' element={<Accounting />} /> {/* accounting page */}
          <Route path='/audit_and_assurance' element={<AuditAndAssurance />} /> {/* audit and assurance */}
          <Route path='/business_advisory' element={<BusinessAdvisory />} /> {/* business advisory */}
          <Route path='/compliance_support' element={<ComplianceSupport />} /> {/* compliance support */}
          <Route path='/direct_indirect_tax' element={<DirectIndirectTax />} /> {/* direct and indirect tax adivsory */}
          <Route path='/specialized_services' element={<SpecializedServices />} /> {/* speciallized services */}

          {/* testing routes */}
          {/* <Route path="/leadershipsNew" element={<LeadershipsNew />} /> */}
          {/* <Route path="/leadershipsWithPhoto" element={<LeadershipsWithPhoto />} /> */}


          {/* least common links */}
          <Route path='/privacy_policy' element={<PrivacyPolicy />} />
          <Route path='/terms_and_conditions' element={<Terms />} />
          <Route path='/legal_disclamer' element={<Disclamer />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App  