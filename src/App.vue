<script>
import SpinnerLoader from '@/components/SpinnerLoader.vue';
import ToastNotification from '@/components/ToastNotification.vue';
import AppHeader from './components/AppHeader.vue';

import loaderStore from "@/store/loaderStore"
// import notificationStore from "@/store/notificationStore"

export default {
	name: "App",
	components: {
		SpinnerLoader,
		ToastNotification,
		AppHeader
	},
	computed: {
		loaderActions() {
			return loaderStore.actions();
		}
	},
	mounted() {
		this.loaderActions.showLoader();
	}
}
</script>

<template>
	<AppHeader />
	<SpinnerLoader />
	<ToastNotification />
	<router-view />
	<div>footer esempio</div>
</template>

<style scoped></style>
