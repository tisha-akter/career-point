import React, { useEffect, useState } from 'react';

const AppliedJobs = () => {
    const [jobType, setJobType] = useState("");
    const [jobsData, setJobsData] = useState([]);
    const appliedJobsLocal = JSON.parse(localStorage.getItem('appliedJobs')) || [];

    // appliedJobs.map(job => console.log(job.title));

    useEffect(() => {
        fetch('FeaturedJobs.json')
            .then(response => response.json())
            .then(data => setJobsData(data))
            .catch(error => console.error(error));
    }, []);

    // applied jobs 
    const appliedJobsList = [];

    // looping through localStorage data and finding matched data 
    for (const appliedJobLocal of appliedJobsLocal) {
        const appliedJob = jobsData.find(job => appliedJobLocal.id == job.id);
        appliedJobsList.push(appliedJob);
    }

    const onsiteJobsList = appliedJobsList.filter(job => job?.job_type == "Onsite");
    const RemoteJobsList = appliedJobsList.filter(job => job?.job_type == "Remote");

    console.log(appliedJobsList);
    console.log("onsite", onsiteJobsList);
    console.log("remote", RemoteJobsList);


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
                        <button onClick={() => setJobType("Remote")} type="button" className="border border-indigo-500 hover:bg-indigo-500 rounded-lg py-2 px-4 font-semibold ml-2 focus:outline-none focus:shadow-outline mb-4 sm:mb-0">Remote</button>
                        <button onClick={() => setJobType("Onsite")} type="button" className="border border-indigo-500 hover:text-white text-indigo-500 hover:bg-indigo-700 rounded-lg py-2 px-4 font-semibold ml-2 focus:outline-none focus:shadow-outline mb-4 sm:mb-0">Onsite</button>
                    </div>
                </div>

                {/* applied-job-card  */}
                <section className="text-gray-600 body-font">
                    <div className="items-center">
                        <div className="border rounded-md w-4/5 p-4 mx-auto ">
                            {appliedJobsList.map(job => (
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
                            ))}
                        </div>
                        
                    </div>
                </section>
            </div>
        </div>

    );
};

export default AppliedJobs;



