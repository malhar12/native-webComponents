class BlueInputText extends HTMLElement{
  _length;
  constructor(){
    super();
    this._length = 6;
    this.attachShadow({mode: 'open'});
  }

  get disabled(){
    return this.hasAttribute('disabled');
  }

  set disabled(value){
    const val = Boolean(value);
    if(val){
      this.shadowRoot.querySelector('input').setAttribute('disabled');
    } else {
      this.shadowRoot.querySelector('input').removeAttribute('disabled');
    }
  }

  get maxlength(){
    return this.getAttribute('maxlength');
  }

  set maxlength(length){
    const len = +length;
    this._length = len;
    this.shadowRoot.innerHTML = this.renderHTML(this._length);
  }

  static get observedAttributes(){
    return ['disabled', 'maxlength'];
  }

  attributeChangedCallback(attrName, oldValue, newValue){
    if(attrName === 'disabled'){
      this.disabled = newValue;
    } else if(attrName === 'maxlength'){
      this.maxlength = newValue;
    }
  }

  connectedCallback(){
    this.shadowRoot.innerHTML = this.renderHTML(this._length);
  }

  renderHTML(_maxlength){
    return `
      <style>
        :host .blue-inputtext{
          font-size: 14px;
          line-height: 1;
          border: 1px solid #d7d7d7;
          outline: 0;
          height: 20px;
          width: 250px;
          padding: 5px;
        }

        :host .blue-inputtext:focus{
          border-color: #243b4a;
        }

      </style>
      <input type="text" class="blue-inputtext" maxlength="${_maxlength}"/>
    `;
  }
}

customElements.define("b-inputtext", BlueInputText);
