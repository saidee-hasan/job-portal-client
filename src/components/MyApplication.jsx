import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { linkWithCredential } from "firebase/auth";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";

function MyApplication() {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axiosSecure.get(
          `https://server-jobs.vercel.app/jobs-application`,
          {
            params: { email: user.email },
            withCredentials: true,
          }
        );

        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [user.email]);

  return (
    <div className="md:mt-16  mt-20 container mx-auto  px-4">
      <h2 className="text-2xl font-semibold text-center mb-8">
        My Applications
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 text-left">
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-4">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="p-4">Name</th>
              <th className="p-4">Job</th>
              <th className="p-4">Company</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {jobs.length > 0 ? (
              jobs.map((application) => (
                <tr key={application._id} className="hover:bg-gray-100">
                  <td className="p-4">
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={
                              application.company_logo ||
                              "https://via.placeholder.com/100"
                            }
                            alt={application.applicant_name}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">
                          {application.applicant_name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {application.applicant_email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="badge badge-ghost badge-sm">
                      {application.title}
                    </span>
                  </td>
                  <td className="p-4">{application.company}</td>
                  <td className="p-4">
                    <a
                      href={application.githubLink}
                      className="btn btn-ghost btn-xs text-blue-500 hover:text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No applications found.
                </td>
              </tr>
            )}
          </tbody>

          {/* Table Footer */}
          <tfoot>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-4"></th>
              <th className="p-4">Name</th>
              <th className="p-4">Job</th>
              <th className="p-4">Company</th>
              <th className="p-4">Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default MyApplication;
