<template>
	<div class="main">
		<Nav></Nav>
		<Home></Home>
		<About></About>
		<Conference></Conference>
		<Contact></Contact>
		<Footer></Footer>
	</div>
</template>

<script>
	import Nav from '@/components/Nav'
	import Home from '@/components/Home'
	import About from '@/components/About'
	import Conference from '@/components/Conference'
	import Contact from '@/components/Contact'
	import Footer from '@/components/Footer'

	export default {
		name: 'index',
		components: {
			Nav,
			Home,
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
h1 {
	text-transform: uppercase;
	font-weight: 500;
	margin: 100px;
	text-align: center;
	padding: 0;
}

.sect {
	height: 700px;
	display: inline-block;
	width: calc(100% - 4em);
	padding-left: 4em;
}
</style>