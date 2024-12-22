import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // fetch(`https://job-portal-server-alpha-five.vercel.app/job-application?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => setJobs(data));

    // axios
    //   .get(`https://job-portal-server-alpha-five.vercel.app/job-application?email=${user.email}`, {
    //     withCredentials: true,
    //   })
    //   .then((res) => setJobs(res.data));

    axiosSecure
      .get(`/job-application?email=${user.email}`)
      .then((res) => setJobs(res.data));
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Optimistically update the UI by removing the job
        const updatedJobs = jobs.filter((job) => job._id !== id);
        setJobs(updatedJobs);

        fetch(
          `https://job-portal-server-alpha-five.vercel.app/job-application/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your application has been deleted.",
                icon: "success",
              });
            } else {
              setJobs(jobs); // Optionally reset the state to the original jobs list if deletion fails
              Swal.fire({
                title: "Error!",
                text: "There was a problem deleting your application.",
                icon: "error",
              });
            }
          })
          .catch(() => {
            // In case of an error, revert the state and show an error message
            setJobs(jobs);
            Swal.fire({
              title: "Error!",
              text: "Failed to delete the application. Please try again.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-semibold text-center py-8">
        My Job Applications
      </h1>
      <div className="max-w-6xl mx-auto overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job Title</th>
              <th>Job Type</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={job.company_logo} alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.company}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>{job.title}</td>
                <td>{job.jobType}</td>
                <th>
                  <button
                    onClick={() => handleDelete(job._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaTrash />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
