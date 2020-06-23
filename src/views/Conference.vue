<template>
	<div class="main">
		<Nav></Nav>
		
		<Footer></Footer>
	</div>
</template>

<script>
	import Nav from '@/components/Nav'
	import Footer from '@/components/Footer'

	export default {
		name: 'index',
		components: {
			Nav,
			Footer
		},
		data () {
			return {
				sect: sections
			}
		},
		methods: {

		}
	}
</script>

<style>
p {
	line-height: 1.6;
}

li {
	line-height: 1.6;
}

h1 {
	text-transform: uppercase;
	font-weight: 500;
	margin: 100px;
	padding: 0;
}

@media screen and (max-width: 600px) {
	h1 {
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 500;
		margin: 10px;
		text-align: center;
		padding: 0;
	}

	.sect {
		min-height: 200px;
		margin: 0;
		padding: 1em;
		margin-bottom: 2em;
	}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
	.sect h1 {
		font-size: 3em;
		margin-bottom: 1em;
	}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
	.sect {
		margin: 0;
		display: flex;
		flex-direction: row;
	}

	.sect h1 {
		font-size: 3em;
		margin-bottom: 1em;
	}
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
	.sect {
		margin: 2em 0;
		height: auto;
		display: inline-block;
	}

	.sect h1 {
		font-size: 3em;
		margin-bottom: 1em;
	}

	.sect p {
		line-height: 1.6;
		padding-right: 2em;
	}
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
	.sect {
		padding: 0;
		margin: 0;
	}
}
</style>
