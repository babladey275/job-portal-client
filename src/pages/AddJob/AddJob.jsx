import React from "react";

const AddJob = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-4 md:py-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
        <h1 className="text-2xl md:text-4xl font-semibold text-center">
          Post a New Job!
        </h1>
        <form>
          <div className="space-y-4">
            {/* Job Title */}
            <div className="form-control">
              <label className="label">Job Title</label>
              <input
                type="text"
                name="title"
                className="input input-bordered w-full"
                placeholder="Job Title"
              />
            </div>

            {/* Location */}
            <div className="form-control">
              <label className="label">Location</label>
              <div className="input-group">
                <input
                  type="text"
                  name="location"
                  className="input input-bordered w-full pl-8"
                  placeholder="Location"
                />
              </div>
            </div>

            {/* Job Type */}
            <div className="form-control">
              <label className="label">Job Type</label>
              <select name="jobType" className="select select-bordered w-full">
                <option value="Intern">Intern</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Contractual">Contractual</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Remote">Remote</option>
                <option value="On-site">On-site</option>
              </select>
            </div>

            {/* Category */}
            <div className="form-control">
              <label className="label">Category</label>
              <input
                type="text"
                name="category"
                className="input input-bordered w-full"
                placeholder="Category"
              />
            </div>

            {/* Application Deadline */}
            <div className="form-control">
              <label className="label">Application Deadline</label>
              <input
                type="date"
                name="applicationDeadline"
                className="input input-bordered w-full"
              />
            </div>

            {/* Salary Range */}
            <div className="form-control grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="label">Minimum Salary</label>
                <input
                  type="number"
                  name="min"
                  className="input input-bordered w-full"
                  placeholder="Min Salary"
                />
              </div>
              <div>
                <label className="label">Maximum Salary</label>
                <input
                  type="number"
                  name="max"
                  className="input input-bordered w-full"
                  placeholder="Max Salary"
                />
              </div>
              <div>
                <label className="label">Currency</label>
                <select
                  name="currency"
                  className="select select-bordered w-full"
                >
                  <option value="bdt">BDT</option>
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                  <option value="inr">INR</option>
                  <option value="gbp">GBP</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="form-control">
              <label className="label">Description</label>
              <textarea
                name="description"
                className="textarea textarea-bordered w-full"
                placeholder="Job Description"
              />
            </div>

            {/* Requirements */}
            <div className="form-control">
              <label className="label">Requirements</label>
              <input
                type="text"
                name="requirements"
                className="input input-bordered w-full"
                placeholder="Requirements (Comma separated)"
              />
            </div>

            {/* Responsibilities */}
            <div className="form-control">
              <label className="label">Responsibilities</label>
              <input
                type="text"
                name="responsibilities"
                className="input input-bordered w-full"
                placeholder="Responsibilities (Comma separated)"
              />
            </div>

            {/* HR Email */}
            <div className="form-control">
              <label className="label">HR Email</label>
              <div className="input-group">
                <input
                  type="email"
                  name="hr_email"
                  className="input input-bordered w-full pl-8"
                  placeholder="HR Email"
                />
              </div>
            </div>

            {/* HR Name */}
            <div className="form-control">
              <label className="label">HR Name</label>
              <input
                type="text"
                name="hr_name"
                className="input input-bordered w-full"
                placeholder="HR Name"
              />
            </div>

            {/* Company Logo */}
            <div className="form-control">
              <label className="label">Company Logo URL</label>
              <input
                type="text"
                name="company_logo"
                className="input input-bordered w-full"
                placeholder="Company Logo URL"
              />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Post Job
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
