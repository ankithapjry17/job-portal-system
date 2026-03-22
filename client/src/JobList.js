import { useEffect, useState } from "react";
import API from "./services/api";

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs");
      setJobs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleApply = async (jobId) => {
  try {
    const res = await API.post("/apply", {
      userId: "testUser",   // for now (we’ll improve later)
      jobId: jobId,
    });

    alert(res.data.message);
  } catch (err) {
    alert("Error applying for job");
  }
};

  return (
    <div>
      <h2>Job Listings</h2>

      {jobs.map((job) => (
        <div key={job._id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h3>{job.title}</h3>
          <p>Company: {job.company}</p>
          <p>Salary: {job.salary}</p>
          <p>Location: {job.location}</p>

          <button onClick={() => handleApply(job._id)}>Apply</button>
        </div>
      ))}
    </div>
  );
}

export default JobList;