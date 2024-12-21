import React from 'react';

function AddJobs() {

  const handleAddToJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const {salaryMin ,salaryMax ,currency ,...newJob } = initialData;
    newJob.salaryMin ={salaryMin,salaryMax,currency}
    console.log(newJob)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Add Job</h1>
        <form onSubmit={handleAddToJob} className="space-y-6">
          {/* Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter job title"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter job location"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Job Type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Type</span>
            </label>
            <select name="jobType" className="select select-bordered w-full" required>
              <option value="">Select job type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter job category"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Application Deadline */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Application Deadline</span>
            </label>
            <input
              type="date"
              name="applicationDeadline"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Salary Range */}
          <div className="grid grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Minimum Salary</span>
              </label>
              <input
                type="number"
                name="salaryMin"
                placeholder="Min salary"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Maximum Salary</span>
              </label>
              <input
                type="number"
                name="salaryMax"
                placeholder="Max salary"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Currency */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Currency</span>
            </label>
            <select name="currency" className="select select-bordered w-full">
              <option value="bdt">BDT</option>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
            </select>
          </div>

          {/* HR Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Name</span>
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="Enter HR name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* HR Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Email</span>
            </label>
            <input
              type="email"
              name="hr_email"
              placeholder="Enter HR email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Company Logo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Logo URL</span>
            </label>
            <input
              type="url"
              name="company_logo"
              placeholder="Enter company logo URL"
              className="input input-bordered w-full"
            />
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              placeholder="Enter job description"
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">Submit Job</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddJobs;
