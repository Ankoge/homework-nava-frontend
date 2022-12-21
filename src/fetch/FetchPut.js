import axios from "./AxiosInstance";

const fetchPut = async (url, body) => {
    try {
        console.log("In PUT fetch with: ", url, {
            "headers": {
                "Authorization": "Bearer "
            }
        })
        const response = await axios.put(url, body)
        console.log("Fetch response: ", response.data, url)
        return response;
    } catch (e) {
        console.log("Error in PUT fetch: ", e.message, url)
    }
}

export default fetchPut;