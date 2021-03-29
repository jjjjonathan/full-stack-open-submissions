import axios from "axios";
const url = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(url);
};

const create = (newObject) => {
  return axios.post(url, newObject);
};

const deleteEntry = (id) => {
  return axios.delete(`${url}/${id}`);
};

// eslint-disable-next-line
export default { getAll, create, deleteEntry };
