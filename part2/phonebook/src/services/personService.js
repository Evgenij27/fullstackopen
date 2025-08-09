import axios from "axios";

const BASE_URL = "http://localhost:3001/persons";

const all = () => {
  return axios.get(BASE_URL).then((resp) => resp.data);
};

const create = (person) => {
  return axios.post(BASE_URL, person).then((resp) => resp.data);
};

export default {
  all: all,
  create: create,
};
