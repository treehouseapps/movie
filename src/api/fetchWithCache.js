import api from '../api/axios'

export const fetchWithCache = async (url) => {
	const cacheKey = `cache-${url}`

	// check if cache is already in localStorage
	const cachedData = localStorage.getItem(cacheKey)

	if(cachedData) {
		console.log('Using cached data')
		const parsedCacheData = JSON.parse(cachedData)

		fetchFreshData(url, cacheKey)
		
		return parsedCacheData
	}

}

export const fetchFreshData = async (url, cacheKey) => {
	try {
		// if no cache data found, fetch from the server
		const response = await api.get(url)
		const data = response.data.results

		// cache the response into localStorage
		localStorage.setItem(cacheKey, JSON.stringify(data))

		console.log('fetched fresh data and cache updated')
		return data
	} catch (err) {
		console.log('Error fetching fresh data')
		throw err
	}
}