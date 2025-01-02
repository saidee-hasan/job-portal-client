import React, { useState } from "react";
import useJobs from "../hooks/useJobs";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

function AllJobs() {
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState("");
  const { jobs, loading } = useJobs(sort, search, minSalary, maxSalary);

  // Loading State
  if (loading) {
    return <h1>Loading jobs...</h1>;
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
    <div className="mt-28 container mx-auto px-4">
      <div className="bg-base-200 py-5 pl-2 flex items-center flex-wrap">
        <BiSearch className="mr-2" />
        <button
          onClick={() => setSort(!sort)}
          className={`btn cursor-pointer ${
            sort ? "btn-success" : "btn-neutral"
          } transition-all duration-200`}
        >
          {sort ? "Sorted By Salary" : "Sort By Salary"}
        </button>
        <input
          onChange={handleSearchChange} // Changed to onChange for consistency
          type="text"
          className="input ml-4 w-full sm:w-64"
          placeholder="Search By Job Title or Location"
        />
        <input
          onChange={handleSalaryChange} // Changed to onChange for consistency
          name="minSalary"
          value={minSalary}
          type="number"
          className="input ml-4 w-full sm:w-32"
          placeholder="Min Salary"
        />
        <input
          onChange={handleSalaryChange} // Changed to onChange for consistency
          name="maxSalary"
          value={maxSalary}
          type="number"
          className="input ml-4 w-full sm:w-32"
          placeholder="Max Salary"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={job.company_logo}
                  alt={`${job.company} logo`}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold">{job.title}</h2>
                  <p className="text-gray-600 gap-3 flex">
                    <FaMapLocationDot className="mt-1" color="green" />
                    <strong>{job.location}</strong>
                  </p>
                </div>
              </div>
              <h3 className="text-gray-600 text-lg font-bold mb-2">
                {job.category}
              </h3>
              <p className="text-gray-600">
                <strong>Application Deadline:</strong> {job.applicationDeadline}
              </p>
              <p className="text-gray-600">
                <strong>Description:</strong> {job.description}
              </p>

              <h4 className="font-semibold mt-4">Requirements:</h4>
              <ul className="list-disc list-inside mb-4">
                {Array.isArray(job.requirements) &&
                job.requirements.length > 0 ? (
                  job.requirements.map((req, index) => (
                    <li key={index} className="text-gray-600 border-b p-2">
                      {req}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-600">No requirements listed</li>
                )}
              </ul>

              <p className="text-gray-600">
                <strong>Salary Range:</strong> {job.salaryRange.min} -{" "}
                {job.salaryRange.max} {job.salaryRange.currency}
              </p>

              <Link to={`/jobs/${job._id}`}>
                <button className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition">
                  Apply Now
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center">No jobs available at the moment.</p>
        )}
      </div>
    </div>
  );
}

export default AllJobs;
