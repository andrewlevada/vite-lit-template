// Support of css modules
// Delete it if you don't need them

declare module "*.css?inline" {
	const content: string;
	export default content;
}

declare module "*.scss?inline" {
	const content: string;
	export default content;
}

// This part allows references to images from scripts

declare module "*.png";
declare module "*.jpg";
declare module "*.svg";
