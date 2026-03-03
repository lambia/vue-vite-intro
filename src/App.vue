<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
	name: "App",
	data() {
		return {
			// numero: 42
		}
	},
	components: {
		// HelloWorld
	},
	methods: {},
	mounted() {
		console.log("Componente app montato");
	}
}
</script>

<template>
	<h1>Benvenuto in Vue+Vite</h1>
	<!-- <p>{{ numero }}</p> -->
	<!-- <HelloWorld msg="Messaggio dal padre" /> -->
</template>

<style scoped></style>
