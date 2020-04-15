<template>
	<div id="navbar">
		<nav id="main-nav" class="default-nav">
			<a id="home" href="#sect1"><img class="logo" src="img/logo.png"></a>
			<ul id="menu">
				<li><a href="#sect2">about</a></li>
				<li><a href="#sect3">conference</a></li>
				<li><a href="#sect4">contact</a></li>
				<li><a href="javascript:void(0);" class="icon" onclick="respond_navbar()"><i class="fa fa-bars"></i></a></li>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'nav'
	}
</script>

<style scoped>
.default-nav {
	width: 100%;
	background: #fff;
	overflow: hidden;
	position: fixed;
	top: 0;
	background-color: transparent;
}

.default-nav ul {
	float: right;
}

.default-nav ul li {
	margin-top: 1em;
}

.default-nav ul li a {
	float: right;
	text-align: right;
	padding-right: 1em;
}

.default-nav ul li a.active {
	background-color: #4CAF50;
	color: white;
}

.default-nav .icon {
	display: none
}

.logo {
	width: 50px;
	height: 50px;
}

#home {
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
</style>