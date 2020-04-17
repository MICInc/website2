<template>
	<div :class="{ default: true, expand: state }" 
		v-on:click.prevent="toggle()">
		<div class="bar1"></div>
		<div class="bar2"></div>
		<div class="bar3"></div>
	</div>
</template>

<script>
export default {
	name: 'pancake',
	data() {
		return {
			state: false
		}
	},
	methods: {
		toggle() {
			this.state = !this.state;
			this.$emit('change', this.state);
		}
	},
	props: ['close'],
	watch: {
		close: {
			deep: true,
			immediate: true,
			handler(curr, prev) {
				this.state = curr;
			}
		}
	}
}
</script>

<style scoped>
.default {
	cursor: pointer;
}

.bar1, .bar2, .bar3 {
	width: 35px;
	height: 5px;
	background-color: #380E89;
	margin: 6px 0;
	transition: 0.4s;
	border-radius: 5px;
	transition: 0.3s ease;
}

.expand .bar1 {
	-webkit-transform: translateY(10px) rotateZ(-45deg);
	transform: translateY(10px) rotateZ(-45deg);
}

.expand .bar2 {
	opacity: 0;
}

.expand .bar3 {
	-webkit-transform: translateY(-10px) rotate(45deg);
	transform: translateY(-10px) rotate(45deg);
}
</style>