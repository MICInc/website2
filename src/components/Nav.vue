<template>
	<div id="navbar">
		<nav id="main-nav" class="default-nav">
			<a id="nav-logo" href="#home"><img class="logo" src="assets/img/logo.png"></a>
			<ul id="menu">
				<li><a href="#latest">latest</a></li>
				<li><a href="#about">about</a></li>
				<li><a href="#conference">conference</a></li>
				<li><a href="#sponsor">sponsor</a></li>
				<li><a href="#social-media">contact</a></li>
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
				scroll_pos: null,
				width: -1
			}
		},
		methods: {
			toggle_mobile_menu(state) {
				this.menu = state;
				this.pancake = state;

				if(!state) {
					var body = document.body;
					body.style.overflow = "scroll";
				}

				if(!this.menu || !this.pancake) {
					let nav = document.getElementById("main-nav");
					nav.style.backgroundColor = "transparent";
				}
			},
			change_bg() {
				if(this.get_width() >= 600) {
					if(window.scrollY > 75) {
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
			/*
			source:
			https://stackoverflow.com/questions/1038727/how-to-get-browser-width-using-javascript-code
			*/
			get_width() {
				return Math.max(
					document.body.scrollWidth,
					document.documentElement.scrollWidth,
					document.body.offsetWidth,
					document.documentElement.offsetWidth,
					document.documentElement.clientWidth
				);
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

@media screen and (max-width: 600px) {
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

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
	#pancake {
		display: none;
	}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

}
</style>
