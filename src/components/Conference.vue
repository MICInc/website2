<template>
	<div id="conference" class="sect">
		<div class="header-sect">
			<h1 class="compress-header">virtual machine intelligence conference</h1>
			<a href="/register" target="_blank"><button class="btn">register</button></a>
		</div>
		<div class="content">
			<p>
				Lorem ipsum dolor sit amet, ac in eu, dictum rerum a libero. Ac amet. Placerat lorem velit id lorem sit, eros at eget enim, vestibulum diam imperdiet vitae suscipit nonummy, tempus sed consequat enim ligula sit at, fusce justo cras nulla et. Non sit mauris mi in, sed nullam, proin lectus erat. Semper nostra in mi adipiscing at, natoque in, sed nunc. Donec turpis mauris elit morbi praesent mauris, pharetra pharetra. Velit adipiscing in gravida tellus faucibus, tempus cras, risus tellus id lacus. Suspendisse morbi mattis sed convallis ac, leo ut mauris nunc, justo id gravida turpis purus necessitatibus auctor, nunc neque. Pede sed est eleifend quisque, ultrices donec integer suscipit enim gravida ornare, laoreet elementum, urna est euismod risus massa tortor.
			</p>
			<p>
				Fusce enim metus ultrices donec, donec magna. Consectetuer vero ac sapien, elit leo vel, dictum egestas. Tempor erat ac. Amet adipiscing rutrum in erat ut, mauris ante, integer mauris netus, felis ultrices in dolor pede turpis. Non vestibulum viverra vestibulum in, nam et dolor mi, sodales posuere arcu non vestibulum et, adipiscing lacus quam proin quisque.
			</p>
			<p>
				Voluptatem atque proin ut sit repudiandae. Nulla sit. Erat enim sed amet elit vestibulum, porta ut diam etiam maecenas wisi at, condimentum eget a, quis dui quis, turpis quidem id ut. Sed sem ac, a lectus pede sed. Mattis donec lorem id bibendum consequat, sed justo convallis arcu interdum lectus, cras ut semper proin sed vestibulum.
	    </p>
			<p>
				Magna nec convallis ultrices eu sem, ante sem morbi lorem mauris tortor dui, fermentum ut. Vitae metus orci, nulla purus, dapibus nunc. Fames felis libero nulla leo natoque amet, viverra nunc, tellus nam sociis, sed interdum viverra dolor risus voluptas. Mauris vulputate, arcu volutpat lectus fermentum ornare ut id, a pellentesque. A amet augue natoque, nullam velit amet, vestibulum nulla exercitation. Libero eros lectus. Nec a libero, sed phasellus lorem justo ultrices proin etiam, quibusdam nunc. Massa proin hendrerit sapien adipiscing luctus tristique, nulla cursus imperdiet convallis.
			</p>
		</div>
		<div class="committee">
			<span class="sub_label">Conference Committee</span>
			<ul>
				<li v-for="(c, i) in committee" :key="i">
					<span class="name">{{ c.name }}</span>
					<span class="title">{{ c.title }}</span>
				</li>
			</ul>
		</div>
		<p class="code_of_conduct">
			<a href="https://confcodeofconduct.com/" target="_blank">Code of Conduct</a>
		</p>
	</div>
</template>

<script>
	export default {
		name: 'conference',
		data() {
			return {
				committee: [
					{'name': 'Justin Chen', 'title': 'General Chair'},
					{'name': 'Lucia Vilallonga', 'title': 'Program Chair & Diversity-Inclusion Chair'},
					{'name': 'Sree Harsha Nelaturu', 'title': 'Program Chair & Logistics Chair'}
				]
			}
		}
	}
</script>

<style scoped>
.sect {
	display: flex;
	flex-direction: column;
	margin-bottom: 2em;
}

.compress-header {
	width: 30%;
}

.header-sect {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}

.header-sect button {
	display: block;
	width: 17em;
	height: 5em;
	text-transform: uppercase;
	font-weight: 600;
	font-size: 1em;
	background-color: transparent;
	color: #FFF;
	border-width: 3px;
	border: 2px solid #FFF;
	border-style: solid;
	border-radius: 25px;
}

.header-sect button:hover {
	cursor: pointer;
}

.content {
	-webkit-column-count: 2;
	-moz-column-count: 2;
	column-count: 2;
	-webkit-column-gap: 20px;
	-moz-column-gap: 20px;
	column-gap: 20px;
}

.committee {
	display: flex;
	flex-direction: column;
	padding-right: 4em;
}

.committee ul li {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 10px 0;
}

.sub_label {
	font-weight: 600;
	margin-top: 1.5em;
	text-align: center;
}

.name {
	font-weight: 600;
}

.title {
	text-align: right;
}

.code_of_conduct {
	text-align: center;
	font-size: 1.5em;
}

.code_of_conduct a {
	color: #FFF;
}

@media screen and (max-width: 600px) {
	.compress-header {
			width: 100%;
	}

	.header-sect {
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
	}

	.content {
		display: flex;
		flex-direction: column;
	}

	.content ul {
		width: 100%;
	}

	p {
		text-align: center;
		margin-bottom: 10px;
	}

	.committee {
		width: 100%;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
	}

	.committee ul li {
		flex-direction: row;
		justify-content: space-between;
		margin: 10px 0;
	}

	.sub_label {
		font-weight: 600;
		margin-bottom: 10px;
		text-align: center;
	}

	.name {
		font-weight: 600;
	}

	.title {
		text-align: right;
	}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
	.header-sect {
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
	}

	.compress-header {
			width: 48%;
			text-align: left;
	}

	.content {
		display: flex;
		flex-direction: column;
		margin: 0 4em;
	}

	.content p {
		margin-bottom: 1em;
	}

	.committee {
		display: flex;
		margin: 0 4em;
		padding: 0;
	}

	.committee .sub_label {
		width: 100%;
	}

	.committee ul {
		justify-content: space-between;
	}

	.committee ul li {
		justify-content: space-between;
	}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
	.content {
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 0 4em;
	}

	.committee {
		margin: 0;
		padding: 0 4em;
	}
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
	.header-sect {
		display: flex;
		flex-direction: row;
		padding-right: 4em;
	}
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
	.header-sect {
		display: flex;
		flex-direction: row;
	}

	.content {
		margin: 0;
		padding: 0 4em;
	}

	.committee {
		margin: 0;
		padding: 0 4em;
	}
}
</style>
