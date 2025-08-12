import {useLoaderData} from 'react-router-dom';
import JobForm from '../components/JobForm';
import { toast } from 'react-toastify';
const EditJobPage = () => {
  const job = useLoaderData ();

  return (
    <section className="bg-indigo-50 min-h-screen w-full mx-auto">
      <div className="contianer w-full mx-auto flex items-center justify-center px-10 py-16">
        <JobForm
          submitButtonTitle="Edit Job"
          job={job}
          submitFunction={editJob}
        />
      </div>
    </section>
  );
};

const editJob = async job => {
  const result = await fetch (`/api/jobs/${job.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify (job),
  });

  if (result.ok) {
    toast.success ('Job Edited Successfully');
  } else {
    toast.error ('Something Went Wrong, Please Try Again Later');
  }

  return;
};

export default EditJobPage;
