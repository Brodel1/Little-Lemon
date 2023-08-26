import About from "components/About";
import Highlights from "components/Highlight";
import Showcases from "components/Showcase";
import Testimonial from "components/Testimonial";

const Home = () => {
    return (
        <>
            <Showcases />
            <Highlights />
            <Testimonial />
            {/*
            <About />
    */}
        </>
    );
};

export default Home;