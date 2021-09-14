import axios from 'axios';

// const Url = 'http://localhost:3003/users';
const Url = 'http://localhost:3003';

export const getEmployees = async (id) => {
    id = id || '';
    return await axios.get(`${Url}/${id}`);
}

export const addEmployee = async (employee) => {
    console.log(employee);
    return await axios.post(`${Url}/add`, employee);
}

export const deleteEmployee = async (id) => {
    return await axios.delete(`${Url}/${id}`);
}

export const editEmployee = async (id, employee) => {

    return await axios.put(`${Url}/${id}`, employee)
}