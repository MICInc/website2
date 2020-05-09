<template>
	<div id="sponsor" class="sect">
    <h1>our sponsors</h1>
		<h2>2018-2020</h2>
		<div class="content" v-for="(sect, i) in sponsors" :key="i">
			<h2>{{ i }}</h2>
			<a v-for="(sp, j) in sect" :key="j" :href="sp.href" target="_blank">
				<img class="crop" :src="'assets/img/'+sp.src">
			</a>
		</div>
	</div>
</template>

<script>
	import data from '@/json/sponsors.json'
	export default {
		name: 'sponsor',
		data() {
			return {
				sponsors: data
			}
		}
	}
</script>

<style scoped>
h1 {
  text-transform: uppercase;
  font-weight: 500;
	padding: 0;
	margin-bottom: 0;
}

h2 {
	margin: 0 0 1em 0;
	padding: 0;
	font-weight: 500;
	font-size: 2em;
}

.sect {
	display: flex;
}

.header {
  display: flex;
}

.content {
	display:flex;
	flex-wrap:wrap;
}

.content h2 {
	width: 100%;
	text-transform: uppercase;
	text-align: center;
	font-weight: 600;
}

.crop {
	max-height: 50px;
  max-width: 200px;
	margin: 0 20px 20px 0;
}

@media screen and (max-width: 600px) {
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
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
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0;
		padding: 0 4em;
	}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
	.sect {
		display: flex;
		flex-direction: column;
		margin: 0;
	}

	.content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
	.sect {
		display: flex;
		flex-direction: column;
		margin: 0;
	}

	.content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
	.sect {
		display: flex;
		flex-direction: column;
		margin: 0;
	}

	.content {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
}
</style>
