import axios from "axios";

const getEtuajoOikeusJaVaistamismerkit = async () => {
	const url = "https://api.flickr.com/services/rest?photoset_id=72157660418568365&method=flickr.photosets.getPhotos&api_key=1489e4614f9f2e103808c6faa415ef85&format=json&nojsoncallback=1"
	
	const request = await axios.get(url);

	//setLiikenneMerkit(merkit.map(l => ({
		const data = request.data.photoset;
	
		
	//})));
	
	return data;
}


export default {getEtuajoOikeusJaVaistamismerkit};
