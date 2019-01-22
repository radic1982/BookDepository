import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

// get('url', { params: { category: 'abc', title: 'title', page: 1}})

export const get = (relativeUrl, params, config) => {
    return axios.get(getFullUrl(relativeUrl), params, config);
}

export const post = (relativeUrl, data, config) => {
    return axios.post(getFullUrl(relativeUrl), data, config);
}


export const put = (relativeUrl, data, config) => {
    return axios.put(getFullUrl(relativeUrl), data, config);

}
export const remove = (relativeUrl, config) => {
    return axios.delete(getFullUrl(relativeUrl), config);
}


const getFullUrl = (relativeUrl) => {
    return `${BASE_URL}/${relativeUrl}`;
}
