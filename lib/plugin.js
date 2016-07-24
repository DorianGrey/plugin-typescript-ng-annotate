const tsTranslate = require("plugin-typescript").translate,
	ngAnnotate = require("plugin-ng-annotate").translate;

function translate(load) {
	return tsTranslate.call(this, load).then(function (compiled) {
		load.source = compiled;
		return ngAnnotate(load);
	});
}

exports.translate = translate;
