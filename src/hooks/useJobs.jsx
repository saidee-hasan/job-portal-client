import axios from "axios";
import React, { useEffect, useState } from "react";

function useJobs(sort,search,minSalary,maxSalary) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`http://localhost:5000/jobs?sort=${sort}&search=${search}&min=${minSalary}$max=${maxSalary}`).then((res) => {
      setLoading(false);
      setJobs(res.data)
    });



  }, [sort,search,minSalary,maxSalary]);
  return {jobs,loading};
}

export default useJobs;
