import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCalendarAlt,
} from "react-icons/fa";

const JobDetails = () => {
  const job = useLoaderData();

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Company Logo and Job Title */}
            <div className="lg:w-1/3 bg-gray-200 p-6 flex flex-col justify-center items-center">
              <img
                src={job.company_logo}
                alt="Company Logo"
                className="w-24 h-24 rounded-full mb-4"
              />
              <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
              <p className="text-sm text-gray-600">{job.company}</p>
            </div>

            {/* Job Details */}
            <div className="lg:w-2/3 p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Job Details
              </h2>
              <p className="text-gray-700 mb-4">{job.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Job Type */}
                <div className="flex items-center">
                  <span className="text-lg font-medium text-gray-700">
                    <FaMapMarkerAlt className="mr-2 text-gray-600" />{" "}
                    {job.location}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-medium text-gray-700">
                    <FaMoneyBillWave className="mr-2 text-gray-600" />{" "}
                    {job.salaryRange.min} - {job.salaryRange.max}{" "}
                    {job.salaryRange.currency}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Job Category */}
                <div className="flex items-center">
                  <span className="text-lg font-medium text-gray-700">
                    <FaCalendarAlt className="mr-2 text-gray-600" /> Application
                    Deadline: {job.applicationDeadline}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-medium text-gray-700">
                    Job Type: {job.jobType}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Requirements:
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Responsibilities:
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {job.responsibilities.map((res, index) => (
                    <li key={index}>{res}</li>
                  ))}
                </ul>
              </div>

              {/* Contact HR Section */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Contact HR:
                </h3>
                <p className="text-gray-700 mb-2">
                  For more details, reach out to:
                </p>
                <p className="text-gray-700 flex items-center">
                  <FaEnvelope className="mr-2 text-gray-600" />{" "}
                  <a href={`mailto:${job.hr_email}`} className="text-blue-600">
                    {job.hr_name} ({job.hr_email})
                  </a>
                </p>
              </div>

              {/* Apply Button */}
              <div className="mt-6">
                <Link to={`/job-apply/${job._id}`}>
                  <button className="btn btn-primary w-full">Apply Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
