import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="flex gap-3 p-4">
        <figure>
          <img src={company_logo} className="w-16" alt="" />
        </figure>
        <div>
          <h4 className="text-2xl font-semibold">{company}</h4>
          <p className="text-gray-500 flex items-center gap-1">
            <span>
              <CiLocationOn />
            </span>
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex gap-2 flex-wrap">
          {requirements.map((skill, idx) => (
            <p
              key={idx}
              className="border rounded-md text-center px-2 hover:text-blue-600 hover:bg-gray-100"
            >
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end items-center mt-4">
          <p>
            <span className="font-semibold">Salary:</span>{" "}
            <span className="text-gray-600">
              {salaryRange.currency} {salaryRange.min} - {salaryRange.max}
            </span>
          </p>
          <Link to={`/jobs/${_id}`}>
            <button className="btn bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out rounded-md px-6 py-2">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
