class BlueRadioButton extends HTMLElement{
  _rdname;
  _rdvalue;
  _rdchecked;
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }

  get disabled(){
    return this.shadowRoot.querySelector('input').hasAttribute('disabled');
  }

  set disabled(value){
    const val = Boolean(value);
    if(val){
      this.shadowRoot.querySelector('input').setAttribute('disabled');
    } else {
      this.shadowRoot.querySelector('input').removeAttribute('disabled');
    }
  }

  get checked(){
    return this.shadowRoot.querySelector('input').getAttribute('checked');
  }

  set checked(value){
    const val = Boolean(value);
    if(!(value === 'undefined')){
      this._rdchecked = value;
      this.shadowRoot.innerHTML = this.renderHTML(this._rdname, this._rdvalue, this._rdchecked);
    }
  }

  get name(){
    return this.shadowRoot.querySelector('input').getAttribute('name');
  }

  set name(val){
    const value = val;
    if(!(value === 'undefined')){
      this._rdname = value;
      this.shadowRoot.innerHTML = this.renderHTML(this._rdname, this._rdvalue, this._rdchecked);
    }
  }

  get value(){
    return this.shadowRoot.querySelector('input').getAttribute('value');
  }

  set value(val){
    const rd_value = val;
    if(!(rd_value === 'undefined')){
      this._rdvalue = rd_value;
      this.shadowRoot.innerHTML = this.renderHTML(this._rdname, this._rdvalue, this._rdchecked);
    }
  }

  static get observedAttributes(){
    return ['name', 'value', 'disabled', 'checked'];
  }

  attributeChangedCallback(attrName, oldValue, newValue){
    if(attrName === 'disabled'){
      this.disabled = newValue;
    } else if(attrName === 'name'){
      this.name = newValue;
    } else if(attrName === 'value'){
      this.value = newValue;
    } else if(attrName === 'checked'){
      this.checked = newValue;
    }
  }

  connectedCallback(){
    this.shadowRoot.innerHTML = this.renderHTML(this._rdname, this._rdvalue, this._rdchecked);
  }

  renderHTML(_name, _value, _checked){
    return `
      <input type="radio" name="${_name}" value="${_value}" checked="${_checked}" />
    `;
  }
}

customElements.define("b-radio-button", BlueRadioButton);
