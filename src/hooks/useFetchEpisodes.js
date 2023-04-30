import axios from "axios";
import { useEffect, useState } from "react";


const useFetchEpisodes = (url) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setdata(response.data);
        setloading(false);
        setError(response.message);
      })
  }, [url]);

  return { data, loading, error };
};

export default useFetchEpisodes;
