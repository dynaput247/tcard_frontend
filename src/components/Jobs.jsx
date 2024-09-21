import React from "react";
import JobCard from "./JobCard";

export default () => {
  return (
    <div className="w-full mt-3">
      <h2 className="text-lg">312 Jobs Found</h2>
      <div className="w-full">
        <JobCard />
      </div>
    </div>
  )
}