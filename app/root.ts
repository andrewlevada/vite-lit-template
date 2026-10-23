import { html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { AutoLitElement } from '@/lib/auto-lit-element'

import "./page"

@customElement('root-element')
export class RootElement extends AutoLitElement {
  render() {
    return html`
      <test-page></test-page>
    `
  }
}
