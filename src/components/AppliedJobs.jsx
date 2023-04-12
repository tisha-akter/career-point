import React from 'react';

const AppliedJobs = () => {
    return (
        <div>
            {/* banner  */}
            <div className='bg-indigo-50 text-center'>
                <h3 className='pb-28 py-20 text-2xl font-bold '>Applied Jobs</h3>
            </div>
            
            <div className='container px-5 py-24 mx-auto items-center'>

                {/* onsite or remote  */}
                <div className='flex justify-center items-center'>
                    <div className='mb-5'>
                        <button type="button" className="border border-indigo-500 hover:bg-indigo-500 rounded-lg py-2 px-4 font-semibold ml-2 focus:outline-none focus:shadow-outline mb-4 sm:mb-0">Remote</button>
                        <button type="button" className="border border-indigo-500 hover:text-white text-indigo-500 hover:bg-indigo-700 rounded-lg py-2 px-4 font-semibold ml-2 focus:outline-none focus:shadow-outline mb-4 sm:mb-0">Onsite</button>
                    </div>
                </div>

                {/* applied-job-card  */}
                <section className="text-gray-600 body-font">
                    <div className="items-center">
                        <div className="border rounded-md w-4/5 p-4 mx-auto ">

                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900 mb-3">Holden Caulfield</h2>
                                    <h3 className="text-gray-500 mb-4">UI Developer</h3>

                                    <div className='flex justify-between'>
                                        <div className='flex flex-wrap gap-4'>
                                            <button className='border border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 px-2 py-0 rounded mr-2'>
                                                <p>remote</p>
                                            </button>
                                            <button className='border border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 px-2 py-0 rounded mr-2'>
                                                <p>fulltime</p>
                                            </button>
                                        </div>
                                        <div className=''>
                                            <button type="button" className="text-white bg-indigo-500 hover:bg-indigo-700 rounded-lg py-2 px-4 font-semibold focus:outline-none focus:shadow-outline ml-auto">View Details</button>
                                        </div>
                                    </div>

                                    <div className='py-2 flex gap-8 mb-4 mt-3'>
                                        <p className='text-sm text-gray-600'>
                                            <img src="" className='inline-block w-4 h-4 mr-2' alt='Address Icon' />
                                            Location
                                        </p>
                                        <p className='text-sm text-gray-600'>
                                            <img src="" className='inline-block w-4 h-4 mr-2' alt='Salary Icon' />
                                            Salary:
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>

    );
};

export default AppliedJobs;