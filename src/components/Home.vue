<template>
	<div id="home" class="sect">
		<div class="about">
			<p>
				Our 501(c)(3) mission is to democratize machine intelligence.
			</p>
		</div>
		<div class="title-box">
			<h1>MACHINE</h1>
			<h1>INTELLIGENCE</h1>
			<h1>COMMUNITY</h1>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home'
	}
</script>

<style scoped>
.sect {
	display: flex;
	height: 500px;
}

.sect .about {
	width: 50%;
	margin-top: 8em;
	height: auto;
	padding: 0;
}

.sect .about p {
	padding: 0;
	margin: 0;
	font-size: 3em;
	background-color: blue;
}

.sect .title-box {
	flex-grow: 1;
	right: 0;
	width: 50%;
	margin: 8em 1em 0em 1em;
	background-color: red;
}

.sect .title-box h1 {
	font-size: 5em;
	font-weight: 500;
	margin: 0;
	text-align: right;
	color: #380E89;
}

/* Extra small devices (phones, 600px and down) */
@media screen and (max-width: 600px) {
	.sect {
		height: 350px;
		width: 90%;
		margin: 0;
		flex-wrap: wrap-reverse;
	}

	.sect .about {
		height: 60%;
		width: 100%;
		margin: 0;
	}

	.sect .about p {
		font-size: 1.5em;
	}

	.sect .title-box {
		max-height: 8em;
		width: 100%;
		margin: 0;
	}

	.sect .title-box h1 {
		font-size: 2.5em;
		text-align: left;
	}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

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
