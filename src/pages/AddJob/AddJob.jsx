import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries());
    const initialData = Object.fromEntries(formData.entries());
    // console.log(initialData);
    const { max, min, currency, ...newJob } = initialData;
    // console.log(newJob);
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    // console.log(newJob);

    fetch("https://job-portal-server-alpha-five.vercel.app/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Your job post successfully added!",
            showConfirmButton: false,
            timer: 3000,
          }).then(() => {
            navigate("/my-posted-jobs");
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-4 md:py-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
        <h1 className="text-2xl md:text-4xl font-semibold text-center">
          Post a New Job!
        </h1>
        <form onSubmit={handleAddJob}>
          <div className="space-y-4">
            {/* Job Title */}
            <div className="form-control">
              <label className="label">Job Title</label>
              <input
                type="text"
                name="title"
                className="input input-bordered w-full"
                placeholder="Job Title"
                required
              />
            </div>

            {/* Location */}
            <div className="form-control">
              <label className="label">Location</label>
              <div className="input-group">
                <input
                  type="text"
                  name="location"
                  className="input input-bordered w-full"
                  placeholder="Location"
                  required
                />
              </div>
            </div>

            {/* Job Type */}
            <div className="form-control">
              <label className="label">Job Type</label>
              <select
                defaultValue=""
                name="jobType"
                className="select select-bordered w-full"
                required
              >
                <option value="" disabled>
                  Pick a Job Type
                </option>
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
              <select
                defaultValue=""
                name="category"
                className="select select-bordered w-full"
                required
              >
                <option value="" disabled>
                  Pick a Job Category
                </option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Finance">Finance</option>
                <option value="Teaching">Teaching</option>
                <option value="Design">Design</option>
                <option value="Data Science">Data Science</option>
                <option value="Management">Management</option>
              </select>
            </div>

            {/* Company Name */}
            <div className="form-control">
              <label className="label">Company Name</label>
              <input
                type="text"
                name="company"
                className="input input-bordered w-full"
                placeholder="Company Name"
                required
              />
            </div>

            {/* Application Deadline */}
            <div className="form-control">
              <label className="label">Application Deadline</label>
              <input
                type="date"
                name="applicationDeadline"
                className="input input-bordered w-full"
                required
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
                  required
                />
              </div>
              <div>
                <label className="label">Maximum Salary</label>
                <input
                  type="number"
                  name="max"
                  className="input input-bordered w-full"
                  placeholder="Max Salary"
                  required
                />
              </div>
              <div>
                <label className="label">Currency</label>
                <select
                  defaultValue=""
                  name="currency"
                  className="select select-bordered w-full"
                  required
                >
                  <option value="" disabled>
                    Pick a Currency
                  </option>
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
                required
              />
            </div>

            {/* Requirements */}
            <div className="form-control">
              <label className="label">Requirements</label>
              <textarea
                name="requirements"
                className="textarea textarea-bordered w-full"
                placeholder="Write each requirement in a new line"
                required
              />
            </div>

            {/* Responsibilities */}
            <div className="form-control">
              <label className="label">Responsibilities</label>
              <textarea
                name="responsibilities"
                className="textarea textarea-bordered w-full"
                placeholder="Write each responsibility in a new line"
                required
              />
            </div>

            {/* HR Email */}
            <div className="form-control">
              <label className="label">HR Email</label>
              <input
                type="email"
                defaultValue={user?.email}
                name="hr_email"
                className="input input-bordered w-full"
                placeholder="HR Email"
                required
              />
            </div>

            {/* HR Name */}
            <div className="form-control">
              <label className="label">HR Name</label>
              <input
                type="text"
                name="hr_name"
                className="input input-bordered w-full"
                placeholder="HR Name"
                required
              />
            </div>

            {/* Company Logo */}
            <div className="form-control">
              <label className="label">Company Logo URL</label>
              <input
                type="url"
                name="company_logo"
                className="input input-bordered w-full"
                placeholder="Company Logo URL"
                required
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
