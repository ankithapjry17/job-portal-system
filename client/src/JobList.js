import { useEffect, useState } from "react";
import API from "./services/api";
import ApplicationForm from "./ApplicationForm"; // Import the new ApplicationForm component
import './JobList.css'; // Import the new CSS file

function JobList({ setUser, user }) {
  const [jobs, setJobs] = useState([]);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);

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

  const handleApplyClick = (jobId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to apply for jobs.");
      return;
    }
    setSelectedJobId(jobId);
    setShowApplicationForm(true);
  };

  const handleCloseApplicationForm = () => {
    setShowApplicationForm(false);
    setSelectedJobId(null);
  };

  const handleApplicationSuccess = () => {
    alert("Job applied successfully!");
    setShowApplicationForm(false);
    setSelectedJobId(null);
    // Optionally, refresh job list or update UI to reflect application
  };

  return (
    <div className="job-list-container">
      {jobs.map((job) => (
        <div key={job._id} className="job-card">
          <div>
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Location:</strong> {job.location}</p>
          </div>
          <div className="job-card-actions">
            <button onClick={() => handleApplyClick(job._id)}>Apply</button>
          </div>
        </div>
      ))}

      {showApplicationForm && (
        <ApplicationForm
          jobId={selectedJobId}
          onClose={handleCloseApplicationForm}
          onSuccess={handleApplicationSuccess}
          setUser={setUser} // Pass setUser to ApplicationForm
          user={user} // Pass user to ApplicationForm
        />
      )}
    </div>
  );
}

export default JobList;