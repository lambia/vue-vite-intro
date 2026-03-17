<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList.vue'
import AppSearch from './components/AppSearch.vue';
import SpinnerLoader from './components/SpinnerLoader.vue';
import ToastNotification from './components/ToastNotification.vue';

import todoSrv from "./services/ToDo"
import loaderStore from "./store/loaderStore"
import notificationStore from "./store/notificationStore"

export default {
	name: "App",
	data() {
		return {
			todoList: [],
			searchString: "",
		}
	},
	components: {
		// HelloWorld
		TodoList,
		AppSearch,
		SpinnerLoader,
		ToastNotification
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
	mounted() {
		// console.log("Componente app montato");

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
	}
}
</script>

<template>
	<h1>Benvenuto in Vue+Vite</h1>

	<SpinnerLoader />
	<ToastNotification />

	<button @click="createNotification">Genera notifica</button>

	<!-- <p>{{ numero }}</p> -->
	<!-- <HelloWorld msg="Messaggio dal padre" /> -->
	<AppSearch @search="gestisciRicerca" />

	<TodoList :list="filteredTodoList" />
</template>

<style scoped></style>
