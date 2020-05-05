<template>
	<div id="footer" class="sect">
		<ul id="social-media">
			<li><a href="https://www.facebook.com/miconference">Facebook</a></li>
			<li><a href="https://medium.com/machine-intelligence-conference">Medium</a></li>
			<li><a href="https://www.reddit.com/user/MICInc">Reddit</a></li>
			<li><a href="https://twitter.com/mic_conf">Twitter</a></li>
			<li><a href="https://www.youtube.com/channel/UCEkwg51OD930FsyTx7bV0Pg">YouTube</a></li>
		</ul>
		<p>&copy; {{ year }}</p>
	</div>
</template>

<script>
export default {
	name: 'foot',
	data() {
		return {
			year: new Date().getFullYear()
		}
	}
}
</script>

<style scoped>
.sect {
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: column;
	left: 0;
	bottom: 0;
	height: 200px;
	color: #FFF;
	text-transform: uppercase;
	margin-top: 3em;
}

#social-media {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

#social-media a {
	font-size: 1em;
	color: #FFF;
	margin-right: 1em;
}
.sect p {
		text-align: center;
	}

@media screen and (max-width: 600px) {
	.sect {
		max-height: 100px;
		margin: 0;
	}

	#social-media {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.sect p {
		text-align: center;
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
	.sect {
		margin: 0;
		padding: 0;
		width: 100%;
	}
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

}
</style>
