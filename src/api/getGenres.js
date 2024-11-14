
const getGenres = async () => {

	try {
		const url = "https://api.themoviedb.org/3/genre/movie/list?api_key=777a620fe0481ab7da037455f07f283b"

		const response = await fetch(url)

		if(!response.ok) {
			throw new Error("Couldn't get data")
		}

		const data = await response.json()
		return { data, error: null }

	} catch (err) {
		return { data: null, error: err }
	}

}

export default getGenres