import React from 'react'
import withStyles, {css} from '../04/withStyles'

export default function(defaultMessage){
  return WrappedComponent => {
    const {displayName, name : componentName} = WrappedComponent;
    const WrappedComponentName = displayName || componentName

    function ComponentWithError( { hasError, errorMEssage, styles, ...props } ) {
      return (
        <React.Fragment>
          <WrappedComponent {...props} />
          {hasError && <div {...css(styles.error)}>{errorMEssage}</div>}
        </React.Fragment>
      );
    };

    ComponentWithError.defaultProps = {
      errorMEssage: defaultMessage
    }

    ComponentWithError.displayName = `withError(${WrappedComponentName})`
    return withStyles( ({color}) => ({
      error:{
        color:color.error,
      },
    }) ) (ComponentWithError)

  }
};
