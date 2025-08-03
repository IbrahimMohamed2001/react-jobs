import React from 'react'

const JobListings = () => {
  return (
    <section id="job-listings" className="w-full bg-indigo-50">
      <div className="container mx-auto py-4">
        <div className="flex flex-col items-center justify-center space-y-5 px-5">
          <div className="text-center text-2xl text-indigo-500 font-bold">
            Browse Jobs
          </div>

          <div className="flex flex-col items-start px-5 justify-center rounded-md bg-white drop-shadow-md py-3 space-y-3">
            <div className="flex flex-col space-y-1">
              <h4 className="text-gray-400 font-bold text-sm">Full-time</h4>
              <h2 className="text-slate-900 text-2xl font-bold">Senior React Developer</h2>
            </div>
            <p className="text-slate-900 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, reprehenderit! Ipsum tempore quas autem atque. Eum voluptatem quas accusamus earum assumenda molestias non, cumque obcaecati dicta? Praesentium veritatis rem voluptatum.</p>
            <p className="text-indigo-400 text-xs font-bold">$70 - $80 K/Year</p>
            <hr className="border-1 bg-gray-500 w-full"/>
            <p className="text-red-600 font-bold text-xs">Boston, MA</p>
            <a href="#" className="text-white bg-indigo-600 w-full text-center rounded-md py-1 transition-all duration-300 hover:bg-indigo-500">Read More</a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default JobListings