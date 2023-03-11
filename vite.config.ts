import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"~services": "/src/services",
			"~components": "/src/components",
			"~utils": "/src/utils",
			"~assets": "/src/assets",
			"~styles": "/src/assets/styles",
			"~graphics": "./src/assets/graphics",
			"~src": "/src"
		},
	},

	build: {
		outDir: "build"
	},

	// When hosting on GitHub Pages, change base to the repository name
	base: "/"
})

