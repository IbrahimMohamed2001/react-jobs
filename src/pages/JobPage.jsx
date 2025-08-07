import {useLoaderData} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {FaArrowLeft, FaMapMarker} from 'react-icons/fa';

const JobPage = () => {
  const job = useLoaderData ();

  return (
    <div className="w-full min-h-screen mx-auto bg-indigo-50">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full bg-white px-7 py-3">
          <Link
            to="/jobs"
            className="text-sm text-indigo-600 transition-all duration-300 hover:text-indigo-800"
          >
            <FaArrowLeft className="inline mr-2" /> Back to Job Listings
          </Link>
        </div>

        <div className="px-7 py-5 mx-auto w-full">
          <div className="grid grid-rows-3 ">
            <div class="grid grid-flow-col grid-rows-3 gap-5">
              <div class="col-span-2 bg-white rounded-md px-6 py-3 drop-shadow-md">
                <div className="flex flex-col items-start justify-center space-y-3">
                  <div className="text-sm font-bold text-gray-400">
                    {job.type}
                  </div>
                  <div className="text-md font-bold text-black md:text-xl lg:text-2xl">
                    {job.title}
                  </div>
                  <p className="text-red-700 font-bold text-xs pb-5">
                    <FaMapMarker className="inline text-lg mr-1" />
                    {job.location}
                  </p>
                </div>
              </div>
              <div class="col-span-2 row-span-2 bg-white rounded-md px-6 py-3 drop-shadow-md">
                02
              </div>
              <div class="row-span-3 bg-white rounded-md px-6 py-3 drop-shadow-md">
                03
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const jobLoader = async ({params}) => {
  try {
    const result = await fetch (`/api/jobs/${params.id}`);
    return await result.json ();
  } catch (error) {
    console.log (
      `error occured while fetching data for job ${params.id}, error ${error}`
    );
    return {};
  }
};

export {JobPage as default, jobLoader};
