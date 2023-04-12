import React from 'react';
import Hero from './Hero/Hero';
import JobCategory from './JobCategory/JobCategory';
import FeaturedJobs from './FeaturedJobs/FeaturedJobs';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;