<template lang="pug">
main.content
		.content__container
			h1.content__title
				| Валютные#[br.for-mobile] переводы из&nbsp;#[br]России в&nbsp;новых реалиях
			.content__image.for-desktop
				img(src="@/assets/figure.png" alt="image")
		.content__text
			p.content__paragraph Переводы на счета компаний.
			p.content__paragraph Переводы физическим лицам.
			p.content__paragraph -Оплата товаров в&nbsp;том числе по&nbsp;средствам инвойсов.
		.content__image.for-mobile
			img(src="@/assets/figure.png" alt="image")
		Form
		
		div(v-if="$isMobile()")
			SliderContent()
		div(v-if="!$isMobile()")
			LangContent(:options="['USA', 'KANADA', 'JAPAN', 'England', 'British', 'China', 'Korea', 'Thailand']")
</template>

<script>
import SvgIcon from "@/components/Helpers/SvgIcon";
import Form from "@/components/Form/Form";
import LangContent from "@/components/Lang-content/LangContent";
import SliderContent from "@/components/Slider/Slider";
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Content",
	components: {SliderContent, LangContent, Form, SvgIcon},
}

</script>
<style lang="scss" scoped>
@import '../../css/_global.scss';
.content {
	background: $color-bg;
	
	&__container {
		position: relative;
		margin: 0 auto;
		width: vc(804);
		
		@include mobile {
			width: 100%;
		}
	}
	
	&__title {
		margin: 0;
		padding: vc(48) 0 vc(50);
		font-size: vc(48);
		font-weight: 700;
		line-height: vc(48);
		letter-spacing: -2px;
		text-align: center;
		color: rgba($color-theme, 0.8);
		
		@include mobile {
			padding: vc(61) vc(25) vc(23);
			font-size: vc(30);
			line-height: vc(36);
			letter-spacing: -1.25px;
			text-align: left;
		}
	}
	
	&__image {
		width: vc(541);
		height: vc(530);
		pointer-events: none;
		
		img {
			width: 100%;
			height: 100%;
		}
		
		@include desktop {
			position: absolute;
			right: vc(-355);
			top: vc(26);
		}
		
		@include mobile {
			margin: 0 auto vc(24);
			width: vc(312);
			height: vc(303);
		}
	}
	
	&__text {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-flow: column;
		margin-bottom: vc(38);
		
		@include mobile {
			margin-bottom: vc(7);
			padding: 0 vc(22);
		}
	}
	
	&__paragraph {
		position: relative;
		display: flex;
		margin-bottom: vc(12);
		font-weight: 500;
		font-size: vc(18);
		line-height: vc(18);
		color: rgba($color-theme, 0.6);
		
		&::before {
			content: "";
			flex-shrink: 0;
			margin-right: vc(14);
			width: vc(24);
			height: vc(24);
			background: url("@/assets/check.svg") center center no-repeat;
			background-size: contain;
		}
		
		@include desktop {
			align-items: center;
		}
		
		@include mobile {
			margin-bottom: vc(9);
			font-size: vc(18);
			line-height: vc(28);
		}
	}
}
</style>