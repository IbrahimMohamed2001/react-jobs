import {useLoaderData} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {FaArrowLeft, FaMapMarker} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
const JobPage = () => {
  const job = useLoaderData ();
  const navigator = useNavigate ();

  return (
    <div className="w-full mx-auto min-h-screen bg-indigo-50">
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
          <div className="grid grid-cols-1 gap-5 md:grid-flow-col md:grid-cols-3">
            <div className="bg-white rounded-md px-6 py-3 drop-shadow-md transition-all duration-300 hover:shadow-md hover:shadow-indigo-400 hover:-translate-y-1 md:col-span-2">
              <div className="flex flex-col items-start justify-center space-y-3">
                <div className="text-sm font-bold text-gray-400">
                  {job.type}
                </div>
                <div className="text-md font-bold text-black md:text-xl lg:text-2xl">
                  {job.title}
                </div>
                <p className="text-red-700 font-bold text-xs">
                  <FaMapMarker className="inline text-lg mr-1" />
                  {job.location}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-md px-6 py-3 drop-shadow-md transition-all duration-300 hover:shadow-md hover:shadow-indigo-400 hover:-translate-y-1 md:col-span-2">
              <div className="flex flex-col items-start justify-center space-y-3">
                <div className="text-indigo-700 font-bold text-md">
                  Job Description
                </div>
                <div className="text-sm">
                  {job.description}
                </div>
                <hr className="border-1 bg-gray-500 w-full" />
                <div className="text-indigo-700 font-bold text-md">
                  Salary
                </div>
                <div className="text-sm">
                  {job.salary} / Year
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md px-3 py-3 drop-shadow-md transition-all duration-300 hover:shadow-md hover:shadow-indigo-400 hover:-translate-y-1 md:row-span-2">
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

                <div className="text-indigo-700 font-bold text-md">
                  Contacts
                </div>

                <div className="w-full">
                  <div className="text-md md:text-sm pb-1">Email</div>
                  <div className="bg-indigo-200 rounded-sm font-bold text-xs w-full px-2 py-2">
                    {job.company.contactEmail}
                  </div>
                </div>

                <div className="w-full">
                  <div className="text-md md:text-sm pb-1">Phone</div>
                  <div className="bg-indigo-200 rounded-sm font-bold text-xs w-full px-2 py-2">
                    {job.company.contactPhone}
                  </div>
                </div>
                <div />
              </div>
            </div>
          </div>
        </div>

        {/* Adding delete and edit buttons! */}
        <div className="flex flex-row items-center w-full text-white font-bold justify-center space-x-3 py-3">
          <Link
            to={`/jobs/edit/${job.id}`}
            className="bg-indigo-700 px-6 py-2 rounded-full drop-shadow-md transition-all duration-300 hover:bg-indigo-500 hover:-translate-y-0.5"
          >
            Edit Job
          </Link>

          <button
            className="bg-red-600 px-6 py-2 rounded-full drop-shadow-md transition-all duration-300 hover:bg-red-500 hover:-translate-y-0.5"
            onClick={async () => {
              const confirm = window.confirm (
                'Are you sure you want to delete this job?'
              );
              if (confirm) {
                const result = await fetch (`/api/jobs/${job.id}`, {
                  method: 'DELETE',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                });
                if (result.ok) {
                  toast.success ('Job Deleted Successfully');
                } else {
                  toast.error ('Something Went Wrong, Please Try Again Later');
                }
                return navigator ('/jobs');
              } else {
                return;
              }
            }}
          >
            Delete Job
          </button>
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
