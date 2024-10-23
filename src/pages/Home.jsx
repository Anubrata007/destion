import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import SectionTwo from '../components/SectionTwo'
import SectionFour from '../components/SectionFour'

const Home = () => {
    return (
        <>
            <section className="py-14">
                <div className="container mx-auto text-center">
                    <div className='hidden lg:flex-row sm:flex sm:flex-col justify-center items-center gap-4'>
                        <div className='flex gap-4 items-center'>
                            <div className='flex justify-center items-center text-center'>
                                <span className='text-2xl font-bold text-black pr-1'>Next.js</span>
                                <span className='border rounded-sm border-black text-black flex items-center h-4'>
                                    <span className='py-3 px-[2px] text-[10px] font-medium'>CONF24</span>
                                </span>
                            </div>
                            <span className='text-gray-500 font-medium'>Full speaker lineup and schedule out now. Join us on <span className='text-black'>Oct 24</span></span>
                        </div>
                        <button className="flex items-center bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full">
                            Get Tickets
                            <IoIosArrowForward className="ml-1" />
                        </button>
                    </div>
                    <h1 className="text-3xl lg:text-7xl sm:text-6xl font-extrabold pt-12 bg-gradient-to-r from-gray-500 to-black bg-clip-text text-transparent leading-normal">The web framework <br /> for when it matters</h1>
                    <p className="mt-4 text-xl lg:text-2xl text-gray-600">Peerless performance, efficiency,<br className='sm:hidden' /> and developer experience.<br /><span className='hidden sm:block'>Next.js is trusted by some of the biggest names on the web.</span></p>
                    <div className="mt-8 flex space-x-4 justify-center">
                        <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md"><span className='hidden sm:inline'>Learn About</span> Managed Next.js</button>
                        <button className=" text-gray-800 font-bold py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100 ">Contact Sales</button>
                    </div>
                </div>
            </section>

            <SectionTwo />

            <section className='bg-stone-50 border py-3 mt-20 lg:mt-36 mb-28'>
                <div className='container mx-auto flex flex-col lg:flex-row justify-center align-middle text-center items-center ali gap-16 py-9 px-4'>
                    <div className='w-52 flex flex-col gap-1'>
                        <h1 className='font-extrabold text-5xl relative -left-4'>14<span className='text-3xl absolute'>th</span></h1>
                        <span className='font-medium text-2xl text-gray-800 pt-3'>Largest</span>
                        <span className='text-xl text-gray-600'>on GitHub</span>
                    </div>

                    <div className='w-52 flex flex-col gap-1'>
                        <h1 className='font-extrabold text-5xl'>#1</h1>
                        <span className='font-medium text-2xl text-gray-800 pt-3'>React</span>
                        <span className='text-xl text-gray-600'>Framework</span>
                    </div>

                    <div className='w-52 flex flex-col gap-1'>
                        <h1 className='font-extrabold text-5xl'>110,000</h1>
                        <span className='font-medium text-2xl text-gray-800 pt-3'>Stars</span>
                        <span className='text-xl text-gray-600'>on GitHub</span>
                    </div>
                </div>
            </section>

            <SectionFour />
        </>
    )
}

export default Home