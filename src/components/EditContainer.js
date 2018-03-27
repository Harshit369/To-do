import React, { Component } from 'react';
import styled from 'styled-components';
import TextInput from  './TextInput';
import RoundIcon from './RoundIcon';

const Wrapper = styled.div.attrs({
  className: 'edit-container-wrapper'
})`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const InputContainer = styled.div.attrs({
  className: 'edit-container-input-wrapper'
})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const updateButtonsStyle = {
  flexShrink: 0,
  border: '0px',
  cursor: 'pointer'
};

class EditContainer extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    newValue: this.props.value,
    oldValue: this.props.value
  }

  onChange = (newValue) => {
    this.setState({
      newValue
    });
  }

  onSave = () => {
   this.setState({
    oldValue: this.state.newValue
   });
   this.props.onUpdate(this.state.newValue);
  }

  onCancel = () => {
    this.setState({
      newValue: this.state.oldValue
    });
    this.props.onCancel(this.state.oldValue);
  }

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.onSave();
    }
  }

  getChildren = () => {
    const { editable } = this.props;
    const { newValue, oldValue } = this.state;
    if (editable) {
      return (
        <InputContainer>
          <TextInput onKeyPress={this.onKeyPress}
            value={newValue} 
            name="editContainerInput" 
            onChange={(e) => this.onChange(e.target.value)}  />
          <RoundIcon 
            style={updateButtonsStyle} 
            icon="clear" onClick={this.onCancel} />
          <RoundIcon 
            style={updateButtonsStyle} 
            icon="done" onClick={this.onSave} />
        </InputContainer>
      );
    }
    return this.props.value;
  }

  render() {
    return (
      <Wrapper className={this.props.className}>
        {this.getChildren()}
      </Wrapper>
    );
  }
}

export default EditContainer;
