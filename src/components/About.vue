<template>
	<div id="about" class="sect">
		<h1>about</h1>
		<div class="content">
			<p v-for="(l,i) in about" :key="i">
				<span class="sub_label">{{ l.heading }}</span>&emsp;{{ l.text }}
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'about',
		data() {
			return {
				about: [
					{'heading': 'Mission', 'text': 'MIC, Inc. is a 501(c)(3) non-profit organization focused on democratizing machine intelligence through education, research and community by providing opportunities to learn in a community environment, connect communities with resources and industry practitioners to foster the future leaders in machine intelligence.'},
					{'heading': 'History', 'text': 'Machine Intelligence Community, Inc. (MIC) originated from the MIT Machine Learning Reading Group, which was formed by undergraduate students in 2016 looking for an environment to learn about research advances in machine learning outside the classroom. Three years later, MIC, Inc. helped develop four successful student communities at MIT, Boston University, Harvard College and SRM Institute of Science and Technology, which are now independently leading their own initiatives separate from the nonprofit.'}
				]
			}
		}
	}
</script>

<style scoped>
.content {
	display:flex;
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
}
</style>
