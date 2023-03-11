// Support of css modules
// Delete it if you don't need them

declare module "*.css" {
	const content: CSSStyleSheet;
	export default content;
}

declare module "*.scss" {
	const content: CSSStyleSheet;
	export default content;
}

// This part allows references to images from scripts

declare module "*.png";
declare module "*.jpg";
declare module "*.svg";
