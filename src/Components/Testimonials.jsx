import React from 'react';
import Slider from 'react-slick';

const TestimonialData = [
    {
        id: 1,
        name: "John Doe",
        text: "Coffee Cafe is a cozy and inviting space designed for coffee enthusiasts and casual visitors alike. It offers a wide selection of freshly brewed coffees, including espresso, cappuccino, latte, and specialty blends.",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Micheal",
        text: "Coffee Cafe is a cozy and inviting space designed for coffee enthusiasts and casual visitors alike. It offers a wide selection of freshly brewed coffees, including espresso, cappuccino, latte, and specialty blends.",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Sara",
        text: "Coffee Cafe is a cozy and inviting space designed for coffee enthusiasts and casual visitors alike. It offers a wide selection of freshly brewed coffees, including espresso, cappuccino, latte, and specialty blends.",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 4,
        name: "David Smith",
        text: "Coffee Cafe is a cozy and inviting space designed for coffee enthusiasts and casual visitors alike. It offers a wide selection of freshly brewed coffees, including espresso, cappuccino, latte, and specialty blends.",
        img: "https://picsum.photos/103/103",
    },
    {
        id: 5,
        name: "William",
        text: "Coffee Cafe is a cozy and inviting space designed for coffee enthusiasts and casual visitors alike. It offers a wide selection of freshly brewed coffees, including espresso, cappuccino, latte, and specialty blends.",
        img: "https://picsum.photos/103/103",
    },
];
const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className='py-10 mb-10' >
            <div className='container' >
                {/* Header Section */}
                <div
                    data-aos='fade-up'
                    className='text-center mb-10' >
                    <h1 className='text-4xl font-bold font-cursive text-gray-800'
                    >
                        Testimonials
                    </h1>
                </div>

                {/* Testimonials Card Section */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {
                            TestimonialData.map((data) => (
                                <div className='my-6'>
                                    <div
                                        key={data.id}
                                        className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative '
                                    >
                                        {/* Image Section */}
                                        <div className='mb-4' >
                                            <img src={data.img} alt=""
                                                className='rounded-full w-20 h-20 ' />
                                        </div>
                                        {/* Text Content Section */}
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="space-y-3">
                                                <p className="text-xs text-gray-500">{data.text}</p>
                                                <h1 className="text-xl font-bold text-black/80  font-cursive2">{data.name}
                                                </h1>
                                            </div>
                                        </div>
                                        <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                                            ,,
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Testimonials