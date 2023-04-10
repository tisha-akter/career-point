import React, { useState, useEffect } from 'react';

const JobCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('JobCategory.json');
                const data = await response.json();
                setCategories(data.categories);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCategories();
    }, []);

    return (
        <div className='container mx-auto px-4 py-3'>
            <div className="h-full flex flex-col justify-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-2 text-center mt-20">Job Category List</h2>
                <p className="text-gray-600 text-lg mb-8 text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="flex flex-wrap">
                    {categories.map((category) => (
                        <div key={category.id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-4 px-2">
                            <div className="bg-indigo-50 rounded-lg overflow-hidden px-4 py-4">
                                <div className="p-4">
                                    <img src={category.logo} className="bg-indigo-100 rounded-md w-12 h-12 mr-4 mb-5 p-2" alt={category.category_name} />
                                    <h3 className="text-xl font-semibold mb-3">{category.category_name}</h3>
                                    <p className="text-gray-600">{category.jobs_available}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobCategory;




