import { BehaviorSubject } from 'rxjs';
import { fetchWrapper } from '../helpers/fetch-wrapper';
import { history } from '../helpers/history';

const userSubject = new BehaviorSubject(null);
// const baseUrl = `${config.apiUrl}/service`;

const baseUrl = `http://192.168.123.240:4000/service`;


console.log("base url ---", baseUrl)

export const servicesService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete,
};

function _delete(id) {
    try {
        return fetchWrapper.delete(`${baseUrl}/${id}`)
            .then(x => {
                return x;
            });
    } catch (err) {
        return err
    }

}


function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    const url = baseUrl + `${id}`;
    return fetch(url, requestOptions)
        .then(res => res.json())
        .then(data => {
            return data;
        });
}

function create(params) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    };
    const url = baseUrl;
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
    const url = baseUrl + `${id}`;
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
    const url = baseUrl + `${params}`;
    return fetch(url, requestOptions)
        .then(res => res.json())
        .then(data => {
            return data;
        });
}

function getAll() {
    try {
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
    } catch (err) {
        return err
    }

}