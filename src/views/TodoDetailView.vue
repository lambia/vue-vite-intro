<script>
import loaderStore from "@/store/loaderStore"
import notificationStore from "@/store/notificationStore"
import todoSrv from "@/services/ToDo"

export default {
	name: "TodoDetailView",
	props: {
		id: String //<-- non numero!
	},
	data() {
		return {
			todoItem: {},
			lastId: null,
		}
	},
	methods: {
		prova() {
			console.log("sposto rotta");
			this.$router.push({ name: "todo-detail", params: { id: 99 } });
		},
		altro() {
			console.log("sposto rotta");
			this.$router.push({ name: "todo-detail", params: { id: 100 } });
		},
		loadData() {
			todoSrv.show(this.id).then(result => {
				// console.log("Dati ricevuti!");
				this.todoItem = result.data;
				this.lastId = this.id;
			}).catch(error => {
				console.error("Ops... qualcosa è andato storto!");
			}).finally(() => {
				setTimeout(() => {
					this.loaderActions.hideLoader();
					this.notificationActions.showMessage("Pagina caricata", "Dati ricevuti correttamente", "info");
				}, 1000);
			});
		}
	},
	watch: {
		id(newId, oldId) {
			// console.log("Cambio di id: ", oldId, " => ", newId);
			this.loadData();
		}
	},
	computed: {
		loaderActions() {
			return loaderStore.actions();
		},
		notificationActions() {
			return notificationStore.actions();
		}
	},
	mounted() {
		console.log("mounted", this.id);

		this.loaderActions.showLoader();
		this.loadData();
	},
	// updated() {
	// 	if (this.lastId !== null && this.id != this.lastId) {
	// 		this.loadData();
	// 	}
	// }
}
</script>

<template>
	<h1>Dettaglio todo {{ id }}</h1>
	<h2>Task: {{ todoItem.title }}</h2>
	<h2>{{ todoItem.completed ? "Attività completata" : "Attività NON completata" }}</h2>
	<button @click="prova">prova</button>
	<button @click="altro">altro</button>
</template>