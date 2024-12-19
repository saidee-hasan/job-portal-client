import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function JobsDetails() {
  const data = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-14 bg-white rounded-lg shadow-xl transition-shadow hover:shadow-2xl">
      <img
        src={data.company_logo}
        alt={`${data.company} logo`}
        className="w-16 h-16 mb-4 rounded-full border border-gray-300"
      />
      <h1 className="text-3xl font-semibold text-gray-900 mb-2">{data.title}</h1>
      <p className="text-gray-500 mb-2">{data.location} - {data.jobType}</p>
      <p className="text-gray-700 mb-4">{data.description}</p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Company: {data.company}</h2>
      <p className="text-gray-600 mb-4">Contact: {data.hr_name} ({data.hr_email})</p>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">Responsibilities:</h3>
      <ul className="list-disc list-inside mb-4">
        {data.responsibilities.map((responsibility, index) => (
          <li key={index} className="text-gray-700">{responsibility}</li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">Requirements:</h3>
      <ul className="list-disc list-inside mb-4">
        {data.requirements.map((requirement, index) => (
          <li key={index} className="text-gray-700">{requirement}</li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">Salary Range:</h3>
      <p className="text-gray-700">
        {data.salaryRange.min} - {data.salaryRange.max} {data.salaryRange.currency}
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">Application Deadline:</h3>
      <p className="text-gray-700">{data.applicationDeadline}</p>

      {/* Apply Now Button */}
      <button
        onClick={handleOpenModal}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
      >
        Apply Now
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-4 transition-transform transform hover:scale-105"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Application Form</h2>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="mb-4 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="mb-4 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Cover Letter"
                className="mb-6 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </form>
            <button
              onClick={handleCloseModal}
              className="mt-4 text-red-500 hover:text-red-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobsDetails;
