const baseUrl = process.env.apiUrl;

export const apiUrl = {
    auth: {
        login: `${baseUrl}users/authenticate`,
        register: `${baseUrl}users/register`,
        getAll: `${baseUrl}users/authenticate`,
        update: `${baseUrl}users`
    },
    task: {
        getAll: `${baseUrl}task/`,
        getById: `${baseUrl}task/`,
        getByUserId: `${baseUrl}task/dashboard`,
        update: `${baseUrl}task/`,
        delete: `${baseUrl}task/`,
        create: `${baseUrl}task/create`
    },
    account: {
        register: `${baseUrl}accounts/register`,
        authenticate: `${baseUrl}accounts/authenticate`
    },
    banner: {
        getAll: `${baseUrl}banner`,
        create: `${baseUrl}banner`,
        getById: `${baseUrl}banner`,
        delete: `${baseUrl}banner`,
    }

}