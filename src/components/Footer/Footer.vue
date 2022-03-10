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
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;
	padding: 19px 0;
	width: 1110px;
	
	&__left {
		display: flex;
		align-items: center;
	}
	
	&__copyright {
		font-size: 14px;
		font-weight: 500;
		color: $color-gray;
	}

	&__privacy {
		margin: 0 48px 0 90px;
		font-size: 14px;
		font-weight: 500;
		color: $color-gray;
	}

	&__uses {
		font-size: 14px;
		font-weight: 500;
		color: $color-gray;
	}

	&__production {
		font-size: 14px;
		font-weight: 500;
		color: $color-gray;
		
		a {
			margin-left: 5px;
			color: $color-text;
		}
	}
}
</style>