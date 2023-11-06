import { useEffect, useState, useRef } from "react";
import { Data } from "../types";



type Fetch = {
  data: Data,
  loading: boolean,
  error: boolean,

}

const useFetch = (url: string | null): Fetch => {


  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const urlRef = useRef(url);


  useEffect(() => {


    if (url !== urlRef.current) {
      urlRef.current = url;
      setShouldLoad((s) => !s);
    }
  }, [url]);
  useEffect(() => {
    if (url === null) {
      return
    }

    const fetchData = async () => {
      try {

        const dataPromise = await fetch(url);
        const dataResult = await dataPromise.json();

        setData(dataResult);

      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }

    };


    fetchData();
    // eslint-disable-next-line
  }, [shouldLoad]);


  return { data, loading, error };
};

export default useFetch;