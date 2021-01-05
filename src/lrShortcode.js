const baseLinkResolver = require('./baseLinkResolver');

module.exports = function (resolver = baseLinkResolver) {
	console.log(resolver);
};
