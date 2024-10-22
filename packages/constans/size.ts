export const componentSizes = [
	'',
	'sm',
	'md',
	'lg',
	'xl',
	'xxl',
] as const;

export type ComponentSize = typeof componentSizes [number];