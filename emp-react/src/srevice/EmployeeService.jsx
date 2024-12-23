import axios from "axios";


const EMPLOYEE_API_URL = "http://localhost:8080/api/employee";

export const getAllEmployees = () => axios
    .get(EMPLOYEE_API_URL+'/all');
export const createEmployee = (employee) => axios
    .post(EMPLOYEE_API_URL+"/all",employee);
export const findEmployeeId = (id) => axios.get(EMPLOYEE_API_URL+ "/" + id)
export const editEmployee = (id, employee) => axios.put(EMPLOYEE_API_URL + "/" + id, employee)
export const deleteEmployee = (id) => axios.delete(EMPLOYEE_API_URL + "?id=" + id)