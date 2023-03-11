// Entry point for all pages

// @ts-ignore: Property 'UrlPattern' does not exist
if (!globalThis.URLPattern)
	import("urlpattern-polyfill").then(importRouter);
else importRouter();

function importRouter() {
	// Imports router component, which picks a page to display
	import("./pages/router").then(f => f.default());
}

// Needed for the file to be loaded as module
export {}
