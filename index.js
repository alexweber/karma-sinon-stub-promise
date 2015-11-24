var path = require('path');

var framework = function(files) {
	files.unshift({
		pattern: path.resolve(require.resolve('sinon-stub-promise')),
		included: true,
		served: true,
		watched: false
	});
};

framework.$inject = ['config.files'];
module.exports = {'framework:sinon-stub-promise': ['factory', framework]};
