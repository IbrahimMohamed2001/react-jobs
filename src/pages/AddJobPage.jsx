import React from 'react';
import JobForm from '../components/JobForm';
import {toast} from 'react-toastify';
const AddJobPage = () => {
  return (
    <section className="bg-indigo-50 min-h-screen w-full mx-auto">
      <div className="contianer w-full mx-auto flex items-center justify-center px-10 py-16">
        <JobForm submitFunction={addJob} />
      </div>
    </section>
  );
};

const addJob = async job => {
  const result = await fetch ('/api/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify (job),
  });

  if (result.ok) {
    toast.success ('Job Added Successfully');
  } else {
    toast.error ('Something Went Wrong, Please Try Again Later');
  }

  return;
};

export default AddJobPage;
