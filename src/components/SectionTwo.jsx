import React from 'react'
import CardSlide from './CardSlide';
import CardImage from "../assets/card-img1.webp";
import RdLogo from "../assets/logo.svg";

const SectionTwo = () => {

    return (
        <section className="py-5">
            <div className="max-w-7xl mx-auto px-4">

                {/* Slider */}
                <span className='lg:hidden'>
                    <CardSlide />
                </span>


                <div className="hidden lg:grid grid-flow-col gap-4">

                    <div className="bg-white p-8 row-span-2 rounded-lg shadow-md border flex flex-col justify-between">
                        <img src={CardImage} alt="AI Chatbot Template" className="w-36 h-24 shadow-md" />
                        <div className='flex flex-col gap-2'>
                            <h3 className="text-2xl font-bold mt-4">Commerce Template</h3>
                            <p className="mt-2 font-semibold text-base text-gray-600">Stater kit for high-performance commerce with Shopify</p>
                        </div>
                    </div>

                    <div className="bg-white row-span-1 p-6 rounded-lg shadow-md border flex flex-col gap-3">
                        <h3 className="text-4xl font-extrabold mt-4 text-purple-600 tracking-tighter">stripe</h3>
                        <p className="text-gray-600 mt-2">Architecting a live look at reliability: Stripe viral Black Friday site.</p>
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
                    </div>

                    <div className="bg-white row-span-3 p-6 rounded-lg shadow-md border flex flex-col justify-between">
                        <div className="mb-4">
                            <img src={RdLogo} alt="Logo" className="h-12 w-12" />
                        </div>

                        <div>
                            {/* Title */}
                            <h2 className="text-3xl font-bold mb-4">
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
                        </div>
                    </div>

                    <div className="bg-white row-span-1 p-6 rounded-lg shadow-md border">
                        {/* Logo */}
                        <div className="mb-4">
                            <p className='font-extrabold text-3xl tracking-widest'>SONOS</p>
                        </div>

                        <div>
                            {/* Title */}
                            <p className="font-semibold text-base mb-4 text-gray-600">
                                Developing at the speed of sound: How Sonos amplified their DevEx
                            </p>
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
                        </div>
                    </div>

                    <div className="bg-white row-span-2 p-8 rounded-lg shadow-md border flex flex-col justify-between">
                        <img src={CardImage} alt="AI Chatbot Template" className="w-36 h-24 shadow-md" />
                        <div className='flex flex-col gap-2'>
                            <h3 className="text-2xl font-bold mt-4">Commerce Template</h3>
                            <p className="mt-2 font-semibold text-base text-gray-600">Stater kit for high-performance commerce with Shopify</p>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default SectionTwo