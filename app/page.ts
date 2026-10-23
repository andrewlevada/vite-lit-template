import { html } from "lit"
import { customElement } from "lit/decorators.js"
import { AutoLitElement } from "./lib/auto-lit-element";

@customElement("test-page")
export class TestPage extends AutoLitElement {
	render() {
		return html`
			<div class="m-40">
				<p class="text-[32px]">You, hello!</p>
			</div>
		`
	}
}
