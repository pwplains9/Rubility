<template lang="pug">
swiper(
		:navigation="true"
		:slidesPerView="3"
		:freeMode="true"
		:pagination="{ clickable: true}"
		:modules="modules"
		class="mySwiper")
			swiper-slide
				.lang-content__item.lang-content__item--USA
			swiper-slide
				.lang-content__item.lang-content__item--KANADA
			swiper-slide
				.lang-content__item.lang-content__item--JAPAN
			swiper-slide
				.lang-content__item.lang-content__item--England
			swiper-slide
				.lang-content__item.lang-content__item--British
			swiper-slide
				.lang-content__item.lang-content__item--China
			swiper-slide
				.lang-content__item.lang-content__item--Korea
			swiper-slide
				.lang-content__item.lang-content__item--Thailand
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';

import 'swiper/css';
import "swiper/css/navigation";
import LangContent from "@/components/Lang-content/LangContent";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {FreeMode, Navigation, Pagination} from "swiper";

export default {
	name: 'SliderContent',
	components: {
		LangContent, Swiper,
		SwiperSlide
	},
	setup() {
		const onSwiper = (swiper) => {
			console.log(swiper);
		};
		const onSlideChange = () => {
			console.log('slide change');
		};
		return {
			onSwiper,
			onSlideChange,
		};
	},
	data() {
		return {
			modules: [FreeMode, Navigation, Pagination],
		}
	}
}
</script>
<style lang="scss">
@import '../../css/_global.scss';

.swiper {
	margin-top: vc(48);
	padding-top: vc(48);
	padding-left: vc(24);
	padding-bottom: vc(96);
	background: $color-header;
	
	.swiper-button-prev {
		transform: rotate(-180deg);
		left: 50%;
		margin-left: vc(-69);
		margin-top: vc(22);
	}
	
	.swiper-button-next,
	.swiper-button-prev {
		padding: 0;
		outline: none;
		z-index: 20;
		
		&::after {
			content: "";
			width: vc(16);
			height: vc(15);
			background: url("@/assets/arrow-right.svg") center center no-repeat;
			background-size: contain;
			font-size: 0;
			outline: none;
		}
	}
	
	.swiper-button-next {
		right: 50%;
		margin-right: vc(-69);
		margin-top: vc(22);
	}
	
	.swiper-pagination {
		bottom: vc(52);
	}
	
	.swiper-pagination-bullet {
		width: vc(8);
		height: vc(8);
		background-color: rgba(20, 16, 41, 0.06);
		opacity: 1;
	}
	
	.swiper-pagination-bullet-active {
		background-color: #5d2de1;
	}
}

.swiper-slide {
	margin-right: vc(40);
	width: vc(64) !important;
}

.lang-content {
	margin-top: vc(-23);
	background: $color-header;
	
	&__container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;
		padding: vc(72) 0;
		max-width: vc(1110);
	}
	
	&__item {
		width: vc(64);
		height: vc(64);
		
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