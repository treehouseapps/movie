import { useState, useEffect } from 'react'
import { fetchWithCache } from '../api/fetchWithCache'

const useFetch = (url) => {

	const [data, setData] = useState([])
	const [error, setError] = useState([])
	const [loading, setLoading] = useState([])

	useEffect(() => {
	  const fetchInfo = async () => {
	    try {
	      const response = await fetchWithCache(url)
	      return setData(response)
	    } catch (err) {
	      setError(err)
	      console.log(err.message)
	    } finally {
	      setLoading(false)
	    }
	  };

	  fetchInfo();
  }, [url]);

	return { data, loading, error }

}

export default useFetch;