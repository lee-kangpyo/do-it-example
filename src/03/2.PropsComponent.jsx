import React from 'react'
import PropTypes from 'prop-types'
// 2. 컴포넌트에 데이터를 전달하는 모듈
class PropsComponent extends React.Component {
  render () {
    return(
      <div className="message-container">
        {this.props.name}
      </div>
    )
  }
}

PropsComponent.propTypes = {
  name: PropTypes.string,
};

export default PropsComponent;
