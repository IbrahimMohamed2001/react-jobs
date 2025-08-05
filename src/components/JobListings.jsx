import React from 'react';
import JobCard from './JobCard';
import jobs from '../jobs.json';

const JobListings = ({isHome = false}) => {
  const jobListings = isHome ? jobs.slice (0, 3) : jobs;
  return (
    <section id="job-listings" className="w-full bg-indigo-50">
      <div className="container mx-auto py-4">
        <div className="flex flex-col items-center justify-center space-y-5 px-5">
          <div className="text-center text-2xl text-indigo-500 font-bold md:text-3xl">
            {isHome ? 'Recent Jobs' : 'Browse Jobs'}
          </div>

          <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-x-3 lg:grid-cols-3">
            {jobListings.map (item => (
              <JobCard
                key={item.id}
                title={item.title}
                type={item.type}
                description={item.description}
                location={item.location}
                salary={item.salary}
                href={`/jobs/${item.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobListings;
