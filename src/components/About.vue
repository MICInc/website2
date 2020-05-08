<template>
	<div id="about" class="sect">
		<h1>about</h1>
		<div class="content">
			<p v-for="(l,i) in about" :key="i">
				<span class="sub_label">{{ l.heading }}</span>&emsp;{{ l.text }}
			</p>
		</div>
		<div class="board">
			<h1>Board of Directors</h1>
			<div class="director">
				<div class="info" v-for="(d,i) in bod" :key="i">
					<img class="crop" :src="'assets/img/'+d.img">
					<h2><a :href="d.contact" target="_blank">{{ d.name }}</a></h2>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import content from '@/json/about.json'
	import board from '@/json/bod.json'
	export default {
		name: 'about',
		data() {
			return {
				about: content,
				bod: board
			}
		}
	}
</script>

<style scoped>
.content {
	display:flex;
}

.crop {
  width: 100px;
  height: auto;
  clip-path: circle();
}

@media screen and (max-width: 600px) {
	.content {
			flex-direction: column;
	}

	.content p {
		display: flex;
		flex-direction: column;
		margin-bottom: 1em;
		text-align: center;
	}

	.sub_label {
		font-weight: 600;
		margin-bottom: 10px;
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
		flex-direction: column;
	}

	.content p {
		margin: 0 4em 1em 4em;
	}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
	.content p {
		margin: 0;
		padding: 0 4em;
		margin-bottom: 1em;
	}
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
	.content {
			flex-direction: row;
	}

	.content p {
		width: 100%;
	}

	.sub_label {
		font-size: 1.5em;
		margin: 0em 2 2 0;
	}
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
	.content {
		display: flex;
		flex-direction: row;
	}

	.content p {
		margin: 0;
		padding: 0 4em;
	}

	.director {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 4em;
	}

	.director .info {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.director .info h2 {
		font-weight: 600;
		font-size: 1.2em;
		text-transform: uppercase;
	}

	.director .info p {
		text-align: center;
	}
}
</style>
