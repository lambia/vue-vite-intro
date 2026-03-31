// const axios = require('axios').default; //CJS
import axios from "axios"; //MJS/ESM

const BASE_URL = "https://jsonplaceholder.typicode.com/";
const ENTITY = "todos";
const ENDPOINT = BASE_URL + ENTITY;

const service = {

	index: () => {
		return axios.get(ENDPOINT);
	},

	show: (id) => {
		return axios.get(`${ENDPOINT}/${id}`);
	}

}

export default service;
