import { createBrowserRouter } from "react-router-dom";

import Footer from './components/footer/Footer';
import HeroSection from './components/hero-section/HeroSection';
import Join from './components/join/Join';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
import Testimonials from './components/testimonials/Testimonials';
import ContactUs from './components/Contact/ContactUs';

export const router = createBrowserRouter([

    {
        path: "/",
        element: (
            <>
                <HeroSection />
                <Programs />
                <Reasons />
                <Plans />
                <Testimonials />
                <ContactUs />
                <Join />
                <Footer />
            </>
        )
    }

]);