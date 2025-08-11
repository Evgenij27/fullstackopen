import axios from "axios";

const BASE_URL = "http://localhost:3001/persons";

const all = () => {
  return axios.get(BASE_URL).then((resp) => resp.data);
};

const create = (person) => {
  return axios.post(BASE_URL, person).then((resp) => resp.data);
};

const deletePerson = (id) => {
  return axios.delete(`${BASE_URL}/${id}`).then((resp) => resp);
};

const update = (person) => {
  return axios
    .put(`${BASE_URL}/${person.id}`, person)
    .then((resp) => resp.data);
};

export default {
  all: all,
  create: create,
  deletePerson: deletePerson,
  update: update,
};
