import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

function MyPostedJobs() {
    const [jobs, setJobs] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch(`http://localhost:5000/jobs?email=${user?.email}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        if (user?.email) {
            fetchJobs();
        }
    }, [user?.email]);

    return (
        <div className='mt-16 container mx-auto'>
            <h2 className='text-2xl font-bold mb-4'>My Posted Jobs</h2>
            {jobs.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Job ID</th>
                                <th className="py-3 px-6 text-left">Applicant Name</th>
                                <th className="py-3 px-6 text-left">Applicant Email</th>
                                <th className="py-3 px-6 text-left">Job Type</th>
                                <th className="py-3 px-6 text-left">Application Deadline</th>
                                <th className="py-3 px-6 text-left">View Application</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {jobs.map(job => (
                                <tr key={job._id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6">{job._id}</td>
                                    <td className="py-3 px-6">{job.hr_name}</td>
                                    <td className="py-3 px-6">{job.hr_email}</td>
                                    <td className="py-3 px-6">{job.jobType}</td>
                                    <td className="py-3 px-6">{job.applicationDeadline}</td>
                                    <td className="py-3 px-6"><Link className='text-green-600' to={'/viewApplication'}>View Application</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No jobs posted yet.</p>
            )}
        </div>
    );
}

export default MyPostedJobs;