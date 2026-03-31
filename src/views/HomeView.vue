<script>
import loaderStore from "@/store/loaderStore"

export default {
	name: "HomeView",
	mounted() {
		this.loaderActions.hideLoader();
	},
	computed: {
		loaderActions() {
			return loaderStore.actions();
		},
	},
}
</script>

<template>
	<h2>Pagina Home</h2>
	<p>Pagina di esempio</p>
</template>