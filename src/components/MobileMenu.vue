<template>
	<div>
		<nav id="mobile-nav">
			<ul id="column-menu">
				<li><a href="#about" v-on:click="click()">about</a></li>
				<li><a href="#conference" v-on:click="click()">conference</a></li>
				<li><a href="#sponsor" v-on:click="click()">sponsor</a></li>
				<li><a href="#contact" v-on:click="click()">contact</a></li>
			</ul>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'mobile-menu',
	beforeMount() {
		var body = document.body;
		var nav = document.getElementById("main-nav");
		body.style.overflow = "hidden";
		nav.style.backgroundColor = "#FFF";
	},
	data() {
		return {
		}
	},
	methods: {
		click: function() {
			var body = document.body;
			body.style.overflow = "scroll";
			this.$emit('close', false);
		}
	}
}
</script>

<style scoped>
#mobile-nav {
	height: 100vh;
	background-color: #FFF;
	z-index: 2;
}

#column-menu {
	padding: 0 0 0 1em;
}

li {
	height: 20vh;
	font-size: 2em;
	text-align: center;
}

li a {
	color: #380E89;
}

</style>
