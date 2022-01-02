import { apiUrl } from "./apiUrl";


export const taskService = {
    create,
    update,
    deleteTask,
    getAll,
    getById,
    getByUserId,
};

function getByUserId(userId : any) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userId})
    };
    const taskListUrl = apiUrl.task.getByUserId;
    return fetch(taskListUrl, requestOptions)
        .then(res=>res.json())
        .then(data => {
            return data;
        });
}

function getById(id : any) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    const url = apiUrl.task.getById + `${id}`;
    return fetch(url, requestOptions)
        .then(res=>res.json())
        .then(data => {
            return data;
        });
}

function create(params : any) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    };
    const url = apiUrl.task.create;
    return fetch(url, requestOptions)
        .then(res=>res.json())
        .then(data => {
            return data;
        });
}

function update(id:any,params : any) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    };
    const url = apiUrl.task.update + `${id}`;
    return fetch(url, requestOptions)
        .then(res=>res.json())
        .then(data => {
            return data;
        });
}

function deleteTask(params : any) {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };
    const url = apiUrl.task.delete +`${params}`;
    return fetch(url, requestOptions)
        .then(res=>res.json())
        .then(data => {
            return data;
        });
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    const url = apiUrl.task.getAll;
    return fetch(url, requestOptions)
        .then(res=>res.json())
        .then(data => {
            return data;
        });
}