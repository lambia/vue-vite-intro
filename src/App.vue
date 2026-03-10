<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList.vue'

// const axios = require('axios').default; //CJS
import axios from "axios"; //MJS/ESM

export default {
	name: "App",
	data() {
		return {
			apiUrl: "https://jsonplaceholder.typicode.com/todos",
			todoList: []
		}
	},
	components: {
		// HelloWorld
		TodoList
	},
	methods: {
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
	<TodoList :list="todoList" />
</template>

<style scoped></style>
