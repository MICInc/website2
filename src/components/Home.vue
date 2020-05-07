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
	margin: 0;
	display: flex;
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
}

.sect .title-box {
	right: 0;
	width: 50%;
	margin: 8em 1em 0em 1em;
}

.sect .title-box h1 {
	font-size: 5em;
	font-weight: 500;
	margin: 0;
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
	.sect {
		flex-direction: column-reverse;
		align-items: center;
		width: 100%;
		padding-top: 6.7em;
		margin-bottom: 5em;
	}

	.sect .about {
		width: 50%;
		margin: 0;
	}

	.sect .about p {
		font-size: 2em;
	}

	.sect .title-box {
		width: 50%;
		margin: 0;
	}

	.sect .title-box h1 {
		font-size: 4em;
		text-align: left;
	}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
	.sect {
		margin: 0;
		display: flex;
		flex-direction: column-reverse;
		justify-content: center;
		padding: 6em 4em 0 4em;
		margin: 3em 0 4em 0;
	}

	.sect .about {
		width: 50%;
		margin: 0;
	}

	.sect .about p {
		font-size: 2em;
	}

	.sect .title-box {
		width: 50%;
	}
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
	.sect {
		display: flex;
		flex-direction: row;
		padding: 6em 0 4em 4em;
		margin: 0;
	}

	.sect .about {
		width: 40%;
	}

	.about p {
		font-size: 2em;
	}

	.sect .title-box {
		width: 40%;
	}

	.sect .title-box h1 {
		text-align: right;
	}
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
	.sect {
		display: flex;
		flex-direction: row;
		padding: 7em 0 2em 0;
		margin: 0;
		justify-content: center;
	}

	.sect .title-box {
		width: 40%;
	}

	.sect .title-box h1 {
		font-size: 5em;
		font-weight: 500;
		margin: 0;
		text-align: right;
		color: #380E89;
	}

	.sect .about {
		width: 40%;
		margin: 0;
	}

	.sect .about p {
		font-size: 2em;
	}

	.sect .title-box {
		width: 50%;
	}

	.sect .title-box h1 {
		text-align: right;
	}
}
</style>
