import decode from 'jwt-decode';
import axios from 'axios';
export default class AuthService {
    // Initializing important variables
    constructor() {
    
        this.fetch = this.fetch.bind(this) // React binding stuff
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)
    }

    async login(url,data) {
        // Get a token from api server using the fetch api
        const response = await this.fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        });
        this.setToken(response.token);
        const profile = await this.getProfile(response.token);
        console.log("profile",profile);
        // alert(profile);
        localStorage.setItem('name', profile.name);
        localStorage.setItem('email', profile.email);
        localStorage.setItem('type', profile.type);
        localStorage.setItem('uid', profile.userId);
        // Setting the token in localStorage
        return Promise.resolve(response);
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }

    setToken(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken)
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.clear();
        
    }

    getProfile() {
        // Using jwt-decode npm package to decode the token
        return decode(this.getToken());
    }


    fetch(url, options) {
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }

        // Setting Authorization header
        // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
        if (this.loggedIn()) {
            headers['Authorization'] = 'Bearer ' + this.getToken()
        }
        console.log("url",url);
        axios.post(url,{
            headers,
            ...options
        })
        .then(responce=>{
            console.log(responce);
        })
        .catch(err=>{
            console.log(err);
        })
        return fetch(url, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => response.json())
    }

    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}