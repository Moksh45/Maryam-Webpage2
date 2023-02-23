import { useState, useEffect } from "react";

const useWebApi = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(`http://127.0.0.1:1313/api/modules?_module=iris&query=${term}`)
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);

  return { data };
};
export default useWebApi;
