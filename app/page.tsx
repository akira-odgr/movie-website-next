import Categories from "./pageComponents/Categories";
import Devices from "./pageComponents/Devices";
import FaqSec from "./pageComponents/FaqSec";
import Hero from "./pageComponents/Hero";
import Pricing from "./pageComponents/Pricing";

export const Home = () => {
    return (
        <>
            <Hero />
            <Categories />
            <Devices />
            <FaqSec />
            <Pricing />
        </>
    );
};

export default Home;
