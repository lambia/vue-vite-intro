<script>
import loaderStore from "@/store/loaderStore"

export default {
	name: "AboutView",
	mounted() {
		this.loaderActions.hideLoader();
	},
	computed: {
		loaderActions() {
			return loaderStore.actions();
		},
	}
}
</script>

<template>
	<h2>Pagina About</h2>
	<p>Pagina di esempio</p>
</template>