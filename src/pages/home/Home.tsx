
import ServiceAdvertisement from "./AdvertismentSection"
import Faq from "./Faq"
import FeaturedRooms from "./FeaturedRooms"
import HeroSection from "./HeroSection"
import TestimonialSlider from "./Testimonial"
import WhyChooseUs from "./WhyChooseUs"

const Home = () => {
    return (
        <>
            <div className="px-2 md:px-0">
                <HeroSection />
                <ServiceAdvertisement />
                <FeaturedRooms />
                <TestimonialSlider />
                <WhyChooseUs />
                <Faq />
            </div>
        </>
    )
}

export default Home