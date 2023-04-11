import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'

import AppliedJobs from './components/AppliedJobs'
import Statistics from './components/Statistics'
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs'
import Blog from './components/Blog/Blog'
import Error from './Error'
import JobDetails from './components/JobDetails/JobDetails'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
      path: '/',
      element: <Home></Home>
    },
    {
      path: 'statistics',
      element: <Statistics></Statistics>
    },
    {
      path: 'applied-jobs',
      element: <AppliedJobs></AppliedJobs>
    },
    {
      path: 'blog',
      element: <Blog></Blog>
    },
    {
      path: 'featured-jobs',
      element: <FeaturedJobs></FeaturedJobs>,
      // loader: () => fetch('FeaturedJobs.json'),
    },
    {
      path: 'job-details/:jobId',
      element: <JobDetails></JobDetails>,
      loader: async ({ params }) => fetch(`FeaturedJobs.json`)
    },

    {
      path: '*',
      element: <Error></Error>
    }
  ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
