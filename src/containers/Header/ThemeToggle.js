import React, { Component } from 'react';
import styled from 'styled-components';
import { Theme } from '../../theme';

const ThemeSwitch = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80px;
  margin-left: auto;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;

    &.light {
      color: ${({ selectedTheme }) => selectedTheme == 'normal' ? '#ddf600' : 'white' }
    }

    &.dark {
      color: ${({ selectedTheme }) => selectedTheme == 'dark' ? '#2956b2' : 'white' }
    }
  }

`;

class ThemeToggle extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    selectedTheme: 'normal'
  }

  toggleAppTheme = () => {
    const { selectedTheme } = this.state;
    if(selectedTheme == 'normal') {
      Theme.setTheme('dark');
    } else {
      Theme.setTheme('normal');
    }
  }

  componentWillMount() {
    this.setState({
      selectedTheme: Theme.getThemeName()
    });
    Theme.on('change', () => {
      const newTheme = Theme.getThemeName();
      this.setState({
        selectedTheme: newTheme
      });
    })
  }

  render() {
    return (
      <ThemeSwitch onClick={this.toggleAppTheme} selectedTheme={this.state.selectedTheme}>
        <span className="light">
          <i className="material-icons icon">wb_sunny</i>
        </span>
        <span className="dark">
          <i className="material-icons icon">brightness_2</i>
        </span>
      </ThemeSwitch>
    )
  }
}

export default ThemeToggle;