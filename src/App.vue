<template lang='pug'>
Header
Content
Footer
</template>

<script>
import Header from "@/components/Header/Header";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
export default {
	name: 'App',
	components: {Footer, Content, Header}
}
</script>

<style lang="scss">

</style>
