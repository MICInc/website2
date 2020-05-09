<template>
	<div id="conference" class="sect">
		<div class="header-sect">
			<div class="header-info">
				<h1 class="compress-header">machine intelligence conference</h1>
				<div class="conf-info">
					<table>
						<tr class="conf-location">
							<td>virtual format</td>
						</tr>
						<tr class="conf-date">
							<td>September 26, 2020</td>
						</tr>
					</table>
				</div>
			</div>
			<div class="conf-register">
				<a href="/register" target="_blank"><button class="btn">register</button></a>
			</div>
		</div>
		<div class="content">
			<p v-for="(p, i) in desc" :key="i">
				{{ p }}
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
	import info from '@/json/conf.json'
	export default {
		name: 'conference',
		data() {
			return {
				committee: info.comm,
				desc: info.desc
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
	margin: 0;
	padding: 0 4em;
}

.header-sect {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}

.conf-register {
	display: flex;
	justify-content: center;
	margin: 0;
	padding-bottom: 2em;
}

.conf-register button {
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

.conf-register button:hover {
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
	font-size: 2em;
	text-transform: uppercase;
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
	.header-sect {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 20px;
	}

	.header-info {
		width: 50%;
		display: flex;
		flex-direction: column;
	}

	.header-info .compress-header {
		margin: 0;
		padding: 0;
		display: flex;
		text-align: left;
	}

	.conf-info {
		margin: 1em 0;
		padding: 0;
	}

	.conf-info table tr td {
		width: 20%;
		font-size: 1.2em;
		font-weight: 500;
		text-transform: uppercase;
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
		padding: 0 4em;
	}

	.header-info {
		display: flex;
		flex-direction: column;
		width: 50%;
	}

	.header-info .compress-header {
		margin: 0;
		padding: 0;
		display: flex;
		text-align: left;
	}

	.conf-info {
		margin: 1em 0;
	}

	.conf-info table tr td {
		font-size: 2em;
		font-weight: 500;
		text-transform: uppercase;
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

	.header-info {
		margin: 0;
		padding: 0;
		width: 50%;
	}

	.conf-info {
		width: 100%;
		height: 100%;
		padding: 0;
	}

	.conf-info table {
		width: 100%;
	}

	.conf-info table tr td {
		font-size: 2em;
		font-weight: 500;
		text-transform: uppercase;
	}

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
	}

	.header-info {
		padding-left: 4em;
	}
	.header-info .compress-header {
		margin: 0;
		padding: 0;
		margin-bottom: 1em;
	}

	.conf-info {
		padding-bottom: 2em;
	}

	.conf-info table {
		width: 100%;
	}

	.conf-info table tr td {
		font-size: 2em;
		font-weight: 500;
		text-transform: uppercase;
	}
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
	.header-sect {
		display: flex;
		flex-direction: row;
		padding-top: 4em;
	}

	.header-info {
		display: flex;
		flex-direction: column;
		width: 50%;
		/* margin-left: 4em; */
	}

	.compress-header {
		margin-bottom: 1em;
		padding: 0;
	}

	.conf-info {
		width: 100%;
		height: 100%;
		padding: 0;
	}

	.conf-info table {
		width: 100%;
	}

	.conf-info table tr td {
		font-size: 2em;
		font-weight: 500;
		text-transform: uppercase;
	}

	.content {
		margin: 0;
		padding-right: 4em;
	}

	.committee {
		margin: 0;
		padding-right: 4em;
	}
}
</style>
