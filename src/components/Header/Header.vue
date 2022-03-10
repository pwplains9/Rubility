<template lang='pug'>
header.header
		.header__container
			a.header__logo(href="/")
				| RUBILITY
			.header__right
				LangHeader(
					:options="['EN', 'RU', 'FR']"
					:default="'RU'"
					class="select")
				a.header__link(href="#" target="_blank") Обратный звонок
</template>

<script>
import LangHeader from "@/components/Lang-header/LangHeader";
export default {
		// eslint-disable-next-line vue/multi-word-component-names
		name: 'Header',
	components: {LangHeader},
}
</script>

<style lang="scss" scoped>
@import '../../css/_global.scss';
.header {
	padding: 12px 0;
	background: $color-header;
	box-shadow: -4px -4px 8px 0 rgba(255, 255, 255, 0.4), 0 1px 1px 0 rgba(9, 13, 20, 0.06);
	
	&__container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;
		padding: 0 15px;
		max-width: 1141px;
	}
	
	&__logo {
		font-size: 24px;
		font-weight: 700;
		line-height: 1.17;
		letter-spacing: -1px;
		color: rgba(20, 16, 41, 0.8);
		text-decoration: none;
	}
	
	&__right {
		display: flex;
		align-content: center;
	}
	
	&__link {
		width: 202px;
		height: 48px;
		margin-left: 16px;
		padding: 10px 24px;
		border-radius: 24px;
		font-size: 16px;
		font-weight: 600;
		line-height: 1.75;
		letter-spacing: normal;
		color: $color-white;
		box-shadow: 0 8px 8px -4px rgba(156, 66, 245, 0.12), 0 16px 24px 0 rgba(156, 66, 245, 0.24), 0 2px 4px -1px rgba(27, 10, 82, 0.12), 0 0 1px 0 rgba(156, 66, 245, 0.24);
		background-image: linear-gradient(103deg, #d33f62, #9c42f5 53%, #5d2de1);
		
		@include desktop {
			transition: background-image 0.5s linear;
			
			&:hover {
				background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), linear-gradient(114deg, #d33f62, #9c42f5 53%, #5d2de1 100%);
			}
		}
	}
}
</style>
