<script>
import TodoList from '@/components/TodoList.vue'
import AppSearch from '@/components/AppSearch.vue';

import loaderStore from "@/store/loaderStore"
import notificationStore from "@/store/notificationStore"

import todoSrv from "@/services/ToDo"

export default {
	name: "TodoListView",
	components: {
		TodoList,
		AppSearch
	},
	data() {
		return {
			todoList: [],
			searchString: "",
		}
	},
	methods: {
		gestisciRicerca(searchString) {
			console.log("Il padre ha rilevato ricerca dal figlio:", searchString);
			this.searchString = searchString;
		},
		createNotification() {
			this.notificationActions.showMessage("titolone", "descrizione", "error");
		}
	},
	mounted() {
		this.loaderActions.showLoader();

		todoSrv.index().then(result => {
			// console.log("Dati ricevuti!");
			this.todoList = result.data;
		}).catch(error => {
			console.error("Ops... qualcosa è andato storto!");
		}).finally(() => {
			setTimeout(() => {
				this.loaderActions.hideLoader();
				this.notificationActions.showMessage("Pagina caricata", "Dati ricevuti correttamente", "info");
			}, 1000);
		});
	},
	computed: {
		filteredTodoList() {

			if (!this.searchString || this.searchString.trim() == "") {
				return this.todoList;
			}

			return this.todoList.filter(elemento => elemento.title.includes(this.searchString));
		},
		loaderActions() {
			return loaderStore.actions();
		},
		notificationActions() {
			return notificationStore.actions();
		}
	},
}
</script>

<template>

	<h1>ToDo List</h1>

	<button @click="createNotification">Genera notifica</button>

	<AppSearch @search="gestisciRicerca" />
	<TodoList :list="filteredTodoList" />

</template>