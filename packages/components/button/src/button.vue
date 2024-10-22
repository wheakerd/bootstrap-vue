<script lang="ts" setup>
defineOptions({
	name: 'BootButton',
});

const props = defineProps<{
	color:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'danger'
		| 'warning'
		| 'info'
		| 'light'
		| 'dark'
		| 'link',
}>();

</script>
<template>
	<button type="button" class="btn btn-primary btn-secondary btn-yellow-100">
		<slot/>
	</button>
</template>
<style lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/maps";

$extended-colors: (
	"blue": $blue,
	"indigo": $indigo,
	"purple": $purple,
	"pink": $pink,
	"red": $red,
	"orange": $orange,
	"yellow": $yellow,
	"green": $green,
	"teal": $teal,
	"cyan": $cyan
);

$theme-color-interval: 8%;
$theme-color-levels: (
	100: $theme-color-interval * 5,
	200: $theme-color-interval * 4,
	300: $theme-color-interval * 3,
	400: $theme-color-interval * 2,
	500: $theme-color-interval,
	600: -$theme-color-interval,
	700: -($theme-color-interval * 2),
	800: -($theme-color-interval * 3),
	900: -($theme-color-interval * 4)
);

@each $name, $color in $colors {
	@each $level, $value in $theme-color-levels {
		@if $value > 0 {
			.btn-#{$name}-#{$level} {
				background-color: mix($color, $white, $value) !important;
			}
		}
	}
}
</style>