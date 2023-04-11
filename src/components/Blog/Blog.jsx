import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto px-4 md:px-20 py-3 mt-24'>
            <div className="border border-indigo-500 p-4 sm:p-6 md:p-8">
                <div className='mb-5'>
                    <div className="text-amber-600 font-bold text-2xl">
                    1. What is useMemo  
                    </div>
                    <div className='text-indigo-500'>
                        Ans: It memoizes the result of a function and returns the cached result if the inputs haven't changed. This can be a game-changer for computationally expensive functions, making your app run smoother and faster. 
                    </div>
                </div>
                <div className='mb-5'>
                    <div className="text-amber-600 font-bold text-2xl">
                    2. When should you use context API?
                    </div>
                    <div className='text-indigo-500'>
                        Ans: Context API is like the sharing economy for data in React - it allows us to share resources between components without having to pass them through the entire component tree. We should Use it when we have data that needs to be accessible by many components, or when we want to share functionality like theme switching or authentication.    
                    </div>
                </div>
                <div className='mb-5'>
                    <div className="text-amber-600 font-bold text-2xl">
                    3. What is a custom hook?
                    </div>
                    <div className='text-indigo-500'>
                        Ans: Custom hooks are the superheroes of React - they encapsulate powerful functionality or logic that can be reused across multiple components. They help keep code clean, modular, and easy to maintain.
                    </div>
                </div>
                <div className='mb-5'>
                    <div className="text-amber-600 font-bold text-2xl">
                    4. What is useRef?
                    </div>
                    <div className='text-indigo-500'>
                        Ans: useRef is a hook in React that I use to create a mutable reference that persists across renders. It's commonly used to access DOM elements in functional components, or to store a value that we need to compare between renders.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;