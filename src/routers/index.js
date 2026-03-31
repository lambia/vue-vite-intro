import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"

import HomeView from "@/views/HomeView.vue"
// import AboutView from "@/views/AboutView.vue"

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView
	},
	{
		path: "/about",
		name: "about",
		component: () => import("@/views/AboutView.vue") //lazy loading
	},
	{
		path: "/todos",
		name: "todos",
		component: () => import("@/views/TodoListView.vue") //lazy loading
	},
	{
		path: "/todos/:id",
		name: "todo-detail",
		component: () => import("@/views/TodoDetailView.vue"), //lazy loading
		props: true,
		meta: { requiresAuth: true }
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

router.beforeEach((to, from) => {

	console.log("Cambio rotta", from.href, "==>", to.href);

	const token = localStorage.getItem("token");

	if (to.meta.requiresAuth && !token) {
		return { name: "home" }
	}

});

export default router;