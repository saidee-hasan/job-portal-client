import axios from "axios";
import React, { useEffect, useState } from "react";

function useJobs(sort,search) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`http://localhost:5000/jobs?sort=${sort}&search=${search}`).then((res) => {
      setLoading(false);
      setJobs(res.data)
    });



  }, [sort,search]);
  return {jobs,loading};
}

export default useJobs;
