import React from 'react';

const AddJobPage = () => {
  const fieldClasses =
    'rounded-lg w-full px-4 py-2 border-[1px] border-indigo-100 focus:border-indigo-600 focus:border-2 focus:outline-indigo-600';

  return (
    <section className="bg-indigo-50 min-h-screen w-full mx-auto">
      <div className="contianer w-full mx-auto flex items-center justify-center px-10 py-16">
        <form className="rounded-md bg-white w-full max-w-screen-md px-5 py-2 drop-shadow-md felx flex-col space-y-3">
          <div className="text-3xl font-bold text-center mt-6 mb-3">
            Add Job
          </div>
          <div>
            <label htmlFor="job_type" className="font-bold text-sm mb-1">
              Job Type
            </label>
            <select
              name="jobType"
              id="job_type"
              className={`block ${fieldClasses}`}
            >
              <option value="Full-Time" selected>Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="job_listing_name"
              className="font-bold text-sm mb-1"
            >
              Job Listing Name
            </label>
            <input
              name="jobListingName"
              id="job_listing_name"
              type="text"
              className={`${fieldClasses}`}
              placeholder="eg. Senior React Developer"
            />
          </div>

          <div>
            <label htmlFor="job_description" className="font-bold text-sm mb-1">
              Description
            </label>
            <textarea
              id="job_description"
              name="jobDescription"
              rows="5"
              className={`${fieldClasses}`}
              placeholder="Add any job duties, expectations, requirements, etc"
            />
          </div>
          <div>
            <label htmlFor="job_salary" className="font-bold text-sm mb-1">
              Salary
            </label>
            <select
              name="jobSalary"
              id="job_salary"
              className={`block ${fieldClasses}`}
            >
              <option value="under $50K" selected>under $50K</option>
              <option value="$60K - $70K">$60K - $70K</option>
              <option value="$70K - $80K">$70K - $80K</option>
              <option value="$80K - $90K">$80K - $90K</option>
              <option value="$90K - $100K">$90K - $100K</option>
              <option value="$100K - $110K">$100K - $110K</option>
            </select>
          </div>
          <div>
            <label htmlFor="job_location" className="font-bold text-sm mb-1">
              Location
            </label>
            <input
              name="jobLocation"
              id="job_location"
              type="text"
              className={`${fieldClasses}`}
              placeholder="Company's Location"
            />
          </div>

          <div className="text-xl font-bold py-5">Company Info</div>

          <div>
            <label htmlFor="company_name" className="font-bold text-sm mb-1">
              Company's Name
            </label>
            <input
              name="companyName"
              id="company_name"
              type="text"
              className={`${fieldClasses}`}
              placeholder="Company's Name"
            />
          </div>

          <div>
            <label htmlFor="company_description" className="font-bold text-sm mb-1">
              Description
            </label>
            <textarea
              id="company_description"
              name="companyDescription"
              rows="5"
              className={`${fieldClasses}`}
              placeholder="Add a brief overview about your company, your vision, etc"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddJobPage;
