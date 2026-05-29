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

    // ✅ MAIN HOME ROUTE
    {
        path: "/",
        element: (
            <>
                <HeroSection />
                <Programs />
                <Reasons />
                <Plans />
                <Testimonials />
                <Join />
                <ContactUs />
                <Footer />
            </>
        )
    },

    // EXTRA ROUTES
    {
        path: "/herosection",
        element: <HeroSection />
    },
    {
        path: "/programs",
        element: <Programs />
    },
    {
        path: "/reasons",
        element: <Reasons />
    },
    {
        path: "/plans",
        element: <Plans />
    },
    {
        path: "/testimonials",
        element: <Testimonials />
    },
    {
        path: "/contactus",
        element: <ContactUs />
    },
    {
        path: "/join",
        element: <Join />
    },
    {
        path: "/footer",
        element: <Footer />
    }

]);