<template lang="pug">
.lang-select(:tabindex='tabindex' @blur='open = false')
	.lang-select__selected(v-bind:class='{ open: open }, "lang-select__selected--" + selected' @click='open = !open')
			| {{ selected }}
	.lang-select__items(:class='{ isHide: !open }')
		.lang-select__item(v-for='(option, i) of options' :key='i' @click="\
        selected = option;\
        open = false;\
        $emit('input', option);\
        \
        " :class='"lang-select__item--" + option' :value="option")
				| {{ option }}
</template>

<script>
export default {
	name: "LangHeader",
	props: {
		options: {
			type: Array,
			required: true,
		},
		default: {
			type: String,
			required: false,
			default: null,
		},
		tabindex: {
			type: Number,
			required: false,
			default: 0,
		},
	},
	data() {
		// this.$i18n.locale = 'en';
		return {
			selected: this.default
					? this.default
					: this.options.length > 0
							? this.options[0]
							: null,
			open: false,
			locale: 'en',
		};
	},
	mounted() {
		this.$emit("input", this.selected);
	}
}
</script>

<style lang="scss" scoped>
@import '../../css/_global.scss';
.lang-select {
	position: relative;
	outline: none;
	border-radius: 24px;
	width: 90px;
	height: 48px;
	text-align: left;
	line-height: 48px;
	color: $color-text;
	background-color: rgba(20, 16, 41, 0.02);
}

.lang-select .lang-select__selected {
	color: $color-text;
	padding: 0 9px;
	cursor: pointer;
	user-select: none;
}

.lang-select__selected {
	display: flex;
	align-items: center;
	font-weight: 600;
	font-size: 16px;
	line-height: 48px;
	letter-spacing: 1px;
	color: $color-text;
	
	&::before {
		content: "";
		width: 27px;
		height: 27px;
		margin: 0 12px 0 0;
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
}

.lang-select .lang-select__selected.open {

}

.lang-select .lang-select__selected:after {

}

.lang-select .lang-select__items {
	z-index: 1;
	position: absolute;
	left: 0;
	right: 0;
	top: 53px;
	width: 180px;
	box-shadow: 0 8px 12px 0 rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12);
	font-weight: 600;
	font-size: 16px;
	line-height: 48px;
	letter-spacing: 1px;
	color: $color-gray;
	background-color: $color-white;
}

.lang-select .lang-select__items .lang-select__item {
	display: flex;
	align-items: center;
	padding: 0 12px;
	cursor: pointer;
	user-select: none;
	line-height: 49px;
	
	&::before {
		content: "";
		width: 27px;
		height: 27px;
		margin: 0 12px 0 0;
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
}

.lang-select .lang-select__items .lang-select__item:hover {
	color: $color-text;
	background: $color-hover;
}

.isHide {
	display: none;
}
</style>