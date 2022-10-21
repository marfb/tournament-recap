import {validateString} from 'utils';
import palette from './palette';

/**
 * @name getColor
 * @description return color from palette
 * @param {string} type
 * @param {string} color
 * @returns {string} color
 * @example getColor('primary', 'main') // #2979FF
 */
export const getColor = (type, color) => {
	if (!validateString(type) || !validateString(color)) return '';
	const colorType = palette[type.toLowerCase()];
	if (!colorType) return '';

	const selectedColor = colorType[color.toLowerCase()];
	if (!selectedColor) return '';

	return selectedColor;
};
