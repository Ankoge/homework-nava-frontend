import axios from "./AxiosInstance";

const fetchDelete = async (url) => {
    try {
        console.log("In DELETE fetch with: ", url, {
            "headers": {
                "Authorization": "Bearer "
            }
        })
        const response = await axios.delete(url)
        console.log("Fetch response: ", response.data, url);
        return response;
    } catch (e) {
        console.log("Error in DELETE fetch: ", e.message, url)
    }
}

export default fetchDelete;