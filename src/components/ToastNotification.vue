<script>
import notificationStore from "../store/notificationStore"

export default {
	name: "ToastNotification",
	methods: {
		onClose() {
			this.notificationActions.hideMessage();
		}
	},
	computed: {
		notificationState() {
			return notificationStore.state();
		},
		notificationActions() {
			return notificationStore.actions();
		},
	},
	// updated() {
	// 	setTimeout(() => {
	// 		console.log("Chisura automatica");
	// 		this.notificationActions.hideMessage();
	// 	}, 1000);
	// }
}
</script>

<template>
	<div id="notification-wrapper" v-if="notificationState.isVisible" :class="[notificationState.type]">
		<button @click="onClose" v-if="notificationState.type == 'error'">Chiudi</button>
		<h3>{{ notificationState.title }}</h3>
		<p>{{ notificationState.msg }}</p>
	</div>
</template>

<style scoped>
#notification-wrapper {
	width: 20rem;
	height: 5rem;
	position: fixed;
	top: 0;
	right: 0;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
	flex-direction: column;
}

.error {
	background-color: crimson;
}

.info {
	background-color: cadetblue;
}
</style>