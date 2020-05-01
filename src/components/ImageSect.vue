<template>
	<div id="about" class="sect">
		<div class="content">
			<img class="crop" src="assets/img/kenneth.jpg">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'imagesect'
	}
</script>

<style scoped>
.content {
	display:flex;
}

.crop {
  width: 300px;
  height: auto;
  clip-path: circle();
}

@media screen and (min-width: 1172px) {
}

@media screen and (max-width: 360px) {
	.sect {
		display: inline-block;
	}
}
</style>
