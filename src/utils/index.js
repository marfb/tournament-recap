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

/**
 * @name isExpired
 * @description Returns if received time + ttl in miliseconds has expired compared to current time
 * @param {number} time //miliseconds
 * @param {number} ttl //miliseconds
 * @returns {boolean}
 */
export const isExpired = (time, ttl) => time + ttl < new Date().getTime();

/**
 * @name setCache
 * @description Save data to localStorage with TTL
 * @param {string} dataKey
 * @param {any} dataValue
 * @param {expireHours} number=24
 */
export const setCache = (dataKey, dataValue, expireHours = 24) => {
	try {
		if (!expireHours || !validateNumber(expireHours))
			throw new Error('Received expire time must be a number');
		if (!dataKey || !validateString(dataKey))
			throw new Error('Received key must be a valid string');

		const hoursToMiliseconds = expireHours * 60 * 60 * 1000;
		const dataToStore = {
			data: JSON.stringify(dataValue),
			time: new Date().getTime(),
			expire: hoursToMiliseconds,
		};
		const stringifiedData = JSON.stringify(dataToStore);
		localStorage.setItem(dataKey, stringifiedData);
	} catch (error) {
		console.warn('Error at setCache: ', error);
	}
};

/**
 * @name getCache
 * @param {string} dataKey
 * @returns {any} Data saved in localStorage or null
 */
export const getCache = (dataKey) => {
	try {
		if (!dataKey && !validateString(dataKey))
			throw new Error('Received key must be a valid string');

		const stringifiedData = localStorage.getItem(dataKey);
		if (!stringifiedData || !validateString(stringifiedData))
			throw new Error(`No stored data available for dataKey: ${dataKey}`);

		const storedData = JSON.parse(stringifiedData);
		if (!storedData || !validateObject(storedData))
			throw new Error(`Stored data malformed for ${dataKey}`);

		const {data, time, expire} = storedData;

		if (!data || !validateString(data)) throw new Error(`Stored data for ${dataKey} is invalid`);
		if (!time || !validateNumber(time))
			throw new Error(`Stored data for ${dataKey} has invalid time`);
		if (!expire || !validateNumber(expire))
			throw new Error(`Stored data for ${dataKey} has invalid expire time`);

		const isDataExpired = isExpired(time, expire);

		if (isDataExpired) throw new Error(`Stored data for ${dataKey} has expired`);

		const parsedData = JSON.parse(data);
		return parsedData;
	} catch (error) {
		console.warn('Error at getCache: ', error);
		return null;
	}
};
