import { apiUrl } from "./apiUrl";

const bannerUrl = `http://192.168.129.240:4000/banner`

export const bannerService = {
    getAllBanner,
    getBannerById,
    updateBanner,
}

function getAllBanner() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    const url = bannerUrl;
    return fetch(url, requestOptions)
        .then(res => res.json())
        .then(data => {
            return data;
        });
}
function getBannerById(id) {
    // return fetchWrapper.get(`${bankUrl}/${id}`)

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
    };
    const taskListUrl = apiUrl.banner.getById;
    return fetch(taskListUrl, requestOptions)
        .then(res => res.json())
        .then(data => {
            return data;
        });
}

function updateBanner(id, data) {
    // return fetchWrapper.put(`${bankUrl}/${id}`, data)

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const url = apiUrl.banner.create + `${id}`;
    return fetch(url, requestOptions)
        .then(res => res.json())
        .then(data => {
            return data;
        });
}

function deleteBanner(params) {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };
    const url = apiUrl.banner.delete + `${params}`;
    return fetch(url, requestOptions)
        .then(res => res.json())
        .then(data => {
            return data;
        });
}





