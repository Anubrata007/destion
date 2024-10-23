import React from 'react'
import CardSlide from './CardSlide';
import CardImage from "../assets/card-img1.webp";
import RdLogo from "../assets/logo.svg";

const SectionTwo = () => {

    return (
        <section className="py-10">
            <div className="lg:container mx-auto px-2">

                {/* Slider */}
                <span className='lg:hidden'>
                    <CardSlide />
                </span>

                <div className="hidden lg:grid grid-flow-col max-w-[1280px] mx-auto h-[550px] justify-center gap-4"
                    style={{ gridTemplateColumns: "1fr 1.1fr 1fr" }}>

                    {/* Grid item 1 */}
                    <div className="bg-white p-8 row-span-2 rounded-lg shadow-md border flex flex-col justify-between min-h-[300px]">
                        <img src={CardImage} alt="AI Chatbot Template" className="w-36 h-24 shadow-md" />
                        <div className='flex flex-col gap-2'>
                            <h3 className="text-2xl font-bold mt-4">Commerce Template</h3>
                            <p className="mt-2 font-semibold text-base text-gray-600">Stater kit for high-performance commerce with Shopify</p>
                        </div>
                    </div>

                    {/* Grid item 2 */}
                    <div className="bg-white row-span-1 p-6 rounded-lg shadow-md border flex flex-col gap-3 group relative overflow-hidden min-h-[250px]">
                        {/* Title */}
                        <h3 className="text-4xl font-extrabold mt-4 text-purple-600 tracking-tighter transform group-hover:-translate-y-4 transition-all duration-300">
                            stripe
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 font-semibold text-base mt-2 transform group-hover:-translate-y-4 transition-all duration-300">
                            Architecting a live look at reliability: Stripe viral Black Friday site.
                        </p>

                        {/* Hidden Stats Section */}
                        <div className="flex gap-4 mb-4 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            <div className="flex flex-col border rounded-lg p-2">
                                <span className="text-base font-bold">100%</span>
                                <span className="text-xs text-gray-600">Uptime</span>
                            </div>
                            <div className="flex flex-col border rounded-lg p-2">
                                <span className="text-base font-bold">17m+</span>
                                <span className="text-xs text-gray-600">Edge requests at launch</span>
                            </div>
                        </div>
                    </div>


                    {/* Grid item 3 */}
                    <div className="bg-white row-span-3 p-6 rounded-lg shadow-md border flex flex-col justify-between min-h-[400px] group relative overflow-hidden">
                        {/* Logo Section */}
                        <div className="mb-4">
                            <img src={RdLogo} alt="Logo" className="h-12 w-12" />
                        </div>

                        {/* Main Content */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 transform group-hover:-translate-y-8 transition-all duration-300">
                                From monolith to micro-frontend solution
                            </h2>

                            {/* Hidden Stats Section */}
                            <div className="flex gap-4 mb-4 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
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

                    {/* Grid item 4 */}
                    <div className="bg-white row-span-1 p-6 rounded-lg shadow-md border min-h-[250px] group relative overflow-hidden">
                        {/* SONOS Title */}
                        <div className="mb-4">
                            <p className="font-extrabold text-3xl tracking-widest transform group-hover:-translate-y-4 transition-all duration-300">
                                SONOS
                            </p>
                        </div>

                        {/* Main Content */}
                        <div>
                            <p className="font-semibold text-base mb-4 text-gray-600 transform group-hover:-translate-y-4 transition-all duration-300">
                                Developing at the speed of sound: How Sonos amplified their DevEx
                            </p>

                            {/* Hidden Stats Section */}
                            <div className="flex gap-4 mb-4 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                <div className="flex flex-col border rounded-lg p-2">
                                    <span className="text-base font-bold">75%<span className="text-sm text-gray-600 pl-1">faster</span></span>
                                    <span className="text-xs text-gray-600">Build times</span>
                                </div>
                                <div className="flex flex-col border rounded-lg p-2">
                                    <span className="text-base font-bold">10%<span className="text-sm text-gray-600 pl-1">better</span></span>
                                    <span className="text-xs text-gray-600">Performance scores</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Grid item 5 */}
                    <div className="bg-white row-span-2 p-8 rounded-lg shadow-md border flex flex-col justify-between min-h-[300px]">
                        <img src={CardImage} alt="AI Chatbot Template" className="w-36 h-24 shadow-md" />
                        <div className='flex flex-col gap-2'>
                            <h3 className="text-2xl font-bold mt-4">Commerce Template</h3>
                            <p className="mt-2 font-semibold text-base text-gray-600">Stater kit for high-performance commerce with Shopify</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SectionTwo
