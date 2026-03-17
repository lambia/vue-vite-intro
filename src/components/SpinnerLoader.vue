<script>
import loaderStore from "../store/loaderStore"

export default {
	name: "SpinnerLoader",
	computed: {
		loaderState() {
			return loaderStore.state();
		}
	}
}
</script>

<template>
	<div id="loader-wrapper" v-if="loaderState.isLoading">
		<p>Pagina in caricamento</p>
	</div>
</template>

<style scoped>
#loader-wrapper {
	background-color: crimson;
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
}
</style>