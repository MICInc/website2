<template>
	<div class="main">
		<Nav></Nav>
		<Home></Home>
		<Latest></Latest>
		<About></About>
		<Conference></Conference>
		<Contact></Contact>
		<Footer></Footer>
	</div>
</template>

<script>
	import Nav from '@/components/Nav'
	import Home from '@/components/Home'
	import Latest from '@/components/Latest'
	import About from '@/components/About'
	import Conference from '@/components/Conference'
	import Contact from '@/components/Contact'
	import Footer from '@/components/Footer'

	export default {
		name: 'index',
		components: {
			Nav,
			Home,
			Latest,
			About,
			Conference,
			Contact,
			Footer
		},
		data () {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
@media screen and (min-width: 1172px) {
	h1 {
		text-transform: uppercase;
		font-weight: 500;
		margin: 100px;
		/* text-align: center; */
		padding: 0;
	}

	.sect {
		height: 700px;
		display: inline-block;
		padding-left: 4em;
	}

	.sect h1 {
		font-size: 3em;
		margin-bottom: 1em;
	}

	.sect p {
		line-height: 1.6;
	}
}

@media screen and (max-width: 360px) {
	h1 {
		text-transform: uppercase;
		font-size: 1.3em;
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
</style>
