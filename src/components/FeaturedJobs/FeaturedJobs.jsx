import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturedJobs = () => {
    const [jobsData, setJobsData] = useState([]);
    const [showAllJobs, setShowAllJobs] = useState(false);

    useEffect(() => {
        fetch('FeaturedJobs.json')
            .then(response => response.json())
            .then(data => setJobsData(data))
            .catch(error => console.error(error));
    }, []);

    const handleSeeAllJobs = () => {
        setShowAllJobs(true);
    }

    const filteredJobs = showAllJobs ? jobsData : jobsData.slice(0, 4);

    return (
        <div className='container mx-auto px-4 py-3'>
            <div className='grid md:grid-cols-2 gap-4'>
                {filteredJobs.map(job => (
                    <div key={job.id} className='border rounded-lg overflow-hidden mx-2 p-8'>
                        <img src={job.company_logo} className='mb-8' alt='Logo' />
                        <h3 className='text-lg font-bold mb-2'>{job.job_title.tittle}</h3>
                        <p className='text-gray-600 mb-2'>{job.company_name}</p>
                        <div className=' flex gap-4 '>
                            <button className='border border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 px-2 py-0  rounded mr-2'>
                                <p>{job.job_type}</p>
                            </button>
                            <button className='border border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 px-2 py-0  rounded mr-2'>
                                <p>{job.employment_type}</p>
                            </button>
                        </div>
                        <div className=' py-2  flex gap-8 mb-4'>

                            <p className='text-sm text-gray-600'>
                                <img src={job.location.icon} className='inline-block w-4 h-4 mr-2' alt='Address Icon' />
                                {job.location.address}
                            </p>

                            <p className='text-sm text-gray-600'>
                                <img src={job.salary.icon} className='inline-block w-4 h-4 mr-2' alt='Salary Icon' />
                                Salary: {job.salary.range}
                            </p>
                        </div>
                        
                        <Link to={`/job-details/${job.id}`}>
                            <button type="button" className="text-white bg-indigo-500 hover:bg-indigo-700 rounded-lg py-2 px-4 font-semibold focus:outline-none focus:shadow-outline sm:mb-0">View Details</button>
                        </Link>

                    </div>
                ))}
            </div>
            {!showAllJobs && (
                <div className='flex justify-center items-center mt-5'>
                    <button type="button" className="text-white bg-indigo-500 hover:bg-indigo-700 rounded-lg py-2 px-4 font-semibold  focus:outline-none focus:shadow-outline sm:mb-0" onClick={handleSeeAllJobs}>See all Jobs</button>
                </div>
            )}
        </div>

    );
};

export default FeaturedJobs;


