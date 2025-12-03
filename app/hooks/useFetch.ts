import { useState, useEffect } from 'react';

export const useFetch = (url: string) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const formattedJson = await response.json();
      setData(formattedJson);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }
  fetchData();
}, [url]);
  return { data, loading, error };
}