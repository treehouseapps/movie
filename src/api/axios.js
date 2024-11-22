import axios from 'axios'

const baseURL = "https://api.themoviedb.org/3"
const api = axios.create({
	baseURL,
	"Content-Type": "application/json",
	"params": {
		"api_key": "777a620fe0481ab7da037455f07f283b",
		"page": "2"
	},
	"timeout":  10000 
	
})

export default api