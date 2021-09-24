import React from 'react'

export default function withLoading(WrappedComponent) {
  const { displayName, name: componentName } = WrappedComponent;
  const WrappedComponentName = displayName || componentName;

  function WithLoading(props){
    if(props.isLoading) return '로딩중';

    return (
      <WrappedComponent {...props} />
    );
  }
  WithLoading.displayName = `withLoading(${WrappedComponentName})`;
  return WithLoading;
}
