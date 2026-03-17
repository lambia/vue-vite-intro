import { reactive, readonly } from "vue";

const _state = reactive({
	isLoading: false
});

function state() {
	return readonly(_state);
}

function actions() {

	return {
		showLoader() {
			_state.isLoading = true;
		},
		hideLoader() {
			_state.isLoading = false;
		}
	}

}

export default { actions, state };