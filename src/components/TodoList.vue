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
		goToTodoDetail(id) {
			this.$router.push({ name: "todo-detail", params: { id } });
		}
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
		<li v-for="elemento in computedList" :class="{ completed: elemento.completed }">
			<router-link :to="{ name: 'todo-detail', params: { id: elemento.id } }">{{ elemento.title }}</router-link> <button @click="e => { goToTodoDetail(elemento.id) }">Navigazione programmatica</button>
		</li>
	</ul>
</template>

<style scoped>
.completed {
	text-decoration: line-through;
	opacity: 0.7;
}
</style>