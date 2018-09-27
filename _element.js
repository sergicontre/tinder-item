import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `tinder-item`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TinderItem extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'tinder-item',
      },
    };
  }
}

window.customElements.define('tinder-item', TinderItem);
