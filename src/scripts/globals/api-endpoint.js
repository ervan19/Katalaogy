import CONFIG from "./config";

const API_ENDPOINT = {
    RESTAURANT: `${CONFIG.BASE_URL}list`,
    DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
    SEARCH: (query) => `${CONFIG.BASE_URL}search?q=${query}`,
    ADD_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
