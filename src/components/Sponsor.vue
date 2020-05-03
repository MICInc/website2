<template>
	<div id="sponsor" class="sect">
    <h1>Sponsor</h1>
		<div class="content">
			<ul>
				<li v-for="(l,i) in latest" :key="i">{{ l.date }}  {{ l.content }}</li>
			</ul>
			<img class="crop" src="assets/img/sponsor.jpg">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'sponsor',
		data() {
			return {
				latest: [
					{"date": "5.1.2020", "content": "Lorem ipsum dolor sit amet, ac in eu, dictum rerum a libero. Ac amet.Lorem ipsum dolor sit amet, ac in eu, dictum rerum a libero. Ac amet."},
					{"date": "5.1.2020", "content": "Lorem ipsum dolor sit amet, ac in eu, dictum rerum a libero. Ac amet.Lorem ipsum dolor sit amet, ac in eu, dictum rerum a libero. Ac amet."}
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

.content ul {
	width: 50%;
	margin-right: 3em;
}

.content ul li {
	margin-bottom: 1em;
	line-height: 1.6;
}

.crop {
  width: 300px;
  height: auto;
  clip-path: circle();
}

@media screen and (max-width: 600px) {
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.content ul {
		margin: 0;
		width: 100%;
		text-align: center;
	}

	.sect {
		display: inline-block;
	}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
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

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

}
</style>
