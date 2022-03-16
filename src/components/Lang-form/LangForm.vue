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
	name: "LangForm",
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
	width: 100%;
	height: vc(48);
	text-align: left;
	line-height: vc(48);
	color: $color-text;
	background-color: rgba(20, 16, 41, 0.02);
}

.lang-select .lang-select__selected {
	color: $color-text;
	padding: 0 vc(17);
	cursor: pointer;
	user-select: none;
}

.lang-select__selected {
	display: flex;
	align-items: center;
	font-weight: 600;
	font-size: vc(16);
	line-height: vc(48);
	letter-spacing: 1px;
	color: $color-text;
	
	&::after {
		content: "";
		position: absolute;
		right: vc(10);
		width: vc(24);
		height: vc(24);
		background: url("@/assets/arrow-down.svg") center center no-repeat;
		background-size: contain;
	}
	
	&::before {
		content: "";
		position: absolute;
		right: vc(32);
		width: vc(20);
		height: vc(20);
		margin: 0 vc(12) 0 0;
	}
	
	&--USA  {
		&::before {
			background: url("@/assets/icons/USA.png") center center no-repeat;
			background-size: contain;
		}
	}
	
	&--KANADA {
		&::before {
			background: url("@/assets/icons/KANADA.png") center center no-repeat;
			background-size: contain;
		}
	}
	
	&--JAPAN {
		&::before {
			background: url("@/assets/icons/JAPAN.png") center center no-repeat;
			background-size: contain;
		}
	}
	
	&--England {
		&::before {
			background: url("@/assets/icons/England.png") center center no-repeat;
			background-size: contain;
		}
	}
	
	&--British {
		&::before {
			background: url("@/assets/icons/British.png") center center no-repeat;
			background-size: contain;
		}
	}
	
	&--China {
		&::before {
			background: url("@/assets/icons/China.png") center center no-repeat;
			background-size: contain;
		}
	}
	
	&--Korea {
		&::before {
			background: url("@/assets/icons/Korea.png") center center no-repeat;
			background-size: contain;
		}
	}
	
	&--Thailand {
		&::before {
			background: url("@/assets/icons/Thailand.png") center center no-repeat;
			background-size: contain;
		}
	}
	
	&.open {
		&::after {
			transform: rotate(180deg);
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
	top: vc(53);
	width: 100%;
	box-shadow: 0 8px 12px 0 rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12);
	font-weight: 500;
	font-size: vc(16);
	line-height: vc(48);
	letter-spacing: 1px;
	color: $color-gray;
	background-color: $color-white;
}

.lang-select .lang-select__items .lang-select__item {
	display: flex;
	align-items: center;
	padding: 0 vc(12);
	cursor: pointer;
	user-select: none;
	font-weight: 500;
	line-height: vc(49);
	
	&::before {
		content: "";
		width: vc(27);
		height: vc(27);
		margin: 0 vc(12) 0 0;
	}
	
	&--USA  {
		&::before {
			background: url("@/assets/icons/USA.png") center center no-repeat;
			background-size: contain;
		}
	}
	
	&--KANADA {
		&::before {
			background: url("@/assets/icons/KANADA.png") center center no-repeat;
			background-size: contain;
		}
	}
	
	&--JAPAN {
		&::before {
			background: url("@/assets/icons/JAPAN.png") center center no-repeat;
			background-size: contain;
		}
	}
	
	&--England {
		&::before {
			background: url("@/assets/icons/England.png") center center no-repeat;
			background-size: contain;
		}
	}
	
	&--British {
		&::before {
			background: url("@/assets/icons/British.png") center center no-repeat;
			background-size: contain;
		}
	}
	
	&--China {
		&::before {
			background: url("@/assets/icons/China.png") center center no-repeat;
			background-size: contain;
		}
	}
	
	&--Korea {
		&::before {
			background: url("@/assets/icons/Korea.png") center center no-repeat;
			background-size: contain;
		}
	}
	
	&--Thailand {
		&::before {
			background: url("@/assets/icons/Thailand.png") center center no-repeat;
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