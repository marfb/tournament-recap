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

const DEVICES = [
	{device: 'mobile', maxWidth: 768},
	{device: 'tablet', maxWidth: 1024},
];

/**
 * @name resizeCalc
 * @description return device name for received width
 * @param {number} width
 * @returns {string} device name
 * @example resizeCalc(360) // 'mobile'
 */

export const resizeCalc = (width = 1280) => {
	const foundDevice = DEVICES.find((device) => width < device.maxWidth);
	if (foundDevice) return foundDevice.device;
	return 'desktop';
};

/* const DIRECTION_OPTIONS = {
	1: {},
	2: {},
	3: {},
	4: {},
};

export const getDirection = (ev, obj) => {
	const w = obj.offsetWidth;
	const h = obj.offsetHeight;
	const x = ev.pageX - obj.offsetLeft - (w / 2) * (w > h ? h / w : 1);
	const y = ev.pageY - obj.offsetTop - (h / 2) * (h > w ? w / h : 1);
	const direction = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
	return {newX: x, newY: y};
}; */
