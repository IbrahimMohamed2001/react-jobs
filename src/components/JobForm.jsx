import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const JobForm = ({
  submitButtonTitle = 'Add Job',
  job,
  submitFunction = () => {},
}) => {
  const navigate = useNavigate ();
  const fieldClasses =
    'rounded-lg w-full px-4 py-2 border-[1px] border-indigo-100 outline-1 outline-indigo-100 transition-all duration-500 ease-in-out invalid:outline-red-500 invalid:border-red-500 invalid:text-red-500 focus:border-indigo-600 focus:outline-indigo-600 focus:invalid:outline-red-500';

  const [jobType, setJobType] = useState (job ? job.type : 'Full-Time');
  const [jobListingName, setJobListingName] = useState (job ? job.title : '');
  const [jobDescription, setJobDescription] = useState (
    job ? job.description : ''
  );
  const [jobSalary, setJobSalary] = useState (job ? job.salary : 'Under $50K');
  const [jobLocation, setJobLocation] = useState (job ? job.location : '');
  const [companyName, setCompanyName] = useState (job ? job.company.name : '');
  const [companyDescription, setCompanyDescription] = useState (
    job ? job.company.description : ''
  );
  const [contactEmail, setContactEmail] = useState (
    job ? job.company.contactEmail : ''
  );
  const [contactPhone, setContactPhone] = useState (
    job ? job.company.contactPhone : ''
  );

  return (
    <form className="rounded-md bg-white w-full max-w-screen-md px-5 py-2 drop-shadow-md felx flex-col space-y-3 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-300">
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
          onChange={e => {
            setJobType (e.target.value);
          }}
          value={jobType}
          className={`block ${fieldClasses}`}
        >
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Remote">Remote</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      <div>
        <label htmlFor="job_listing_name" className="font-bold text-sm mb-1">
          Job Listing Name
        </label>
        <input
          name="jobListingName"
          id="job_listing_name"
          type="text"
          onChange={e => {
            setJobListingName (e.target.value);
          }}
          value={jobListingName}
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
          onChange={e => {
            setJobDescription (e.target.value);
          }}
          value={jobDescription}
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
          onChange={e => {
            setJobSalary (e.target.value);
          }}
          value={jobSalary}
          className={`block ${fieldClasses}`}
        >
          <option value="Under $50K">Under $50K</option>
          <option value="$60K - $70K">$60K - $70K</option>
          <option value="$70K - $80K">$70K - $80K</option>
          <option value="$80K - $90K">$80K - $90K</option>
          <option value="$90K - $100K">$90K - $100K</option>
          <option value="$100K - $110K">$100K - $110K</option>
          <option value="$110K - $120K">$110K - $120K</option>
          <option value="$120K - $130K">$120K - $130K</option>
          <option value="$130K - $140K">$130K - $140K</option>
          <option value="$140K - $150K">$140K - $150K</option>
          <option value="$150K - $160K">$150K - $160K</option>
          <option value="$160K - $170K">$160K - $170K</option>
          <option value="$170K - $180K">$170K - $180K</option>
          <option value="$180K - $190K">$180K - $190K</option>
          <option value="$190K - $200K">$190K - $200K</option>
          <option value="Over $200K">Over $200K`</option>
        </select>
      </div>

      <div>
        <label htmlFor="job_location" className="font-bold text-sm mb-1">
          Location
        </label>
        <input
          name="jobLocation"
          id="job_location"
          onChange={e => {
            setJobLocation (e.target.value);
          }}
          value={jobLocation}
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
          onChange={e => {
            setCompanyName (e.target.value);
          }}
          value={companyName}
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
          onChange={e => {
            setCompanyDescription (e.target.value);
          }}
          rows="5"
          value={companyDescription}
          className={`${fieldClasses}`}
          placeholder="Add a brief overview about your company, your vision, etc"
        />
      </div>

      <div>
        <label htmlFor="contact_email" className="font-bold text-sm mb-1">
          Contact Email
        </label>
        <input
          name="contactEmail"
          id="contact_email"
          onChange={e => {
            setContactEmail (e.target.value);
          }}
          value={contactEmail}
          type="email"
          className={`${fieldClasses}`}
          placeholder="Email address for applicants"
        />
      </div>

      <div>
        <label htmlFor="contact_phone" className="font-bold text-sm mb-1">
          Contact Phone
        </label>
        <input
          name="contactPhone"
          id="contact_phone"
          onChange={e => {
            setContactPhone (e.target.value);
          }}
          value={contactPhone}
          type="tel"
          className={`${fieldClasses}`}
          placeholder="Optional phone for applicants"
        />
      </div>

      <div className="w-full flex flex-row items-center justify-center py-5">
        <button
          className="bg-indigo-500 text-white font-bold py-2 px-6 outline rounded-xl hover:bg-indigo-600 hover:outline-4 hover:outline-offset-2 hover:outline-indigo-600 active:bg-indigo-700"
          type="submit"
          onClick={e => {
            e.preventDefault ();

            const newJob = {
              title: jobListingName,
              type: jobType,
              location: jobLocation,
              salary: jobSalary,
              description: jobDescription,
              company: {
                name: companyName,
                description: companyDescription,
                contactEmail: contactEmail,
                contactPhone: contactPhone,
              },
            };
            submitFunction (newJob);

            return submitButtonTitle === 'Add Job'
              ? navigate ('/jobs')
              : navigate (`/jobs/${job.id}`);
          }}
        >
          {submitButtonTitle}
        </button>
      </div>
    </form>
  );
};

export default JobForm;
