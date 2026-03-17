import { reactive, readonly } from "vue";

const _state = reactive({
	isVisible: false,
	title: "",
	msg: "",
	type: "",
});

function state() {
	return readonly(_state);
}

function actions() {

	function showMessage(title, msg, type) {
		_state.isVisible = true;
		_state.title = title;
		_state.msg = msg;
		_state.type = type;

		if (_state.type == "info") {
			setTimeout(hideMessage, 1000);
		}
	}

	function hideMessage() {
		_state.isVisible = false;
		_state.title = "";
		_state.msg = "";
		_state.type = "";
	}

	return { showMessage, hideMessage }

}

export default { actions, state };