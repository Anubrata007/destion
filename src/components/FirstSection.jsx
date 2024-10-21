import React from 'react'

const FirstSection = () => {
    return (
        <section className="py-14">
            <div className="container mx-auto text-center">
                <div className='hidden lg:flex-row sm:flex sm:flex-col justify-center items-center gap-4'>
                    <p className='text-gray-600'><span className='text-2xl font-bold text-black pr-3'>Next.js</span> Full speaker lineup and schedule out now. Join us on Oct 24 is</p>
                    <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full">Get Tickets</button>
                </div>
                <h1 className=" text-3xl lg:text-7xl sm:text-6xl font-extrabold text-gray-800 pt-12">The web framework <br /> for when it matters</h1>
                <p className="mt-4 text-xl lg:text-2xl text-gray-600">Peerless performance, efficiency,<br className='sm:hidden' /> and developer experience.<br /><span className='hidden sm:block'>Next.js is trusted by some of the biggest names on the web.</span></p>
                <div className="mt-8 flex space-x-4 justify-center">
                    <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md"><span className='hidden sm:inline'>Learn About</span> Managed Next.js</button>
                    <button className=" text-gray-800 font-bold py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100 ">Contact Sales</button>
                </div>
            </div>
        </section>
    )
}

export default FirstSection