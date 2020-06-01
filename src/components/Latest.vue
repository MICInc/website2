<template>
	<div id="latest" class="sect">
		<div class="header">
    	<h1>Latest</h1>
		</div>
		<div class="content">
			<ul>
				<li v-for="(l,i) in latest" :key="i">
					<span class="date">{{ l.date }}</span>
					<span class="update">{{ l.content }}</span>
				</li>
			</ul>
			<img class="crop" src="assets/img/students.jpg">
		</div>
	</div>
</template>

<script>
	import update from '@/json/updates.json'
	export default {
		name: 'latest',
		data() {
			return {
				latest: update
			}
		}
	}
</script>

<style scoped>
.header {
  display: flex;
}

.content {
	display:flex;
}

.content ul li {
	display: flex;
	flex-direction: column;
	margin-bottom: 1em;
}

.date {
	font-weight: 600;
}

.crop {
  width: 300px;
  height: auto;
  clip-path: circle();
}


/* Small devices (portrait tablets and large phones, 600px and up) */
@media screen and (max-width: 600px) {
	.header {
		display: flex;
		justify-content: center;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.content ul {
		margin: 0;
		width: 100%;
		text-align: left;
	}
}


/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
	.sect {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.content ul {
		margin: 0;
		width: 80%;
		text-align: left;
	}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
	.sect {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0;
		width: 100%;
	}

	.content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 0 4em;
	}

	.content ul {
		margin: 0;
		width: 50%;
		text-align: left;
	}
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
	.content {
		justify-content: space-between;
	}

	.content ul {
		margin: 0;
		width: 100%;
		text-align: left;
	}

	.sub_label {
		font-size: 1.5em;
		margin: 0em 2 2 0;
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

	.content ul {
		margin: 0 1em;
		width: 100%;
	}
}
</style>
