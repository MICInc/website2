<template>
	<div id="about" class="sect">
		<h1>about</h1>
		<div class="content">
			<p>
				<span class="sub_label">Mission</span>&emsp;MIC, Inc. is a 501(c)(3) non-profit organization focused on democratizing machine intelligence through education, research and community by providing opportunities to learn in a community environment, connect communities with resources and industry practitioners to foster the future leaders in machine intelligence.
			</p>
			<p>
				<span class="sub_label">History</span>&emsp;Machine Intelligence Community, Inc. (MIC) originated from the MIT Machine Learning Reading Group, which was formed by undergraduate students in 2016 looking for an environment to learn about research advances in machine learning outside the classroom. Three years later, MIC, Inc. helped develop four successful student communities at MIT, Boston University, Harvard College and SRM Institute of Science and Technology, which are now independently leading their own initiatives separate from the nonprofit.
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'about'
	}
</script>

<style scoped>
.content {
	display:flex;
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
