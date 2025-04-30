export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "sveltekit-github-pages/_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.CJT80UGb.js",app:"_app/immutable/entry/app.BSFLI4TP.js",imports:["_app/immutable/entry/start.CJT80UGb.js","_app/immutable/chunks/9bUkI6HE.js","_app/immutable/chunks/CIuKuh2F.js","_app/immutable/chunks/Sa_9zBaw.js","_app/immutable/entry/app.BSFLI4TP.js","_app/immutable/chunks/CIuKuh2F.js","_app/immutable/chunks/jUJyxnV1.js","_app/immutable/chunks/BrlRvMJm.js","_app/immutable/chunks/Sa_9zBaw.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/sveltekit-github-pages/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
