import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Input extends PureComponent {
  constructor(props){
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange () {
    const { name, onChange } = this.props;
    if(onChange){
      onChange(name, e.target.value);
    }
  }

  componentDidMount () {
    if(this.props.autoFocus){
      this.ref.focus();
    }
  }

  comonentDidUpdate() {
    if(this.props.autoFocus){
      this.ref.focus();
    }
  }


  setRef (ref) {
    this.ref = ref
  }


  render () {
    const { errorMessage, label, name, value, type, onFocus } = this.props;
    return(
      <label>
        {label}
        <input
          id = {`input_${name}`}
          ref = {this.setRef}
          onChange = {this.handleChange}
          onFocus = {onFocus}
          value = {value}
          type = {type}
        />
      {errorMessage && <span className = 'error'>{errorMessage}</span>}
      </label>
    )
  }

  Input.PropTypes = {
    type : PropTypes.onOf(["text", "number", "price"]),
    name : PropTypes.string.isRequired,
    value : PropTypes.onOfType([PropTypes.number, PropTypes.string]),
    errorMessage : PropTypes.string,
    label : PropTypes.string,
    onChange : PropTypes.func,
    onFocus : PropTypes.func,
    autoFocus : PropTypes.bool,
  };

  Input.defaultProps = {
    onChange:(){},
    onFocus:(){},
    autoFocus:false,
    trpe:"text"
  }



}

export default Input;
