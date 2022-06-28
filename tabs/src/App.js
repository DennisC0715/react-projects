import { useState, useEffect } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const responseData = await response.json();

    setJobs(responseData);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  console.log();

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];
  const companies = jobs.map((job) => job.company);

  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {companies.map((company, index) => (
              <button
                key={index}
                className={`job-btn ${index === value && "active-btn"}`}
                onClick={() => {
                  setValue(index);
                }}
              >
                {company}
              </button>
            ))}
          </div>
          <div className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => (
              <div key={index} className="job-desc">
                <FaAngleDoubleLeft className="job-icon" /> <p>{duty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
