const lrShortcode = require('./src/lrShortcode');
const hsShortode = require('./src/hsShorcode');

module.exports = function (config) {
	lrShortcode();
	hsShortode();
};
