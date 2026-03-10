<script>
export default {
	name: "AppSearch",
	emits: [
		"search"
	],
	data() {
		return {
			searchString: ""
		}
	},
	methods: {
		gestisciRicerca() {
			console.log("Avviare ricerca per: ", this.searchString);
			this.$emit("search", this.searchString);
		}
	},
	mounted() {
	}
}
</script>

<template>
	<input type="text" placeholder="Ricerca..." v-model="searchString" @keyup="gestisciRicerca" />
</template>

<style scoped></style>