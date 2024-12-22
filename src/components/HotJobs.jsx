import React, { useState, useEffect } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

function HotJobs() {
  const data = useLoaderData(); // Fetching data using useLoaderData
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Assuming data is an array of job objects
    if (Array.isArray(data)) {
      setJobs(data);
    } else {
      setJobs([data]); // If it's a single job object, wrap it in an array
    }
  }, [data]);

  const handleApplyNow = (job) => {
    // Handle apply functionality here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Hot Jobs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                    <strong className="">{job.location}</strong>
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
                {/* Check if job.requirements is an array before mapping */}
                {(Array.isArray(job.requirements) && job.requirements.length > 0) ? (
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
                <button
                  onClick={() => handleApplyNow(job)}
                  className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition"
                >
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

export default HotJobs;
