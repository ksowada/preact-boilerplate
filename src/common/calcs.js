import _ from 'lodash';

/** Macht aus einem String unabh&auml;ngig, ob mit Komma oder Punkt
 geschrieben einen float zur&uuml;ck */
export function getFloatOfText(preis) {
	preis = preis.replace(/[,]/, '.');
	preis = parseFloat(preis);
	return preis;
}
export function round(wert) {
	return Math.round10(wert, -2);
}
// force number bounds min max
export function bound(v, vmin, vmax) {
	if (v < vmin) return vmin;
	if (v > vmax) return vmax;
	return v;
}
// sum arr to ix [5, 4, 3, 2, 1], 1 => 5+4=9
export function sum(arr, ix) {
	let sum;
	if (ix === undefined) {
		sum = _.reduce(arr, (memo, num) => {
			return memo + num;
		}, 0);
		return sum;
	}
	if (ix < 0) return 0;
	let ini = _.initial(arr, arr.length - 1 - ix);
	sum = _.reduce(ini, (memo, num) => {
		return memo + num;
	}, 0);
	return sum;
}
export function ratio(ratio, min, max) {
	return min + (max - min) * ratio;
}
// factor goldener Golden_ratio
export function growth(val, pow) {
	return Math.pow(1.6180339887498948482045, pow) * val;
}
export function getTextOfFloat(wert) {
	wert = String(wert); // konvertiere nach String
	wert = wert.replace(/[.]/, ',');
	return wert;
}
export function getEuroOfFloat(wert) {
	wert = String(round(wert).toFixed(2)); // konvertiere nach String
	wert = wert.replace(/[.]/, ',');
	return wert + " €";
}
export function getTimeTextOfMin(wert) {
	let hour = wert / 60.0;
	let prefix = "+";
	let min = "" + parseInt(wert % 60.0,10);
	if (min < 0) {
		prefix = "-";
		min = -min;
	}
	// hour wird auch noch negativ, au&szlig;er min, wenn h gr&ouml;&szlig;er 0 ist
	if (hour < 0) {
		hour = -hour;
	}
	if (min.length === 1) min = "0" + min;
	return prefix + parseInt(hour,10) + ":" + min;
}
export function setColoredRelativeTimeOfMin(wert, comp, invertColor) {
	let colorText;
	wert = parseInt(wert,10);
	if (wert > 0 && !invertColor) colorText = "green";
	if (wert < 0 && !invertColor) colorText = "red";
	if (wert > 0 && invertColor) colorText = "red";
	if (wert < 0 && invertColor) colorText = "green";
	if (wert === 0) colorText = "black";
	comp.style.color = colorText;
	comp.value = getTimeTextOfMin(wert);
}
export function setColoredRelativeEuro(wert, comp, invertColor) {
	let colorText;
	wert = parseInt(wert * 100,10);
	let prefix = "";
	if (wert > 0) prefix = "+";
	if (wert > 0 && !invertColor) colorText = "green";
	if (wert < 0 && !invertColor) colorText = "red";
	if (wert > 0 && invertColor) colorText = "red";
	if (wert < 0 && invertColor) colorText = "green";
	if (wert === 0) colorText = "black";
	comp.style.color = colorText;
	comp.value = prefix + getEuroOfFloat(wert / 100);
}
export function join(obj1, obj2) {
	return _.clone(_.extend(obj1, obj2));
}
// Code from https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// Closure
(function () {
	/**
	 * Decimal adjustment of a number.
	 *
	 * @param {String}  type  The type of adjustment.
	 * @param {Number}  value The number.
	 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base). -2: 0.01
	 * @returns {Number} The adjusted value.
	 */
	function decimalAdjust(type, value, exp) {
		// If the exp is undefined or zero...
		if (typeof exp === 'undefined' || +exp === 0) {
			return Math[type](value);
		}
		value = +value;
		exp = +exp;
		// If the value is not a number or the exp is not an integer...
		if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
			return NaN;
		}
		// Shift
		value = value.toString().split('e');
		value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
		// Shift back
		value = value.toString().split('e');
		return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
	}

	// Decimal round
	if (!Math.round10) {
		Math.round10 = function (value, exp) {
			return decimalAdjust('round', value, exp);
		};
	}
	// Decimal floor
	if (!Math.floor10) {
		Math.floor10 = function (value, exp) {
			return decimalAdjust('floor', value, exp);
		};
	}
	// Decimal ceil
	if (!Math.ceil10) {
		Math.ceil10 = function (value, exp) {
			return decimalAdjust('ceil', value, exp);
		};
	}
})();
