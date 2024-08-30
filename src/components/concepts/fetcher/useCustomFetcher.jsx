import { useEffect } from "react";
import { useState } from "react";

function useCustomFetcher(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  function reset() {
    setIsError(false);
    setError("");
    setIsLoading(true);
  }

  async function fetchData() {
    try {
      reset();
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (err) {
      setIsError(true);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { isLoading, data, isError, error };
}

export default useCustomFetcher;
