import React from 'react';
import PropTypes from 'prop-types';

const ThemeWrapper = ComponentToTheme => {
  const Wrapped = (props, context) => {
    return <ComponentToTheme {...props} theme={context.theme} />
  }

  Wrapped.contextTypes = {
    theme: PropTypes.object
  }
  
  return Wrapped;

}

export default ThemeWrapper;