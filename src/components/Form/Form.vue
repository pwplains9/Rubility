<template lang="pug">
form.form
		.form__top
			.form__item
				label.form__label Введите сумму
				input.form__input.form__input--money(placeholder="100.000")
				.form__money
					| RUB
			.form__item
				label.form__label Выберите страну
				LangForm(
					:options="['USA', 'KANADA', 'JAPAN', 'England', 'British', 'China', 'Korea', 'Thailand']"
					:default="'USA'"
					class="select")
			.form__item
				label.form__label Телефон для связи
				input.form__input.form__input--number(type="number" placeholder="+7(123)456-78-90")
		.form__bottom
			button.form__button(type="submit")
				|  Оставить заявку
</template>

<script>
import LangForm from "@/components/Lang-form/LangForm";
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Form",
	components: {LangForm}
}
</script>

<style lang="scss" scoped>
@import '../../css/_global.scss';

.form {
	position: relative;
	z-index: 5;
	margin: 0 auto;
	width: vc(730);
	height: vc(264);
	padding: vc(49);
	border-radius: 24px;
	box-shadow: 8px 8px 24px 0 rgba(9, 13, 20, 0.06), -4px -4px 8px 0 rgba(255, 255, 255, 0.4), 0 1px 1px 0 rgba(9, 13, 20, 0.06);
	background-image: linear-gradient(110deg, #fff, #fafbfc 52%, #f5f7fa 100%);
	
	&__top {
		@include desktop {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
	
	&__item {
		position: relative;
		width: vc(200);
		
		@include mobile {
			margin-bottom: vc(18);
			width: 100%;
			
			&:last-child {
				margin-bottom: 0;
			}
		}
	}
	
	&__label {
		display: block;
		margin-bottom: vc(8);
		padding: 0 vc(15);
		font-size: vc(13);
		font-weight: 500;
		color: $color-theme;
	}
	
	&__input {
		border: none;
		padding: vc(10) vc(16) vc(10) vc(12);
		background-color: rgba($color-theme, 0.02);
		width: 100%;
		height: vc(48);
		outline: none;
		font-weight: 500;
		font-size: vc(16);
		color: $color-theme;
		
		&::placeholder {
			font-weight: 500;
			font-size: vc(16);
			color: $color-theme;
		}
		
		&--money {
		
		}
		
		&--number {
		
		}
	}
	
	&__money {
		position: absolute;
		right: vc(17);
		top: vc(37);
		display: flex;
		align-items: center;
		
		&::before {
			content: "";
			display: block;
			width: vc(20);
			height: vc(20);
			margin: 0 vc(12) 0 0;
			background: url("@/assets/langs/ru.png") center center no-repeat;
			background-size: contain;
		}
	}
	
	&__button {
		width: vc(190);
		height: vc(48);
		border: none;
		padding: vc(10) vc(24);
		border-radius: 24px;
		font-size: vc(16);
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
		
		@include mobile {
			margin-top: vc(40);
			width: 100%;
		}
	}
	
	&__bottom {
		@include desktop {
			display: flex;
			justify-content: flex-end;
			margin-top: vc(48);
		}
	}
	
	@include mobile {
		padding: vc(40);
		width: vc(312);
		height: auto;
	}
}

.langs {
	&__item {
		img {
		
		}
	}
}

</style>