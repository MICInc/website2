<template>
	<div>
		<Nav></Nav>
		<router-view></router-view>
		<Footer></Footer>
	</div>
</template>

<script>
	import Nav from '@/components/Nav'
	import Footer from '@/components/Footer'
	export default {
		name: 'conference',
		components: {
			Nav,
			Footer
		},
		data() {
			return {
			}
		}
	}
</script>

<style scoped>
</style>