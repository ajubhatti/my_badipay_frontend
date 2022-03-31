import { apiUrl } from "./apiUrl";

const baseUrl = `http://192.168.129.240:4000/ticker`;

export const tickerService = {
    create,
    update,
    deleteTask,
    getAll,
};


function create(params) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    };
    const url = apiUrl.ticker.create;
    return fetch(url, requestOptions)
        .then(res => res.json())
        .then(data => {
            return data;
        });
}

function update(id, params) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    };
    const url = apiUrl.ticker.update + `${id}`;
    return fetch(url, requestOptions)
        .then(res => res.json())
        .then(data => {
            return data;
        });
}

function deleteTask(params) {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };
    const url = apiUrl.ticker.delete + `${params}`;
    return fetch(url, requestOptions)
        .then(res => res.json())
        .then(data => {
            return data;
        });
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    const url = baseUrl;
    return fetch(url, requestOptions)
        .then(res => res.json())
        .then(data => {
            return data;
        });
}