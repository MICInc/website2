<template>
	<div id="imagesect" class="sect">
		<div :class="{'content-img-cap': !capleft, 'content-cap-img': capleft}">
			<img class="crop" :src="'assets/img/'+image">
			<h2 class="caption">
				{{caption}}
			</h2>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'imagesect',
		data() {
			return {
				image: null,
				caption: null,
				capleft: false
			}
		},
		props: ['img', 'capt', 'capimg'],
		watch: {
			img: {
				deep: true,
				immediate: true,
				handler(curr) {
					this.image = curr;
				}
			},
			capt: {
				deep: true,
				immediate: true,
				handler(curr) {
					this.caption = curr;
				}
			},
			capimg: {
				deep: true,
				immediate: true,
				handler(curr) {
					this.capleft = curr;
				}
			}
		}
	}
</script>

<style scoped>
.content-img-cap {
	display:flex;
	justify-content: space-evenly;
	align-items: center;
}

.content-cap-img {
	display:flex;
	justify-content: space-evenly;
	flex-direction: row-reverse;
	align-items: center;
}

.crop {
  width: 300px;
  height: auto;
  clip-path: circle();
}

.caption {
	font-size: 2em;
	width: 50%;
}

@media screen and (max-width: 600px) {
	.content-img-cap {
		flex-direction: column-reverse;
	}

	.content-cap-img {
		flex-direction: column;
	}

	.caption {
		margin-bottom: 20px;
	}

	.caption {
		font-size: 1.5em;
		width: 100%;
		text-align: center;
	}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
	.content-img-cap {
		flex-direction: column-reverse;
	}

	.content-cap-img {
		flex-direction: column;
	}

	.caption {
		margin: 2em 0;
		font-size: 1.5em;
	}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

}
</style>
