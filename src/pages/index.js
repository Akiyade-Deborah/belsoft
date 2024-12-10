import Head from "next/head";
import Hero from "../components/hero";
import AboutUs from "../components/aboutus";
import Blank from "../components/blank"



const LandingPage = () => {
    return (
        <div  className="font-sans bg-gray-50 text-gray-900">
            <Head>
            <meta charset="UTF-8" /> 
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Belsoft Landing Page </title>
            </Head>
            <Hero />
            <AboutUs />
            <Blank />
        </div>
    );
}

export default LandingPage;