import React, {useState} from 'react';
import {FaMapMarker} from 'react-icons/fa';

const JobCard = ({
  rule = 'Senior React Developer',
  type = 'Full-Time',
  description = 'Some thing',
  salary = '$70 - $80 K/Year',
  location = 'Boston, MA',
  href = '#',
}) => {
  const [showFullDescription, setShowFullDescription] = useState (false);

  let cutDescription = description;
  if (!showFullDescription) {
    cutDescription = description.substring (0, 97) + '...';
  }

  return (
    <div className="flex flex-col items-start px-5 
                            justify-center rounded-md 
                            bg-white drop-shadow-md py-3 
                            space-y-3 transition-all 
                            duration-300 hover:bg-slate-50 
                            hover:shadow-indigo-300 
                            hover:shadow-lg hover:-translate-y-1">
      <div className="flex flex-col w-full space-y-0.5">
        <h4 className="text-gray-400 font-bold text-sm">{type}</h4>

        <h2 className="text-slate-900 text-2xl font-bold">
          {rule}
        </h2>
      </div>

      <p className="text-slate-900 text-xs font-semibold">
        {cutDescription}
      </p>

      <button
        className="text-indigo-500 hover:text-indigo-600 text-sm"
        onClick={() => setShowFullDescription ((prevState) => ! prevState)}
      >
        {showFullDescription ? 'Less' : 'More'}
      </button>

      <div className="w-full flex flex-col space-y-1">
        <p className="text-indigo-500 text-xs font-bold pt-1">
          {salary} / Year
        </p>

        <hr className="border-1 bg-gray-500 w-full" />
      </div>

      <div className="flex flex-col w-full space-y-3 pb-3">
        <p className="text-red-700 font-bold text-xs">
          <FaMapMarker className='inline text-lg mr-1'/>
          {location}
        </p>

        <a
          href={href}
          className="text-white bg-indigo-600 w-full text-center
                      rounded-md py-1 transition-all duration-300 
                      hover:bg-indigo-500"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default JobCard;
