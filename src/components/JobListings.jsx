import React from 'react';
import JobCard from './JobCard';
const JobListings = () => {
  return (
    <section id="job-listings" className="w-full bg-indigo-50">
      <div className="container mx-auto py-4">
        <div className="flex flex-col items-center justify-center space-y-5 px-5">
          <div className="text-center text-2xl text-indigo-500 font-bold">
            Browse Jobs
          </div>
            <JobCard rule='Senior React Developer' type='Full-Time'/>
          <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-x-3 lg:grid-cols-3" />
        </div>
      </div>
    </section>
  );
};

export default JobListings;
