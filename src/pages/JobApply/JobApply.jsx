import React from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
    };

    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Your job application has been submitted!",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 max-w-2xl w-full md:shadow-md md:my-4">
        <h2 className="text-xl md:text-4xl pt-8 font-bold text-center text-gray-700">
          Apply Job and Good Luck!
        </h2>
        <form onSubmit={submitJobApplication} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">LinkedIn URL</span>
            </label>
            <input
              type="url"
              name="linkedIn"
              placeholder="LinkedIn URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Github URL</span>
            </label>
            <input
              type="url"
              name="github"
              placeholder="Github URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Resume URL</span>
            </label>
            <input
              type="url"
              name="resume"
              placeholder="Resume URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
