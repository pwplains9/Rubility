<template lang="pug">
main.content
		.content__container
			h1.content__title
				| Валютные переводы из&nbsp;#[br]России в&nbsp;новых реалиях
			.content__image
				img(src="@/assets/figure.png" alt="image")
		.content__text
			p.content__paragraph Переводы на счета компаний.
			p.content__paragraph Переводы физическим лицам.
			p.content__paragraph -Оплата товаров в&nbsp;том числе по&nbsp;средствам инвойсов.
		Form
		LangContent(:options="['USA', 'KANADA', 'JAPAN', 'England', 'British', 'China', 'Korea', 'Thailand']")
			
</template>

<script>
import SvgIcon from "@/components/Helpers/SvgIcon";
import Form from "@/components/Form/Form";
import LangContent from "@/components/Lang-content/LangContent";
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Content",
	components: {LangContent, Form, SvgIcon},
}
</script>
<style lang="scss" scoped>
@import '../../css/_global.scss';
.content {
	background: $color-bg;
	
	&__container {
		position: relative;
		margin: 0 auto;
		width: 804px;
	}
	
	&__title {
		margin: 0;
		padding: 48px 0 50px;
		font-size: 48px;
		font-weight: 700;
		line-height: 48px;
		letter-spacing: -2px;
		text-align: center;
		color: rgba($color-theme, 0.8);
	}
	
	&__image {
		position: absolute;
		right: -355px;
		top: 26px;
		width: 541px;
		height: 530px;
		pointer-events: none;
		
		img {
			width: 100%;
			height: 100%;
		}
	}
	
	&__text {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-flow: column;
		margin-bottom: 38px;
	}
	
	&__paragraph {
		position: relative;
		display: flex;
		align-items: center;
		margin-bottom: 12px;
		font-weight: 500;
		font-size: 18px;
		line-height: 18px;
		color: rgba($color-theme, 0.6);
		
		&::before {
			content: "";
			margin-right: 14px;
			width: 24px;
			height: 24px;
			background: url("@/assets/check.svg") center center no-repeat;
			background-size: contain;
		}
	}
}
</style>