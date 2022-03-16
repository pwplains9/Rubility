<template lang='pug'>
header.header(:class="{active:isActive}")
		.header__container
			a.header__logo(href="/")
				| RUBILITY
			.header__right.for-desktop
				LangHeader(
					:options="['EN', 'RU', 'FR']"
					:default="'RU'"
					class="select")
				a.header__link(href="#" target="_blank") Обратный звонок
			.header__right.for-mobile(:class="[isActive ? 'is-visible' : 'is-hidden']")
				.header__right-top(:class="[isLangs ? 'is-visible' : 'is-hidden']")
					.header__right-nav
						.header__right-back(@click="[isLangs = !isLangs, isCenter = false]" :class="{active:isView}")
							| Назад
						.header__right-center
							| Язык
						.header__right-back(@click="[isLangs = !isLangs, isView = false, isActive = false, isCenter = false]")
							| Готово
					.header__right-langs
						.header__right-lang.header__right-lang--EN(@click="toggle" :class="[activeLang ? 'active' : '']")
							| English
						.header__right-lang.header__right-lang--RU(@click="toggle" :class="[!activeLang ? 'active' : '']")
							| Русский
						.header__right-lang.header__right-lang--FR(@click="toggle" :class="[!activeLang ? 'active' : '']")
							| Французкий
				.header__right-center(:class="[isCenter ? 'is-hidden' : '']")
					.header__right-lang(@click="[isLangs = !isLangs, isCenter = true]")
						| Язык
					a.header__link(href="#" target="_blank") Обратный звонок
			.header__button.for-mobile(@click="isActive = !isActive" :class="{active:isActive}")
				span
				span
				span
</template>

<script>
import LangHeader from "@/components/Lang-header/LangHeader";
export default {
		// eslint-disable-next-line vue/multi-word-component-names
		name: 'Header',
	components: {LangHeader},
	data() {
		return {
			isActive: false,
			isView: false,
			isLangs: false,
			activeLang: true,
			isCenter: false,
		};
	},
	methods: {
		toggle() {
			this.activeLang = !this.activeLang;
		},
	},
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
		padding: 0 vc(15);
		max-width: vc(1141);
		
		@include mobile {
			padding: vc(12) vc(18) vc(12) vc(16);
		}
	}
	
	&__logo {
		font-size: vc(24);
		font-weight: 700;
		line-height: 1.17;
		letter-spacing: -1px;
		color: rgba(20, 16, 41, 0.8);
		text-decoration: none;
		
		@include mobile {
			font-size: vc(18);
			line-height: vc(24);
			letter-spacing: -0.75px;
		}
	}
	
	&__right {
		display: flex;
		align-content: center;
	}
	
	&__link {
		width: vc(202);
		height: vc(48);
		margin-left: vc(16);
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
			margin-left: 0;
		}
	}
	
	@include mobile {
		padding: 0;
		box-shadow: 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12);
		background-color: $color-white;
		
		&__button {
			width: vc(18);
			height: vc(12);
			
			span {
				display: block;
				width: vc(18);
				height: 1px;
				background-color: rgba(20, 16, 41, 0.8);
				
				&:nth-child(2) {
					margin: vc(4) 0;
				}
			}
		}
		
		&__right {
			position: absolute;
			left: 0;
			right: 0;
			top: vc(49);
			z-index: 1;
			padding: 0 vc(24) vc(24);
			width: 100%;
			background: $color-white;
			
			&-center {
				width: 100%;
				
				.header__right-lang {
					position: relative;
					padding-top: vc(60);
					padding-left: vc(48);
					font-family: $font-Montserrat;
					font-weight: 500;
					font-size: vc(14);
					line-height: vc(24);
					color: $color-theme;
					
					&::after {
						content: "";
						position: absolute;
						right: vc(10);
						width: vc(24);
						height: vc(24);
						background: url("@/assets/arrow-down.svg") center center no-repeat;
						background-size: contain;
						transform: rotate(-90deg);
					}
				}
			}
			
			&-nav {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: vc(12) vc(16);
				font-family: $font-Montserrat;
				font-weight: 500;
				font-size: vc(16);
				line-height: vc(26);
				color: rgba(20, 1, 41, 0.6);
			}
			
			&-top {
				position: absolute;
				left: 0;
				right: 0;
				top: vc(-49);
				z-index: 1;
				background: $color-white;
				
				.header__right-center {
					text-align: center;
				}
			}
			
			&-back {
				position: relative;
				
				&:first-child {
					display: flex;
					align-items: center;
					
					&::before {
						content: "";
						display: block;
						width: vc(24);
						height: vc(24);
						background: url("@/assets/arrow-down.svg") center center no-repeat;
						background-size: contain;
						transform: rotate(90deg);
					}
				}
			}
			
			&-langs {
				padding: vc(16) 0;
				
				.header__right-lang {
					position: relative;
					display: flex;
					align-items: center;
					padding: vc(12) vc(16) vc(12) vc(32);
					font-family: $font-Montserrat;
					font-weight: 500;
					font-size: vc(14);
					line-height: vc(24);
					color: rgba(20, 1, 41, 0.6);
					
					&::before {
						content: "";
						display: block;
						width: vc(20);
						height: vc(20);
						margin: 0 vc(12) 0 0;
					}
					
					&::after {
						position: absolute;
						right: 20px;
					}
					
					&--EN  {
						&::before {
							background: url("@/assets/langs/usa.png") center center no-repeat;
							background-size: contain;
						}
					}
					
					&--RU {
						&::before {
							background: url("@/assets/langs/ru.png") center center no-repeat;
							background-size: contain;
						}
					}
					
					&--FR {
						&::before {
							background: url("@/assets/langs/fr.png") center center no-repeat;
							background-size: contain;
						}
					}
					
					
					&.active {
						color: rgba(20, 1, 41, 0.8);
						background-color: rgba(20, 1, 41, 0.03);
					}
				}
			}
		}
		
		&__link {
			display: block;
			margin-top: vc(72);
			width: 100%;
			text-align: center;
		}
		
		&.active {
			box-shadow: 0 2px 4px -1px rgba(20, 16, 41, 0.24), 0 0 1px 0 rgba(20, 16, 41, 0.4);
		}
	}
}
</style>
