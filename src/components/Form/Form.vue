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
	z-index: 1;
	margin: 0 auto;
	width: 730px;
	height: 264px;
	padding: 49px;
	border-radius: 24px;
	box-shadow: 8px 8px 24px 0 rgba(9, 13, 20, 0.06), -4px -4px 8px 0 rgba(255, 255, 255, 0.4), 0 1px 1px 0 rgba(9, 13, 20, 0.06);
	background-image: linear-gradient(110deg, #fff, #fafbfc 52%, #f5f7fa 100%);
	
	&__top {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	&__item {
		position: relative;
		width: 200px;
	}
	
	&__label {
		display: block;
		margin-bottom: 8px;
		padding: 0 15px;
		font-size: 13px;
		font-weight: 500;
		color: $color-theme;
	}
	
	&__input {
		border: none;
		padding: 10px 16px 10px 12px;
		background-color: rgba($color-theme, 0.02);
		width: 100%;
		height: 48px;
		outline: none;
		font-weight: 500;
		font-size: 16px;
		color: $color-theme;
		
		&::placeholder {
			font-weight: 500;
			font-size: 16px;
			color: $color-theme;
		}
		
		&--money {
		
		}
		
		&--number {
		
		}
	}
	
	&__money {
		position: absolute;
		right: 17px;
		top: 37px;
		display: flex;
		align-items: center;
		
		&::before {
			content: "";
			display: block;
			width: 20px;
			height: 20px;
			margin: 0 12px 0 0;
			background: url("@/assets/langs/ru.png") center center no-repeat;
			background-size: contain;
		}
	}
	
	&__button {
		width: 190px;
		height: 48px;
		border: none;
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
	
	&__bottom {
		display: flex;
		justify-content: flex-end;
		margin-top: 48px;
	}
}

.langs {
	&__item {
		img {
		
		}
	}
}

</style>