import * as streamingAvailability from "streaming-availability";

const test = async () => {
	const RAPID_API_KEY = "2ffe1fcf83msh5b70372959ae955p14b2a0jsn0af3";
const client = new streamingAvailability.Client(new streamingAvailability.Configuration({
	apiKey: RAPID_API_KEY
}));
const data = await client.showsApi.getShow({
	id: "tt0068646",
});
console.log(data);	
}

console.log('my gy')
test()

