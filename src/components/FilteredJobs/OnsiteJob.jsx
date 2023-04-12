import React from 'react';

const OnsiteJob = ({ job }) => {
    return (
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left" key={job?.id}>
                                <div className='w-48 h-48 border items-center'>
                                    <img alt="team" className="flex-shrink-0 rounded-lg items-center pt-16 scroll-px-4 pl-5 sm:mb-0 mb-4" src={job?.company_logo}/>
                                </div>
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-gray-900 mb-3"> {job?.tittle} </h2>
                                    <h3 className="text-gray-500 mb-4">{job?.company_name}</h3>

                                    <div className='flex justify-between'>
                                        <div className='flex flex-wrap gap-4'>
                                            <button className='border border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 px-2 py-0 rounded mr-2'>
                                                <p>{job?.job_type}</p>
                                            </button>
                                            <button className='border border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 px-2 py-0 rounded mr-2'>
                                                <p>{job?.employment_type}</p>
                                            </button>
                                        </div>
                                        <div className=''>
                                            <button type="button" className="text-white bg-indigo-500 hover:bg-indigo-700 rounded-lg py-2 px-4 font-semibold focus:outline-none focus:shadow-outline ml-auto">View Details</button>
                                        </div>
                                    </div>

                                    <div className='py-2 flex gap-8 mb-4 mt-3'>
                                        <p className='text-sm text-gray-600'>
                                            <img src={job?.location?.icon} className='inline-block w-4 h-4 mr-2' alt='Address Icon' />
                                            {job?.location?.address}
                                        </p>
                                        <p className='text-sm text-gray-600'>
                                            <img src={job?.salary.icon} className='inline-block w-4 h-4 mr-2' alt='Salary Icon' />
                                            {job?.salary.range}
                                        </p>
                                    </div>

                                </div>
                            </div>
    );
};

export default OnsiteJob;