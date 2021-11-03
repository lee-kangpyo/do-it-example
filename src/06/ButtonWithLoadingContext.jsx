import React from 'react';
import PropTypes from 'prop-types';
import Button from '../04/3.Button';
import WithLoadingContext from './withLoadingContext'

function ButtonWithLoadingContext ( {loading, setLoading, label} ){
  return(
    <Button onPress={ () => setLoading(!loading) }>
      {loading ? '로딩중' : label}
    </Button>
  );
}

ButtonWithLoadingContext.propTypes = {
  label:PropTypes.string,
  loading:PropTypes.bool,
  setLoading:PropTypes.func,
}

export default WithLoadingContext(ButtonWithLoadingContext);
