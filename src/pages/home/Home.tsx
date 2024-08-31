
import ServiceAdvertisement from "./AdvertismentSection"
import Faq from "./Faq"
import FeaturedRooms from "./FeaturedRooms"
import HeroSection from "./HeroSection"
import TestimonialSlider from "./Testimonial"

const Home = () => {
    return (
        <>
            <HeroSection />
            <ServiceAdvertisement />
            <FeaturedRooms />
            <TestimonialSlider />
            <Faq />
        </>
    )
}

export default Home