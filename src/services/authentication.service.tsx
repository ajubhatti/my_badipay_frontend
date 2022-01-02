import { BehaviorSubject } from 'rxjs';
import { apiUrl } from './apiUrl';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser') || '{}'));

export const authenticationService = {
    login,
    logout,
    updateUser,
    register,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(email : any, password : any) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };
    const loginUri = apiUrl.auth.login;
    return fetch(loginUri, requestOptions)
        .then(res=>res.json())
        .then(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);
            return user;
        });
}

function register(params : any) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    };
    const loginUri = apiUrl.auth.register;
    return fetch(loginUri, requestOptions)
        .then(res=>res.json())
        .then(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);
            return user;
        });
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}

function updateUser(data : any) {
    try{
        const  requestOptions = {
            method : 'GET',
            headers : {'Content-Type' : 'application/json'},
            body: JSON.stringify({data})
        }
        const forgotUrl = 'https://apiv1.bridgethings.com/usermanagement/api/metaservice/v1/send_password_link?email=padi.chiller@mailinator.com'
        
        return fetch(forgotUrl,requestOptions).then(res=>res.json());
    }catch(error){
        return error
    }    
}
