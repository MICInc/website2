<template>
	<div id="about" class="sect">
    <h1>Latest</h1>
		<div class="content">
			<p>
				MIC, Inc. is a 501(c)(3) non-profit organization focused on democratizing machine intelligence through education, research and community by providing opportunities to learn in a community environment, connect communities with resources and industry practitioners to foster the future leaders in machine intelligence.
			</p>
			<img class="crop" src="assets/img/kenneth.jpg">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'about'
	}
</script>

<style scoped>
h2 {
  text-transform: uppercase;
  font-weight: 500;
}

.header {
  display: flex;
}

.content {
	display:flex;
}

.crop {
  width: 550px;
  height: auto;
  clip-path: circle();
}

@media screen and (min-width: 1172px) {
	.sect p {
		width: 50%;
		line-height: 1.5em;
		margin-right: 4em;
		margin-bottom: 2em;
	}

	.sub_label {
		font-size: 1.5em;
		margin: 0em 2 2 0;
	}
}

@media screen and (max-width: 360px) {
	.sect {
		display: inline-block;
	}
}
</style>
