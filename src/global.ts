import globalStyles from "~styles/global.scss?inline";
import globalPageStyles from "~src/pages/global-styles.scss?inline";
import layoutHelperStyles from "~styles/tiny-layout-helper.scss?inline";
import { unsafeCSS } from "lit";

export const componentStyles = [
	unsafeCSS(globalStyles),
	unsafeCSS(layoutHelperStyles)
];

export const pageStyles = [
	unsafeCSS(globalStyles),
	unsafeCSS(layoutHelperStyles),
	unsafeCSS(globalPageStyles),
];

// Global variables and logic goes here
