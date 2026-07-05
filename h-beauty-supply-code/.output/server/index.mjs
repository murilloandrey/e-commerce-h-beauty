globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-05T04:26:08.744Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/cat-accessories-BpD2Lfv0.jpg": {
		"type": "image/jpeg",
		"etag": "\"14e7f-K07ywnI3c+zDW93gyvmhBsRqGTU\"",
		"mtime": "2026-07-05T04:26:08.306Z",
		"size": 85631,
		"path": "../public/assets/cat-accessories-BpD2Lfv0.jpg"
	},
	"/assets/cat-braiding-D-pjCYHH.jpg": {
		"type": "image/jpeg",
		"etag": "\"163ce-Odc96iFAOQ2inRBz0zOU45wWzFY\"",
		"mtime": "2026-07-05T04:26:08.307Z",
		"size": 91086,
		"path": "../public/assets/cat-braiding-D-pjCYHH.jpg"
	},
	"/assets/cat-crochet-CFGquC6T.jpg": {
		"type": "image/jpeg",
		"etag": "\"11536-ccy6taZ5VzOYWW8NNTfp55G7Rko\"",
		"mtime": "2026-07-05T04:26:08.307Z",
		"size": 70966,
		"path": "../public/assets/cat-crochet-CFGquC6T.jpg"
	},
	"/assets/cat-extensions-jw-Kt4Wy.jpg": {
		"type": "image/jpeg",
		"etag": "\"b6f0-iyjvl7B2Oe3/sgKKQ7ZrDkx4gG0\"",
		"mtime": "2026-07-05T04:26:08.307Z",
		"size": 46832,
		"path": "../public/assets/cat-extensions-jw-Kt4Wy.jpg"
	},
	"/assets/cat-wigs-B6bIvvo3.jpg": {
		"type": "image/jpeg",
		"etag": "\"7efc-14f3WWLfu67Arf8X9tHyem0b0b8\"",
		"mtime": "2026-07-05T04:26:08.307Z",
		"size": 32508,
		"path": "../public/assets/cat-wigs-B6bIvvo3.jpg"
	},
	"/assets/hero-CHqKzrGU.jpg": {
		"type": "image/jpeg",
		"etag": "\"3fb94-syBtM77DAnwSMHKHShM45skJBo4\"",
		"mtime": "2026-07-05T04:26:08.308Z",
		"size": 261012,
		"path": "../public/assets/hero-CHqKzrGU.jpg"
	},
	"/assets/index-ARv0osIi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54108-0FkHT6Q1cwIZeDl8HYo+MrT1DNU\"",
		"mtime": "2026-07-05T04:26:08.306Z",
		"size": 344328,
		"path": "../public/assets/index-ARv0osIi.js"
	},
	"/assets/p1-B5iOdDxR.jpg": {
		"type": "image/jpeg",
		"etag": "\"a29a-eg4PCsVKdgZTtxUAJgfsWmAy27U\"",
		"mtime": "2026-07-05T04:26:08.309Z",
		"size": 41626,
		"path": "../public/assets/p1-B5iOdDxR.jpg"
	},
	"/assets/p2-Fq7LOKhf.jpg": {
		"type": "image/jpeg",
		"etag": "\"9986-PZ68UC66L35aCeWzg2kYERwxp88\"",
		"mtime": "2026-07-05T04:26:08.309Z",
		"size": 39302,
		"path": "../public/assets/p2-Fq7LOKhf.jpg"
	},
	"/assets/p3-l6lzKXgb.jpg": {
		"type": "image/jpeg",
		"etag": "\"8b88-fzYH+loAhwIwUQnffAKhSx2XV+c\"",
		"mtime": "2026-07-05T04:26:08.309Z",
		"size": 35720,
		"path": "../public/assets/p3-l6lzKXgb.jpg"
	},
	"/assets/p4-BYyqA4By.jpg": {
		"type": "image/jpeg",
		"etag": "\"bdff-bWb7I/grWna/BZS/C1YqZ0Rs0GY\"",
		"mtime": "2026-07-05T04:26:08.309Z",
		"size": 48639,
		"path": "../public/assets/p4-BYyqA4By.jpg"
	},
	"/assets/p5-CIocL8zy.jpg": {
		"type": "image/jpeg",
		"etag": "\"10ef5-Nxi2XuXvpBNuI95CuZon1/fMr2c\"",
		"mtime": "2026-07-05T04:26:08.309Z",
		"size": 69365,
		"path": "../public/assets/p5-CIocL8zy.jpg"
	},
	"/assets/p6-Bn9BO37a.jpg": {
		"type": "image/jpeg",
		"etag": "\"683e-9dBvINffVvsjwV0x14zczH+hijs\"",
		"mtime": "2026-07-05T04:26:08.310Z",
		"size": 26686,
		"path": "../public/assets/p6-Bn9BO37a.jpg"
	},
	"/assets/routes-Zvc3kiNq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ea7-Rg9xVmUN4/mB7nzieDOSKaHQSjM\"",
		"mtime": "2026-07-05T04:26:08.306Z",
		"size": 20135,
		"path": "../public/assets/routes-Zvc3kiNq.js"
	},
	"/assets/styles-CvcTH0e0.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15b5e-MuLktfrvTV0diDNHjAf2ihUD05o\"",
		"mtime": "2026-07-05T04:26:08.310Z",
		"size": 88926,
		"path": "../public/assets/styles-CvcTH0e0.css"
	},
	"/assets/logo-B3U5E1jT.png": {
		"type": "image/png",
		"etag": "\"af8e0-5Fhug/eaCs85ab7TCDPY8slxN8E\"",
		"mtime": "2026-07-05T04:26:08.308Z",
		"size": 719072,
		"path": "../public/assets/logo-B3U5E1jT.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_VAS5jF = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_VAS5jF
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
