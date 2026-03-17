<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList.vue'
import AppSearch from './components/AppSearch.vue';

// const axios = require('axios').default; //CJS
import axios from "axios"; //MJS/ESM

export default {
	name: "App",
	data() {
		return {
			apiUrl: "https://jsonplaceholder.typicode.com/todos",
			todoList: [],
			searchString: "",
		}
	},
	components: {
		// HelloWorld
		TodoList,
		AppSearch
	},
	methods: {
		gestisciRicerca(searchString) {
			console.log("Il padre ha rilevato ricerca dal figlio:", searchString);
			this.searchString = searchString;
		}
	},
	computed: {
		filteredTodoList() {

			if (!this.searchString || this.searchString.trim() == "") {
				return this.todoList;
			}

			return this.todoList.filter(elemento => elemento.title.includes(this.searchString));
		}
	},
	mounted() {
		// console.log("Componente app montato");

		axios.get(this.apiUrl).then(result => {
			// console.log("Dati ricevuti!");
			this.todoList = result.data;
		});
	}
}
</script>

<template>
	<h1>Benvenuto in Vue+Vite</h1>

	<!-- <p>{{ numero }}</p> -->
	<!-- <HelloWorld msg="Messaggio dal padre" /> -->
	<AppSearch @search="gestisciRicerca" />

	<TodoList :list="filteredTodoList" />
</template>

<style scoped></style>
