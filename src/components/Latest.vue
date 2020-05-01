<template>
	<div id="about" class="sect">
    <h1>Latest</h1>
		<div class="content">
			<ul>
				<li v-for="(l,i) in latest" :key="i">{{ l.date }}{{ l.content }}</li>
			</ul>
			<img class="crop" src="assets/img/alums.jpg">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'latest',
		data() {
			return {
				latest: [
					{"date": "Today", "content": "Lorem ipsum dolor sit amet, ac in eu, dictum rerum a libero. Ac amet. Placerat lorem velit id lorem sit, eros at eget enim, vestibulum diam imperdiet vitae suscipit nonummy, tempus sed consequat enim ligula sit at, fusce justo cras nulla et. Non sit mauris mi in, sed nullam, proin lectus erat. Semper nostra in mi adipiscing at, natoque in, sed nunc. Donec turpis mauris elit morbi praesent mauris, pharetra pharetra. Velit adipiscing in gravida tellus faucibus, tempus cras, risus tellus id lacus. Suspendisse morbi mattis sed convallis ac, leo ut mauris nunc, justo id gravida turpis purus necessitatibus auctor, nunc neque. Pede sed est eleifend quisque, ultrices donec integer suscipit enim gravida ornare, laoreet elementum, urna est euismod risus massa tortor. "}
				]
			}
		}
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

.content ul li {
	width: 50%;
}

.crop {
  width: 700px;
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
