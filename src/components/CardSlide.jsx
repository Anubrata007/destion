import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RedLogo from "../assets/logo.svg";
import CardImage from "../assets/card-img1.webp";

const CardSlide = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='p-4'>
            <div className='mt-15'>
                <Slider {...settings}>

                    {/* Card 1 */}
                    <div className="rounded-lg overflow-hidden h-[450px] hover:bg-stone-50 border shadow-lg">
                        <div className="flex flex-col justify-between h-full p-6">
                            {/* Logo */}
                            <div className="mb-4">
                                <img src={RedLogo} alt="Logo" className="h-12 w-12" />
                            </div>

                            <div>
                                {/* Title */}
                                <h2 className="text-2xl font-semibold mb-4">
                                    From monolith to micro-frontend solution
                                </h2>
                                {/* Metrics */}
                                <div className="flex gap-4 mb-4">
                                    <div className="flex flex-col border rounded-lg p-2">
                                        <span className="text-base font-bold">5 Second Build</span>
                                        <span className="text-xs text-gray-500">Down from 25 minutes</span>
                                    </div>
                                    <div className="flex flex-col border rounded-lg p-2">
                                        <span className="text-base font-bold">40 Hours Saved</span>
                                        <span className="text-xs text-gray-500">in dev time per week</span>
                                    </div>
                                </div>
                                {/* Link */}
                                <a href="#" className="text-gray-700 inline-flex items-center">
                                    Read the customer story
                                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* Card 2 */}
                    <div className="rounded-lg overflow-hidden h-[450px] hover:bg-stone-50 border shadow-lg">
                        <div className="flex flex-col justify-between h-full p-6">
                            {/* Image */}
                            <div className="mb-4">
                                <img src={CardImage} alt="card-image" className="h-40 w-50 border shadow-md" />
                            </div>

                            <div>
                                {/* Title */}
                                <h1 className='text-2xl font-semibold mb-4'>
                                    AI Chatbot Template
                                </h1>
                                <h2 className="text-xl font-medium mb-4">
                                    A full-featured, hackable <br /> Next.js AI chatbot built by Vercel
                                </h2>
                                {/* Link */}
                                <a href="#" className="text-gray-700 inline-flex items-center">
                                    Read the customer story
                                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 same as 1 */}
                    <div className="bg-white rounded-lg overflow-hidden h-[450px] hover:bg-stone-50 border shadow-lg">
                        <div className="flex flex-col justify-between h-full p-6">
                            {/* Logo */}
                            <div className="mb-4">
                                <p className='font-extrabold text-2xl text-blue-600'>STRIPE</p>
                            </div>

                            <div>
                                {/* Title */}
                                <h2 className="text-2xl font-semibold mb-4">
                                    Architecting a live look at reliability:<br />Stripe's viral Black Friday site
                                </h2>
                                {/* Metrics */}
                                <div className="flex gap-4 mb-4">
                                    <div className="flex flex-col border rounded-lg p-2">
                                        <span className="text-base font-bold">100%</span>
                                        <span className='text-xs text-gray-600'>Uptime</span>
                                    </div>
                                    <div className="flex flex-col border rounded-lg p-2">
                                        <span className="text-base font-bold">17m+</span>
                                        <span className="text-xs text-gray-600">Edge requests at launch</span>
                                    </div>
                                </div>
                                {/* Link */}
                                <a href="#" className="text-gray-700 inline-flex items-center" >
                                    Read the customer story
                                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 same as 3 */}
                    <div className="bg-white rounded-lg overflow-hidden h-[450px] hover:bg-stone-50 border shadow-lg">
                        <div className="flex flex-col justify-between h-full p-6">
                            {/* Logo */}
                            <div className="mb-4">
                                <p className='font-extrabold text-2xl tracking-widest'>SONOS</p>
                            </div>

                            <div>
                                {/* Title */}
                                <h2 className="text-2xl font-semibold mb-4">
                                    Developing at the speed of sound:<br /> How Sonos amplified their DevEx
                                </h2>
                                {/* Metrics */}
                                <div className="flex gap-4 mb-4">
                                    <div className="flex flex-col border rounded-lg p-2">
                                        <span className="text-base font-bold">75%<span className="text-sm text-gray-600 pl-1">faster</span></span>
                                        <span className='text-xs text-gray-600'>Build time</span>
                                    </div>
                                    <div className="flex flex-col border rounded-lg p-2">
                                        <span className="text-base font-bold">10%<span className="text-sm text-gray-600 pl-1">better</span></span>
                                        <span className="text-xs text-gray-600">Performance scores</span>
                                    </div>
                                </div>
                                {/* Link */}
                                <a href="#" className="text-gray-700 inline-flex items-center" >
                                    Read the customer story
                                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* Card 5 same as 2 */}
                    <div className="rounded-lg overflow-hidden h-[450px] hover:bg-stone-50 border shadow-lg">
                        <div className="flex flex-col justify-between h-full p-6">
                            {/* Image */}
                            <div className="mb-4">
                                <img src={CardImage} alt="card-image" className="h-40 w-50 border shadow-md" />
                            </div>

                            <div>
                                {/* Title */}
                                <h1 className='text-2xl font-semibold mb-4'>
                                    Commerce Template
                                </h1>
                                <h2 className="text-xl font-medium mb-4">
                                    Starter kit for high-performance commerce with Shopify
                                </h2>
                                {/* Link */}
                                <a href="#" className="text-gray-700 inline-flex items-center">
                                    Deploy this template
                                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div >
        </div >
    )
}

export default CardSlide