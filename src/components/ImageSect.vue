<template>
	<div id="about" class="sect">
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

@media screen and (min-width: 1172px) {
}

@media screen and (max-width: 360px) {
	.sect {
		display: inline-block;
	}
}
</style>
