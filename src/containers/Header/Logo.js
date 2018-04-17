import React from 'react';
import logo from '../../logo.svg';
import styled from 'styled-components';

export default styled.img.attrs({
  src: logo,
  alt: 'logo',
  className: 'app-logo'
})`
  animation: App-logo-spin infinite 20s linear;
  height: 50px;
  display: inline-block;
`;