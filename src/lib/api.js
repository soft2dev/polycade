import axios from 'axios';
export const getMachines = () => axios.get('http://localhost:8080/machines')
export const putMachineName = (id, info) => axios.put(`http://localhost:8080/machines/${id}`, info);
