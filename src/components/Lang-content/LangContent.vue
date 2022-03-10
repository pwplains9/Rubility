<template lang="pug">
.lang-content
	.lang-content__container
		.lang-content__item(v-for='(option, i) of options' :key='i'
			:class='"lang-content__item--" + option')
	
</template>

<script>
export default {
  name: "LangContent",
	props: {
		options: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../../css/_global.scss';

.lang-content {
	margin-top: -23px;
	background: $color-header;
	
	&__container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;
		padding: 72px 0;
		max-width: 1110px;
	}
	
	&__item {
		width: 64px;
		height: 64px;
		
		&--USA  {
			background: url("@/assets/icons/USA.png") center center no-repeat;
			background-size: contain;
		}
		
		&--KANADA {
			background: url("@/assets/icons/KANADA.png") center center no-repeat;
			background-size: contain;
		}
		
		&--JAPAN {
			background: url("@/assets/icons/JAPAN.png") center center no-repeat;
			background-size: contain;
		}
		
		&--England {
			background: url("@/assets/icons/England.png") center center no-repeat;
			background-size: contain;
		}
		
		&--British {
			background: url("@/assets/icons/British.png") center center no-repeat;
			background-size: contain;
		}
		
		&--China {
			background: url("@/assets/icons/China.png") center center no-repeat;
			background-size: contain;
		}
		
		&--Korea {
			background: url("@/assets/icons/Korea.png") center center no-repeat;
			background-size: contain;
		}
		
		&--Thailand {
			background: url("@/assets/icons/Thailand.png") center center no-repeat;
			background-size: contain;
		}
	}
}
</style>