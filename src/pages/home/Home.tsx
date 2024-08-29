
import ServiceAdvertisement from "./AdvertismentSection"
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
        </>
    )
}

export default Home