<template>
	<div id="sponsor" class="sect">
    <h1>sponsor</h1>
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
h1 {
  text-transform: uppercase;
  font-weight: 500;
}

.sect {
	display: flex;
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

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
	.sect {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.content {
		margin: 0 4em;
	}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
	.sect {
		flex-direction: column;
	}

	.content {
		margin: 0;
	}
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
	.sect {
		margin: 0 4em;
	}
}
</style>
