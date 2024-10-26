
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section from "../../components/common/Section";

const testimonials = [
    {
        name: "John Doe",
        title: "CEO, Company A",
        image: "https://i.postimg.cc/vHrWqFvH/jhon-dow.jpg",
        feedback: "As a tech-driven company, we needed a solution that was both efficient and scalable. Roomify delivered on all fronts. The real-time notifications and integration with our existing calendar systems have streamlined our operations. Our employees love how easy it is to find and book rooms on the fly."
    },
    {
        name: "Jane Smith",
        title: "Manager, Company B",
        image: "https://i.postimg.cc/dVJGgHWR/man.jpg",
        feedback: "I’ve tried several room booking tools, but Roomify stands out for its ease of use and reliability. Our team has been able to organize meetings with minimal effort, and the system's reminders ensure no one ever misses a scheduled session. It’s been a game-changer for our productivity."
    },
    {
        name: "Alex Johnson",
        title: "CTO, Company C",
        image: "https://i.ibb.co/745fRGT/emily.png",
        feedback: "As a tech-driven company, we needed a solution that was both efficient and scalable. Roomify delivered on all fronts. The real-time notifications and integration with our existing calendar systems have streamlined our operations. Our employees love how easy it is to find and book rooms on the fly."
    },
    {
        name: "Emily Davis",
        title: "HR, Company D",
        image: "https://i.postimg.cc/x1gLQv7w/girl.jpg",
        feedback: "Roomify has become an indispensable tool for our HR department. Coordinating meetings, interviews, and training sessions has never been easier. The platform’s user-friendly design and robust features have significantly improved our workflow, making scheduling a breeze."
    },
    {
        name: "Michael Brown",
        title: "COO, Company E",
        image: "https://i.postimg.cc/dVJGgHWR/man.jpg",
        feedback: "Implementing Roomify was one of the best decisions we've made. The platform is incredibly versatile, allowing us to manage multiple meeting rooms across different locations effortlessly. The analytics feature also provides valuable insights into room usage, helping us optimize our resources effectively."
    }
];

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Section className="py-16 bg-gray-100 px-3 md:px-0">
            <h2 className="text-2xl md:text-4xl text-center mb-6 font-roboto font-bold">What Our Clients Say</h2>
            <Slider {...settings} arrows={false}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="px-4 py-10">
                        <div className="bg-white p-3 md:p-6 rounded-lg shadow-md text-center">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-20 h-20 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                            <p className="text-sm text-gray-500 mb-4">{testimonial.title}</p>
                            <p className="text-gray-700 line-clamp-5">{testimonial.feedback}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </Section>
    );
};

export default TestimonialSlider;
