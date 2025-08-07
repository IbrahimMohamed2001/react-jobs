import {useLoaderData} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {FaArrowLeft, FaMapMarker} from 'react-icons/fa';

const JobPage = () => {
  const job = useLoaderData ();

  return (
    <div className="w-full mx-auto bg-indigo-50">
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
            <div class="grid grid-flow-col grid-cols-3 gap-5">
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
              <div class="col-span-2 bg-white rounded-md px-6 py-3 drop-shadow-md">
                <div className="flex flex-col items-start justify-center space-y-3">
                  <div className="text-indigo-700 font-bold text-md">
                    Job Description
                  </div>
                  <div className="text-sm">
                    {job.description}
                  </div>
                  <div className="text-indigo-700 font-bold text-md pt-5">
                    Salary
                  </div>
                  <div className="text-sm">
                    {job.salary} / Year
                  </div>
                </div>
              </div>
              <div class="row-span-2 bg-white rounded-md px-3 py-3 drop-shadow-md">
                <div className="flex flex-col items-start justify-center space-y-3">
                  <div className="text-indigo-700 font-bold text-md">
                    Company Info
                  </div>

                  <div className="text-md md:text-lg">
                    {job.company.name}
                  </div>

                  <div className="text-xs md:text-sm">
                    {job.company.description}
                  </div>

                  <hr className="border-1 bg-gray-500 w-full" />

                  <div className="text-md">Contact Email:</div>

                  <div className="bg-indigo-200 rounded-sm font-bold text-xs w-full px-2 py-2">
                    {job.company.contactEmail}
                  </div>
                  <div className="text-md">Contact Phone:</div>
                  <div className="bg-indigo-200 rounded-sm font-bold text-xs w-full px-2 py-2">
                    {job.company.contactPhone}
                  </div>
                  <div></div>
                </div>
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
