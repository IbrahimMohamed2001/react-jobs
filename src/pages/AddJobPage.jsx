import React from 'react';
import JobForm from '../components/JobForm';

const AddJobPage = () => {
  return (
    <section className="bg-indigo-50 min-h-screen w-full mx-auto">
      <div className="contianer w-full mx-auto flex items-center justify-center px-10 py-16">
        <JobForm />
      </div>
    </section>
  );
};

export default AddJobPage;
