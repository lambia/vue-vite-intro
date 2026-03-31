<script>
export default {
	name: "AppHeader"
}
</script>

<template>
	<header>
		<router-link :to="{ name: 'home' }">Home</router-link>
		&nbsp;-&nbsp;
		<router-link :to="{ name: 'todos' }">ToDo</router-link>
		&nbsp;-&nbsp;
		<router-link :to="{ name: 'about' }">About</router-link>
	</header>
</template>

<style>
a {
	color: aqua;
}
</style>