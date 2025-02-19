import axios from "axios";
import { getToken } from "./AuthService";

const BASIC_URL = 'http://localhost:8080/api/todo';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.Authorization = getToken();
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

export const getAllTodos = () => axios.get(BASIC_URL);

export const createTodo = (todo) => axios.post(BASIC_URL, todo);

export const getTodoById = (id) => axios.get(BASIC_URL + `/` + id);

export const updateTodo = (id, todo) => axios.put(BASIC_URL + `/` + id, todo);

export const deleteTodobyId = (id) => axios.delete(BASIC_URL + `/` + id);

export const completeTodobyId = (id) => axios.patch(`${BASIC_URL}/${id}/complete`);
// http://localhost:8080/api/todo/1/complete

export const unCompleteTodobyId = (id) => axios.patch(`${BASIC_URL}/${id}/uncompleted`);
// http://localhost:8080/api/todo/1/uncompleted 