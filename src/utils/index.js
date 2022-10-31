/**
 * @name validateString
 * @description Evaluates if given value is of type string
 * @param {any} value
 * @returns {boolean}
 */
export const validateString = (value) => typeof value === 'string';

/**
 * @name validateBoolean
 * @description Evaluates if given value is of type boolean
 * @param {any} value
 * @returns {boolean}
 */
export const validateBoolean = (value) => typeof value === 'boolean';

/**
 * @name validateObject
 * @description Evaluates if given value is of type object
 * @param {any} value
 * @returns {boolean}
 */
export const validateObject = (obj) => !!(obj && obj.constructor === Object);

/**
 * @name validateArray
 * @description Evaluates if given value is of type array
 * @param {any} value
 * @returns {boolean}
 */
export const validateArray = (arr) => !!(arr instanceof Array);

/**
 * @name validateFunction
 * @description Evaluates if given value is of type function
 * @param {any} value
 * @returns {boolean}
 */
export const validateFunction = (fn) => !!({}.toString.call(fn) === '[object Function]');

/**
 * @name validateNumber
 * @description Evaluates if given value is of type number
 * @param {any} value
 * @returns {boolean}
 */
export const validateNumber = (num) => typeof num === 'number' && !Number.isNaN(Number(num));

/**
 * @name debounce
 * @description Executes received callback delayed according to received delay time in ms
 * @param {function} callback
 * @param {number} delay=300
 */
export const debounce = (callback, delay = 300) => {
	if (!validateNumber(delay)) return null;
	if (!callback || !validateFunction(callback)) return null;

	let delayedCallback;

	return () => {
		if (delayedCallback) clearTimeout(delayedCallback);
		delayedCallback = setTimeout(() => {
			delayedCallback = null;
			callback();
		}, delay);
	};
};
