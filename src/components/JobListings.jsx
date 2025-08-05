import {useState, useEffect} from 'react';
import JobCard from './JobCard';
import Spinner from './Spinner';

const JobListings = ({isHome = false}) => {
  const [jobs, setJobs] = useState ([]);
  const [loading, setLoading] = useState (true);

  useEffect (() => {
    const fetchData = async () => {
      const apiUrl = isHome ? "http://localhost:9000/jobs?_limit=3" : "http://localhost:9000/jobs";
      try {
        const res = await fetch (apiUrl);
        const data = await res.json ();
        setJobs (data);
      } catch (error) {
        console.log ('error fetching data', error);
      } finally {
        setLoading (false);
      }
    };

    fetchData ();
  }, []);

  return (
    <section id="job-listings" className="w-full bg-indigo-50">
      <div className="container mx-auto py-4">
        <div className="flex flex-col items-center justify-center space-y-5 px-5">
          <div className="text-center text-2xl text-indigo-500 font-bold md:text-3xl">
            {isHome ? 'Recent Jobs' : 'Browse Jobs'}
          </div>

          {loading
            ? <Spinner loading={loading} />
            : <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-x-3 lg:grid-cols-3">
                {jobs.map (item => (
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
              </div>}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
