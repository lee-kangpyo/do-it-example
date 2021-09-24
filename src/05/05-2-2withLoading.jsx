import React from 'react'

export default function withLoading(WrappedComponent, loadingMessage = "로딩 중") {
  const { displayName, name: componentName } = WrappedComponent;
  const WrappedComponentName = displayName || componentName;

  function WithLoading({isLoading, ...otherProps}){
    if(isLoading) return loadingMessage;

    return (
      <WrappedComponent {...otherProps} />
    );
  }
  WithLoading.displayName = `withLoading(${WrappedComponentName})`;
  return WithLoading;
}
