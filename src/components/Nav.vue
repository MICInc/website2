<template>
	<div id="navbar">
		<nav id="main-nav" class="default-nav">
			<a id="nav-logo" href="#home"><img class="logo" src="assets/img/logo.png"></a>
			<ul id="menu">
				<li><a href="#about">about</a></li>
				<li><a href="#conference">conference</a></li>
				<li><a href="#contact">contact</a></li>
			</ul>
			<Pancake
				id="pancake"
				:close="pancake"
				v-on:change="toggle_mobile_menu($event)">
			</Pancake>
		</nav>
		<MobileMenu
			id="mobile_menu"
			v-if="this.menu"
			v-on:close="toggle_mobile_menu($event)">
		</MobileMenu>
	</div>
</template>

<script>
	import Pancake from '@/components/Pancake'
	import MobileMenu from '@/components/MobileMenu'

	export default {
		name: 'navbar',
		components: {
			Pancake,
			MobileMenu
		},
		data() {
			return {
				pancake: false,
				menu: false,
				scroll_pos: null
			}
		},
		methods: {
			toggle_mobile_menu(state) {
				this.menu = state;
				this.pancake = state;

				if(!this.menu || !this.pancake) {
					let nav = document.getElementById("main-nav");
					nav.style.backgroundColor = "transparent";
				}
			},
			change_bg() {
				if(window.scrollY > 93) {
					let menu = document.getElementById("menu");
					menu.style.display = "none";
					document.getElementById("main-nav").style.pointerEvents = "none";
					document.getElementById("nav-logo").style.pointerEvents = "all";
				}
				else {
					let menu = document.getElementById("menu");
					menu.style.display = "block";
					document.getElementById("main-nav").style.zIndex = 2;
					document.getElementById("main-nav").style.pointerEvents = "all";
				}
			}
		},
		mounted() {
			window.addEventListener('scroll', this.change_bg);
		},
	}
</script>

<style scoped>
#main-nav {
	z-index: 2;
}

.default-nav {
	width: 100%;
	overflow: hidden;
	position: fixed;
	top: 0;
	background-color: transparent;
}

#main-nav ul {
	float: right;
}

#main-nav ul li {
	margin-top: 1em;
}

#main-nav ul li a {
	float: right;
	text-align: right;
	padding-right: 1em;
}

#main-nav ul li a.active {
	background-color: #4CAF50;
	color: white;
}

#main-nav .icon {
	display: none
}

.logo {
	width: 50px;
	height: 50px;
}

#nav-logo {
	margin: 1em 0 0 1em;
	padding: 0;
	float: left;
}

ul {
	padding: 0;
	margin: 0;
	list-style: none;
	float: right;
}

li {
	float: left;
}

#menu li a:hover {
	color: #7356AC;
	transition: 0.5s ease;
	-webkit-transition: color 0.5s ease-in-out;
	-moz-transition: color 0.5s ease-in-out;
	-ms-transition: color 0.5s ease-in-out;
	-o-transition: color 0.5s ease-in-out;
	transition: color 0.5s ease-in-out;
}

#pancake {
	display: none;
}

@media screen and (max-width: 360px) {
	.default-nav {
		padding: 10px 0;
		position: initial;
	}

	#menu {
		display: none;
		min-height: 100%;
		width: 100%;
		margin-top: 5em;
		position: fixed;
		transition: 0.3s ease;
		padding: 0;
	}

	#menu li {
		margin: 1em;
		list-style: none;
		text-align: left;
	}

	#menu a {
		font-size: 2em;
		font-weight: 500;
		text-transform: uppercase;
		opacity: 1;
	}

	#menu a:link {
		color: black;
	}

	#menu a:visited {
		color: #380E89;
	}

	#pancake {
		z-index: 1;
		float: right;
		display: block;
		position: absolute;
		right: 20px;
		top: 5px;
		padding: 20px 0;
		cursor: pointer;
	}
}
</style>
