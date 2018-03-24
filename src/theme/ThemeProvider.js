import React, { Component } from 'react';
import Theme from './theme';
import PropTypes from 'prop-types';

const ThemeProvider = (ComponentToWrap) => {
  return class ThemeWrapper extends Component {

    constructor(props) {
      super(props);
    }

    state = {
      theme: Theme.getTheme()
    }

    static childContextTypes = {
      theme: PropTypes.object
    }

    getChildContext() {
      return { theme: this.state.theme }
    }

    componentWillMount () {
      Theme.on('change', () => {
        this.setState({ theme: Theme.getTheme() })
        this.forceUpdate();
      })
    }

    render () {
      return <ComponentToWrap />;
    }
  }
}

export default ThemeProvider;