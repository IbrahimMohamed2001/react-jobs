import {useLoaderData} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const JobPage = () => {
  const job = useLoaderData();

  return <div className="w-full min-h-screen mx-auto bg-indigo-50">
    <div className="flex flex-col items-center justify-center">
      <div className="w-full bg-white px-7 py-3">
        <Link to="/jobs" className="text-sm text-indigo-600 transition-all duration-300 hover:text-indigo-800">
          <FaArrowLeft className="inline mr-2"/> Back to Job Listings
        </Link>
      </div>

      <div className="px-7 py-5 mx-auto w-full">
        {job.title}
      </div>
    </div>
  
  </div>;
};

const jobLoader = async({params}) => {
  try {
    const result = await fetch(`/api/jobs/${params.id}`);
    return await result.json();
  } catch (error) {
    console.log(`error occured while fetching data for job ${params.id}, error ${error}`);
    return {};
  }
}

export { JobPage as default, jobLoader };
