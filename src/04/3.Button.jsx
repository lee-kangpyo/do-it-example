import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Button extends PureComponent {
  render () {
    const {
      children,
      disabled,
      onPress,
    } = this.props;
    return (
      <button onClick={onPress}>{children}</button>
    )

  }
}

Button.propTypes = {
  children : PropTypes.node.isRequired,
  onPress : PropTypes.func,
}

Button.defaultProps = {
  onPress : () => {console.log("버튼클릭")},
}

export default Button;
