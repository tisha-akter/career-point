import React from 'react';

const Hero = () => {
    return (
        <div className='bg-indigo-50'>
            <div className='container mx-auto px-4 pt-10'>
                <section className="text-gray-600 body-font">
                    <div className="flex md:flex-row flex-col items-center justify-center h-auto md:h-[700px]">
                        <div className="md:w-1/2 md:pr-16 flex items-center justify-center flex-col md:items-start md:text-left mb-16 md:mb-0 text-center h-full">
                            <h1 className="title-font sm:text-6xl text-3xl  mb-4 font-medium text-gray-900">One Step
                                <br className="hidden lg:inline-block" />Closer To Your
                                <br className="hidden lg:inline-block" />
                                <span className='text-indigo-500'>Dream Job</span>
                            </h1>
                            <p className="mb-8 leading-relaxed">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br />  your job application from start to finish.</p>

                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</button>

                        </div>
                        <div className="flex items-end md:w-1/2 h-full">
                            <img className="object-cover object-center rounded"
                                alt="image" src="https://i.ibb.co/8NWzBr7/P3-OLGJ1-copy-1.png" />
                        </div>
                    </div>
                </section>



            </div>
        </div>
    );
};

export default Hero;