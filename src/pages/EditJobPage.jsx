import {useLoaderData} from 'react-router-dom';
import JobForm from '../components/JobForm';

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

const editJob = () => {
  console.log ('editing the job');
};

export default EditJobPage;
