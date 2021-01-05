const PrismicDOM = require('prismic-dom');
const Elements = PrismicDOM.RichText.Elements;
const linkResolver = require('./baseLinkResolver');

module.exports = function (type, element, content, children) {
	switch (type) {
		// Add a class to paragraph elements
		case Elements.paragraph:
			return '<p class="rt__p">' + children.join('') + '</p>';

		// Don't wrap images in a <p> tag
		case Elements.image:
			return (
				'<img class"rt__img" src="' +
				element.url +
				'" alt="' +
				element.alt +
				'">'
			);

		// Add a class to hyperlinks
		case Elements.hyperlink:
			var target = element.data.target
				? 'target="' + element.data.target + '" rel="noopener"'
				: '';
			var linkUrl = PrismicDOM.Link.url(element.data, linkResolver);
			return (
				'<a class="rt__link"' +
				target +
				' href="' +
				linkUrl +
				'">' +
				content +
				'</a>'
			);

		// Return null to stick with the default behavior for all other elements
		default:
			return null;
	}
};
