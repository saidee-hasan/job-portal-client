import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

function MyApplication() {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/jobs-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
            .catch(error => {
                console.error('Error fetching jobs:', error);
            });
    }, [user.email]);
console.log(jobs)
    return (
        <div className='mt-16 container mx-auto'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="bg-gray-200">
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Company</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.length > 0 ? (
                            jobs.map((application) => (
                                <tr key={application._id} className="hover:bg-gray-100">
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={application.company_logo || "https://via.placeholder.com/100"}
                                                        alt={application.applicant_name}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{application.applicant_name}</div>
                                                <div className="text-sm opacity-50">{application.applicant_email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-ghost badge-sm">{application.title}</span>
                                    </td>
                                    <td>{application.company}</td>
                                    <th>
                                        <a href={application.githubLink} className="btn btn-ghost btn-xs">Details</a>
                                    </th>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-4">No applications found.</td>
                            </tr>
                        )}
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr className="bg-gray-200">
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Company</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default MyApplication;