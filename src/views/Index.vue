<template>
	<div class="main">
		<Nav></Nav>
		<Home></Home>
		<Latest></Latest>
		<ImageSect :img="images.img1" :capt="captions.capt1.text" :capimg="captions.capt1.rev"></ImageSect>
		<About></About>
		<ImageSect :img="images.img2" :capt="captions.capt2.text" :capimg="captions.capt2.rev"></ImageSect>
		<Conference></Conference>
		<ImageSect :img="images.img3" :capt="captions.capt3.text" :capimg="captions.capt3.rev"></ImageSect>
		<Sponsor></Sponsor>
		<Footer></Footer>
	</div>
</template>

<script>
	import Nav from '@/components/Nav'
	import Home from '@/components/Home'
	import Latest from '@/components/Latest'
	import About from '@/components/About'
	import Conference from '@/components/Conference'
	import Footer from '@/components/Footer'
	import ImageSect from '@/components/ImageSect'
	import Sponsor from '@/components/Sponsor'

	export default {
		name: 'index',
		components: {
			Nav,
			Home,
			Latest,
			About,
			Conference,
			Sponsor,
			Footer,
			ImageSect
		},
		data () {
			return {
				images: {
					'img1': 'wiml2.jpg',
					'img2': 'wiml.jpg',
					'img3': 'kenneth.jpg'
				},
				captions: {
					'capt1': {
						'text': 'Lorem ipsum dolor sit amet, ac in eu, dictum rerum a libero. Ac amet. Placerat lorem velit id lorem sit, eros at eget enim, vestibulum diam imperdiet vitae suscipit nonummy, tempus sed consequat enim ligula sit at, fusce justo cras nulla et.',
						'rev': false
					},
					'capt2': {
						'text': 'Lorem ipsum dolor sit amet, ac in eu, dictum rerum a libero. Ac amet. Placerat lorem velit id lorem sit, eros at eget enim, vestibulum diam imperdiet vitae suscipit nonummy, tempus sed consequat enim ligula sit at, fusce justo cras nulla et.',
						'rev': true
					},
					'capt3': {
						'text': 'Lorem ipsum dolor sit amet, ac in eu, dictum rerum a libero. Ac amet. Placerat lorem velit id lorem sit, eros at eget enim, vestibulum diam imperdiet vitae suscipit nonummy, tempus sed consequat enim ligula sit at, fusce justo cras nulla et.',
						'rev': false
					}
				}
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
		background: blue;
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
