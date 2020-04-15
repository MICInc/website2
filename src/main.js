/*

*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

// export const bus = new Vue();

new Vue({
	el: '#vue-app',
	router,
	// store,
	render: h => h(App)
})