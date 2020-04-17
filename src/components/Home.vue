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
}

.sect .title-box {
	flex-grow: 1;
	right: 0;
	width: 50%;
	margin: 8em 1em 0em 1em;
}

.sect .title-box h1 {
	font-size: 5em;
	font-weight: 500;
	margin: 0;
	text-align: right;
	color: #380E89;
}

@media screen and (min-width: 1172px) {

}

@media screen and (max-width: 360px) {
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
</style>