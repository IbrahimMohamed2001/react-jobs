import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa';
import React from 'react';

const NotFoundPage = () => {
  return (
    <section className="w-full min-h-screen mx-auto bg-slate-100">
      <div className="contrainer mx-auto w-full flex items-center justify-center py-28">
        <div className="flex flex-col rounded-md bg-white items-center justify-center
                        px-10 py-5 drop-shadow-md space-y-3 duration-300 transition-all
                        hover:shadow-md hover:shadow-indigo-300 hover:-translate-y-2">
          <FaExclamationTriangle className="text-red-600 text-5xl sm:text-6xl lg:text-9xl" />
          <div className="text-slate-800 text-4xl font-bold sm:text-5xl lg:text-6xl">
            404 Not Found
          </div>
          <div className="text-gray-400 text-sm font-bold pb-3 relative -top-2 md:text-md">
            Looks like this page does not exist
          </div>
          <Link
            to="/"
            className="text-white bg-indigo-600 rounded-md px-3 py-1 transition-all duration-300 hover:bg-indigo-800"
          >
            <span className='flex items-center justify-center'>
              <FaArrowLeft className="text-white inline mr-2"/>
              Go Home
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
