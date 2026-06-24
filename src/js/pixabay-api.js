import axios, { isCancel, AxiosError } from "axios";


export async function getImagesByQuery(query, page) {
    const baseUrl = 'https://pixabay.com';
    const endPoint = '/api/';
    const params = new URLSearchParams({
        key: "56397687-63b06f309fb1b7ea5ddc55358",
        q: `${query}`,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
        per_page: 15,
        page: page,
    })
    const url = `${baseUrl}${endPoint}?${params}`;
    const response = await axios.get(url);
    return response.data
    
}
