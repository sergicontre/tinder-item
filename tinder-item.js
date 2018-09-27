import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `tinder-item`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
export class TinderItem extends PolymerElement {
  static get template() {
    return html`

      <style>
        :host {
          display: block;
        }
        
        .card {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            width: 40%;
        }

        .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }

        .container {
            padding: 2px 16px;
        }

      </style>

      <div class="card" draggable="true">
        <img draggable="false" src=[[avatar]] alt="Avatar" style="width:100%">
        <div class="container">
          <h4><b>[[name]]</b></h4> 
          <p>[[description]]</p> 
        </div>
      </div>
    `;
  }
  static get properties() {
    return {
      avatar: {
        type: String
      },
      name: {
        type: String,
      },
      description: {
        type: String
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("dragstart", this._startDrag, false);
    this.addEventListener("dragend", this._stopDrag, false);
  }
  
  _startDrag(event) {
    this.startX = event.clientX || event.touches[0].clientX;
    this.startY = event.clientY || event.touches[0].clientY;
  }

  _stopDrag(event) {
    if (this.startX < event.clientX) {
      return this.like();
    } else {
      return this.nope();
    }
  }

  like(item) {
    this.dispatchEvent(new CustomEvent('like'));
  }
  nope(item) {
    this.dispatchEvent(new CustomEvent('nope'));
  }

}

window.customElements.define('tinder-item', TinderItem);
