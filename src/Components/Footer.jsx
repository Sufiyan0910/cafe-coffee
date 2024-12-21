import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import FooterBg from '../assets/coffee-footer.jpg'

const FooterLinks = [
    {
        title: 'Home',
        link: '/#',
    },
    {
        title: 'About',
        link: '/#about',
    },
    {
        title: 'Contact',
        link: '/#cantact',
    },
    {
        title: 'Blog',
        link: '/#blog',
    },
]

const bgImage = {
    backgroundImage: `url(${FooterBg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minheight: '400px',
    width: '100%',
};

const Footer = () => {
    return (
        <div style={bgImage} className='text-white'>
            <div className="bg-black/40 min-h-[400px]">
                <div className='container grid md:grid-cols-3 pb-20 pt-5'>
                    {/* Company Details */}
                    <div className='py-8 px-4' >
                        <a href="#" className='font-semibold tracking-widest text-2xl sm:text-3xl font-cursive'>
                            {" "}
                            Coffee Cafe </a>
                        <p className='pt-4' >
                            {" "}
                            Crafted Coffee, Cozy Vibes,  Unfargettable
                            Moments - Your Perfect Espresso Escape
                        </p>
                        <a
                            href="https://www.youtube.com"
                            target='_blank'
                            className='inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full'
                        >
                            Visit Our Youtube Channel
                        </a>
                    </div>

                    {/* Footer Link */}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        {/* First Col Link */}
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-semibold sm:text-left mb-3' >
                                Footer Links
                            </h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map((data, index) => (
                                        <li key={index}>
                                            <a
                                                href={data.link}
                                                className='inline-block hover:scale-105 duration-200'
                                            >
                                                {data.title}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        {/* Second Col Links */}
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-semibold sm:text-left mb-3' >
                                Quick Links
                            </h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map((data, index) => (
                                        <li key={index}>
                                            <a
                                                href={data.link}
                                                className='inline-block hover:scale-105 duration-200'
                                            >
                                                {data.title}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        {/* Company Address Section */}
                        <div className='py-8 px-4 col-span-2 sm:col-auto ' >
                            <h1 className='text-xl font-semibold sm:text-left mb-3' >
                                Address
                            </h1>
                            <div>
                                <p className='mb-3 ' >123 Main Street, Mumbai, India</p>
                                <p className=''>Phone: <a href="tel: +919137460802" className=''>+91 9137460802</a></p>
                                <p>Email: <a href="mailto:sufiyankhann2027@gmail.com">sufiyankhann2027@gmail.com</a></p>

                                {/* Social Links */}
                                <div className='space-x-3 mt-6' >
                                    <a href="https://www.facebook.com/profile.php?id=100012829745857"
                                        target='_blank' rel='noopener noreferrer'>
                                        <FaFacebook className='text-3xl inline-block hover:scale-105 duration-200' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/sufiyan-khan-b951411a4/"
                                        target='_blank' rel='noopener noreferrer'>
                                        <FaLinkedin className='text-3xl inline-block hover:scale-105 duration-200' />
                                    </a>
                                    <a href="https://www.instagram.com/sufiyan_0910/"
                                        target='_blank' rel='noopener noreferrer'>
                                        <FaInstagram className='text-3xl inline-block hover:scale-105 duration-200' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
