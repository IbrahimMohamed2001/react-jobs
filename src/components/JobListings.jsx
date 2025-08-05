import React from 'react';
import JobCard from './JobCard';
import jobs from '../jobs.json';

const JobListings = () => {
  const recentJobs = jobs.slice(0, 3);
  return (
    <section id="job-listings" className="w-full bg-indigo-50">
      <div className="container mx-auto py-4">
        <div className="flex flex-col items-center justify-center space-y-5 px-5">
          <div className="text-center text-2xl text-indigo-500 font-bold">
            Browse Jobs
          </div>

          <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-x-3 lg:grid-cols-3">
            {recentJobs.map (item => (
              <JobCard
                key={item.id}
                title={item.title}
                type={item.type}
                description={item.description}
                location={item.location}
                salary={item.salary}
                href={`/job/${item.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobListings;
