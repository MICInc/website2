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
	left: 0;
	bottom: 0;
	height: 200px;
	color: #FFF;
	text-transform: uppercase;
}

@media screen and (max-width: 360px) {
	.sect {
		max-height: 100px;
		margin: 0;
	}

	#social-media {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
	}

	#social-media a {
		font-size: 1em;
		color: #FFF;
		margin-right: 1em;
	}
}
</style>