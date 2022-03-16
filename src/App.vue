<template lang='pug'>
Header
Content
Footer
button.btn.btn-outline-secondary(type='button' @click="i18n.locale = 'tw'") 繁體
button.btn.btn-outline-secondary(type='button' @click="i18n.locale = 'cn'") 简体
button.btn.btn-outline-secondary(type='button' @click="i18n.locale = 'en'") English
button.btn.btn-outline-secondary(type='button' @click="i18n.locale = 'jp'") 日本語
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
