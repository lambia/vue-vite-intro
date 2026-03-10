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
			filteredTodoList: []
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

			const condizione = !searchString || searchString.trim() == "";

			if (condizione) {
				this.filteredTodoList = this.todoList;
			} else {
				this.filteredTodoList = this.todoList.filter(elemento => elemento.title.includes(searchString));
			}

			// this.filteredTodoList = condizione ? this.todoList : this.todoList.filter(x => x.title.includes(searchString));
		}
	},
	mounted() {
		// console.log("Componente app montato");

		axios.get(this.apiUrl).then(result => {
			// console.log("Dati ricevuti!");
			this.todoList = result.data;
			this.filteredTodoList = result.data;
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
