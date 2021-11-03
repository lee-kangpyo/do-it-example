import React from 'react';
import PropTypes from 'prop-types';
import Buttom from '../04/3.Button';
import WithLoadingContext from './WithLoadingContext'

function ButtonWithLoadingContext ( {loading, setLoading, label} ){
  return(
    <Button onPress={ () => setLoading(!loading) }>
      {loading ? '로딩중' : label}
    </Button>
  );
}

ButtonWithLoadingContext.propTypes = {
  label:PropTypes.string,
  loading:ProtoTypes.bool,
  setLoading:ProtoTypes.func,
}

export default WithLoadingContext(ButtonWithLoadingContext);
