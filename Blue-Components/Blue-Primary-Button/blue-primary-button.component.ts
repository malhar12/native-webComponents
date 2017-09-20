class BluePrimaryButton extends HTMLElement {
  _disabled;
  _label;

  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }

  get disabled(){
    return this.hasAttribute('disabled');
  }

  set disabled(value){
    const val = Boolean(value);
    this._disabled = val;
    if(val){
      this.shadowRoot.querySelector('button').setAttribute('disabled', '');
    } else {
      this.shadowRoot.querySelector('button').removeAttribute('disabled');
    }
  }

  get label(){
    return this.getAttribute('label');
  }

  set label(value){
    this._label = value;
    this.shadowRoot.innerHTML = this.renderHTML(this._label);
  }

  static get observedAttributes(){
    return ['disabled', 'label'];
  }

  attributeChangedCallback(attrName, oldValue, newValue){
    if(attrName === 'disabled'){
      this.disabled = newValue;
    }else if(attrName === 'label'){
      this.label = newValue;
    }
  }

  connectedCallback(){
    this.shadowRoot.innerHTML = this.renderHTML(this._label);
  }

  renderHTML(lbl){
    return `
      <style>
        :host .primary-button{
          background-color: #243b4a;
          font-size: 14px;
          line-height: 1;
          text-align: center;
          color: #fff;
          border: 0;
          outline: 0;
          height: 36px;
        }
        :host .primary-button:hover{
          cursor: pointer;
          color: #fff;
        }
        :host .primary-button[disabled]{
          opacity: 0.96;
          background-color: #fff;
          border: 1px solid #d7d7d7;
          font-size: 14px;
          line-height: 1;
          text-align: center;
          color: #243b4a;
        }
      </style>
      <button type="button" class="primary-button">${lbl}</button>
    `;
  }
}

customElements.define("b-primary-button", BluePrimaryButton);
