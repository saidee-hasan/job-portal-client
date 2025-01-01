import axios from "axios";
import React, { useEffect, useState } from "react";

function useJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:5000/jobs").then((res) => {
      setLoading(false);
      setJobs(res.data)
    });



  }, []);
  return {jobs,loading};
}

export default useJobs;
