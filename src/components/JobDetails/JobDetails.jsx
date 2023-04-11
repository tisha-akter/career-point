import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const { jobId } = useParams();
    const allJobs = useLoaderData();
    const jobInfo = allJobs.filter(job => job.id == jobId );
     
    return (
        <div className=''>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap ">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <p className='mb-4'><span className='font-bold'>Job Description:</span> {jobInfo[0].job_description}</p>
                        <p className='mb-4'><span className='font-bold'>Job Responsibility:</span> {jobInfo[0].job_responsibilities}</p>
                        <p className='mb-4'><span className='font-bold'>Educational Requirements: </span>{jobInfo[0].educational_requirements}</p>
                        <p className='mb-4'><span className='font-bold'>Experiences: </span>{jobInfo[0].experience_requirements}</p>

                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-indigo-50 rounded-md p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h4 className='font-bold text-xl mb-3'>Job Details</h4>
                        <hr className='mb-3' />

                        <p className='mb-3'><img src={jobInfo[0].salary.icon} alt="" className='inline-block w-4 h-4 mr-2' /> <span>Salary :</span>{jobInfo[0].salary.range}</p>
                        <p className='mb-5'><img src={jobInfo[0].job_title.icon} alt="" className='inline-block w-4 h-4 mr-2' /> <span>Job Title :</span>{jobInfo[0].job_title.tittle}</p>

                        <h4 className='font-bold text-xl mb-3'>Contact Information</h4>
                        <hr className='mb-3' />

                        <p className='mb-3'><img src={jobInfo[0].contact_information.phone.icon} alt="" className='inline-block w-4 h-4 mr-2' /> <span>Phone :</span>{jobInfo[0].contact_information.phone.number}</p>
                        <p className='mb-3'><img src={jobInfo[0].contact_information.email.icon} alt="" className='inline-block w-4 h-4 mr-2' /> <span>Email :</span>{jobInfo[0].contact_information.email.address}</p>
                        <p className='mb-3'><img src={jobInfo[0].location.icon} alt="" className='inline-block w-4 h-4 mr-2' /> <span>Address :</span>{jobInfo[0].location.address}</p>

                    </div>
                    <div className="flex items-center justify-center md:items-end md:justify-end   w-full mt-5">
                        <button className="text-white bg-indigo-500 border-0 py-2 px-10 md:px-40 focus:outline-none hover:bg-indigo-600 rounded text-lg md:w-auto">
                            Apply Now
                        </button>
                    </div>
                </div>
            </section>



        </div>
    );
};

export default JobDetails;