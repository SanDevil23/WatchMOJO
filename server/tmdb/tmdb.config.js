const baseURL = process.env.TMDB_BASE_URL
const key = process.env.TMDB_KEY 


// URLSearchParams is a built-in JavaScript object that allows you to work with the query string of a URL. It provides methods for appending, deleting, getting, and setting key-value pairs in the query string. You can use it to easily modify and manipulate the URL in your web applications.

const getUrl = (endpoint, params) => {
    const qs = new URLSearchParams(params)

    return `${baseURL}${endpoint}?api_key=${key}&${qs}`;
}

export default {getUrl};




