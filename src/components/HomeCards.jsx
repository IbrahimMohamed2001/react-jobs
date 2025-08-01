import React from 'react'

const HomeCards = () => {
  return (
    <section id='Home Cards'>
      <div className="container mx-auto w-full flex flex-col sm:flex-row items-center justify-center py-10 px-5 space-y-5 sm:space-x-3 sm:space-y-0">
        <div className="rounded-md bg-neutral-200 px-6 py-5 flex flex-col space-y-6 w-full duration-500 transition-all md:w-1/2 hover:bg-slate-100">
          <div className="flex flex-col space-y-1">
            <div className="text-black text-2xl font-bold">For Developers</div>
            <div className="text-black text-sm font-bold">Browse our React Jobs and start your career today</div>
          </div>
          <a href="#" className='text-indigo-50 self-start duration-300 transition-all rounded-md font-bold px-4 py-3 bg-slate-950 hover:bg-slate-700'>Browse Jobs</a>
        </div>

        <div className="rounded-md bg-indigo-200 px-6 py-5 flex flex-col space-y-6 w-full duration-500 transition-all md:w-1/2 hover:bg-indigo-100">
          <div className="flex flex-col space-y-1">
            <div className="text-black text-2xl font-bold">For Employers</div>
          <div className="text-black text-sm font-bold">List your job to find perfect developer for the role</div>
          </div>
          <a href="#" className='text-indigo-50 self-start duration-300 transition-all rounded-md font-bold px-4 py-3 bg-indigo-600 hover:bg-indigo-500'>Add Job</a>
        </div>
      </div>
    </section>
  )
}

export default HomeCards