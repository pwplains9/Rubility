<template lang="pug">
footer.footer
		.footer__left
			.footer__copyright
				| &copy;&nbsp;RUBILITY, 2022. All rights reserved.
			a.footer__privacy(href="#" target="_blank")
				| Политика конфеденциальности
			a.footer__uses(href="#" target="_blank")
				| Правила использования
		.footer__production
			| made by
			a(href="#" target="_blank")
				| roobinium
</template>

<script>
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Footer"
}
</script>

<style scoped lang="scss">
@import '../../css/_global.scss';

.footer {
	margin: 0 auto;
	padding: vc(19) 0;
	width: vc(1110);
	
	&__left {
		@include desktop {
			display: flex;
			align-items: center;
		}
		@include mobile {
			flex-flow: column;
		}
	}
	
	&__copyright {
		font-size: vc(14);
		font-weight: 500;
		color: $color-gray;
	}
	
	&__privacy {
		font-size: vc(14);
		font-weight: 500;
		color: $color-gray;
		
		@include desktop {
			margin: 0 vc(48) 0 vc(90);
		}
	}
	
	&__uses {
		font-size: vc(14);
		font-weight: 500;
		color: $color-gray;
	}
	
	&__production {
		font-size: vc(14);
		font-weight: 500;
		color: $color-gray;
		
		a {
			margin-left: vc(5);
			color: $color-text;
		}
		
		@include mobile {
			text-align: left;
		}
	}
	
	@include desktop {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	@include mobile {
		padding: vc(16) vc(32);
		flex-flow: column;
		width: 100%;
		text-align: left;
		
		&__left {
			a {
				display: block;
				margin: vc(17) 0;
			}
		}
	}
}
</style>