// import React from 'react'

const Hero = ({title="Become a React Developer", children}) => {
  return (
    <section className="bg-gradient-to-l from-indigo-700 via-indigo-600 to-indigo-700 mx-auto py-20 px-10">
      <div className="container mx-auto flex flex-col items-center justify-center text-indigo-100 space-y-5">
        <div className="font-extrabold text-2xl md:text-4xl lg:text-5xl">{ title }</div>
        <div className="text-lg md:text-2xl lg:text-3xl">{ children }</div>
      </div>
    </section>
  )
}

export default Hero