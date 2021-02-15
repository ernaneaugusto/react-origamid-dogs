import React, { useState, useCallback } from "react";

const useFetch = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = useCallback(async (url, options) => {
    let response;
    let json;

    try {
      setError(false);
      setLoading(true);

      response = await fetch(url, options);
      json = await response.json();

      if (!response.ok) throw new Error(json.message);

      setData(json);
    } catch (error) {
      setData(null);
      setError(error.message);
    } finally {
      setLoading(false);
      return {
        response,
        json,
      };
    }
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useFetch;
