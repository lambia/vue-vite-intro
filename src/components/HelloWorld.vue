<script>
export default {
	name: "HelloWorld",
	data() {
		return {
			count: 0
		}
	},
	methods: {
		faiCose() {
			console.log("Faccio cose vedo gente");
		},
		incrementaContatore() {
			this.count++;
		}
	},
	mounted() {
		console.log("Componente helloworld montato");
	}
}
</script>

<template>
	<button @click="incrementaContatore">You clicked me {{ count }} times.</button>
</template>

<style scoped></style>