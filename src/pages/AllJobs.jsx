import React, { useState } from "react";
import useJobs from "../hooks/useJobs";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function AllJobs() {
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState("");
  const { jobs, loading } = useJobs(sort, search, minSalary, maxSalary);

  // Loading State
  if (loading) {
    return <h1 className="text-center mt-8 text-2xl font-semibold">Loading jobs...</h1>;
  }

  // Handling Search Input Changes
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Handling Salary Input Changes
  const handleSalaryChange = (e) => {
    const { name, value } = e.target;
    if (name === "minSalary") {
      setMinSalary(value);
    } else if (name === "maxSalary") {
      setMaxSalary(value);
    }
  };

  return (
    <div className="mt-16 container mx-auto px-4">
      {/* Filter and Search Section */}
      <div className="bg-base-200 py-5 px-4 flex flex-col md:flex-row items-center gap-4">
        {/* Sort Button */}
        <button
          onClick={() => setSort(!sort)}
          className={`btn cursor-pointer ${sort ? "btn-success" : "btn-neutral"} transition-all duration-200`}
        >
          {sort ? "Sorted By Salary" : "Sort By Salary"}
        </button>

        {/* Search Input with Icon */}
        <div className="relative w-full sm:w-72 md:w-96">
          <input
            onKeyUp={handleSearchChange}
            type="text"
            className="input pl-10 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
            placeholder="Search By Job Title or Location"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Salary Inputs */}
        <div className="flex flex-wrap gap-4 md:flex-nowrap">
          <input
            onChange={handleSalaryChange}
            name="minSalary"
            value={minSalary}
            type="number"
            className="input w-full sm:w-32 border rounded-md focus:ring-2 focus:ring-blue-400"
            placeholder="Min Salary"
          />
          <input
            onChange={handleSalaryChange}
            name="maxSalary"
            value={maxSalary}
            type="number"
            className="input w-full sm:w-32 border rounded-md focus:ring-2 focus:ring-blue-400"
            placeholder="Max Salary"
          />
        </div>
      </div>

      {/* Job Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              {/* Job Header */}
              <div className="flex items-center mb-4">
                <img
                  src={job.company_logo}
                  alt={`${job.company} logo`}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
                  <p className="text-gray-600 flex items-center gap-2">
                    <FaMapLocationDot className="mt-1" color="green" />
                    <strong>{job.location}</strong>
                  </p>
                </div>
              </div>

              {/* Job Category */}
              <h3 className="text-gray-600 text-lg font-bold mb-2">{job.category}</h3>

              {/* Job Description */}
              <p className="text-gray-600">
                <strong>Application Deadline:</strong> {job.applicationDeadline}
              </p>
              <p className="text-gray-600">
                <strong>Description:</strong> {job.description}
              </p>

              {/* Job Requirements */}
              <h4 className="font-semibold mt-4">Requirements:</h4>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                {Array.isArray(job.requirements) && job.requirements.length > 0 ? (
                  job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))
                ) : (
                  <li>No requirements listed</li>
                )}
              </ul>

              {/* Salary Range */}
              <p className="text-gray-600">
                <strong>Salary Range:</strong> {job.salaryRange.min} - {job.salaryRange.max}{" "}
                {job.salaryRange.currency}
              </p>

              {/* Apply Button */}
              <Link to={`/jobs/${job._id}`}>
                <button className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition">
                  Apply Now
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No jobs available at the moment.</p>
        )}
      </div>
    </div>
  );
}

export default AllJobs;
