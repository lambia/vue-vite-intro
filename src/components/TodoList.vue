<script>
export default {
	name: "TodoList",
	props: ["list"],
	data() {
		return {
			todoList: []
		}
	},
	methods: {
	},
	computed: {
		computedList() {
			return this.list //.filter(todo => todo.id > 190)
		}
	},
	mounted() {
		// console.log(this.list);
		// console.log("Componente mounted", this.list.length);
		// this.todoList = this.list;
	},
	updated() {
		// console.log("Componente updated", this.list.length);
		// this.todoList = this.list;
	}
}
</script>

<template>
	<h2>ToDo List:</h2>
	<ul>
		<li v-for="elemento in computedList">{{ elemento.title }}</li>
	</ul>
</template>

<style scoped></style>