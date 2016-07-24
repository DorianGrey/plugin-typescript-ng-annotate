const tsTranslate = require("plugin-typescript").translate,
	ngAnnotate = require("ng-annotate");

function translate(load) {
	return tsTranslate.call(this, load).then(function (compiled) {
		const annotated = ngAnnotate(compiled, {add: true});
		if (annotated.errors) {
			return Promise.reject(annotated.errors.join("\n"));
		} else {
			load.source = annotated.src;
			return Promise.resolve(load);
		}
	});
}

exports.translate = translate;
