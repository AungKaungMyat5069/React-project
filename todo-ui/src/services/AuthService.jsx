import axios from "axios";


const Basic_URL = "http://localhost:8080/api/auth";


export const registerApi = registerDto => axios.post(Basic_URL + "/register", registerDto);

export const loginApiCall = (usernameOrEmail, password) => axios.post(Basic_URL + "/login", { usernameOrEmail, password });

export const storeToken = token => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");

export const logout = () => {
    localStorage.removeItem("token")
    sessionStorage.removeItem("authenticationUser")
};

export const saveUser = username => sessionStorage.setItem("authenticationUser", username );

export const isUserLoggedIn = () => {
   return sessionStorage.getItem("authenticationUser") == null ? false : true;
}
