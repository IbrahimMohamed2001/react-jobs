import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
const App = () => {
  return <>
    <Header />
    <Hero>
      Find <b>React Jobs</b> that fits your skills and needs
    </Hero>
    <HomeCards />
    <JobListings />
  </>
};

export default App;
