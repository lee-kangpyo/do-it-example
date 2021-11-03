import React from 'react'
import PropTypes from 'prop-types'

class LoadingProvider extends React.Component {
  constructor(props){
    super(props);

    this.state = {loading: false}
    this.setLoading = this.setLoading.bind(this);
  }

  // 소비자는 이함수를 통해 loading과 setLoading을 전달받는다.
  getChildContext(){
    return{
      loading:this.state.loading,
      setLoading:this.setLoading,
    }
  }

  setLoading(loading){
    this.setState( { loading } );
  }

  render() {
    return this.props.children;
  }
}

LoadingProvider.childContextTypes = {
  loading:PropTypes.bool,
  setLoading:PropTypes.func,
}

export default LoadingProvider;
