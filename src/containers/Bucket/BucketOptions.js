import React from 'react';
import styled from 'styled-components';
import { RoundIcon } from '../../components'

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-right: 1px solid #ededed;
  padding-right: 8px;

  .bucketOption {
    margin-bottom: 8px;
    cursor: pointer;
    &.last {
      margin-top: auto;
      order: 99;
      margin-bottom: 0px;
    }
  }
`

export default ({ onRemove, addTask, editBucket }, {theme}) => {
  return (
    <ButtonsWrapper theme={theme}>
      <RoundIcon className="bucketOption" onClick={addTask} icon="add" />
      <RoundIcon className="bucketOption" onClick={editBucket} icon="mode_edit" />
      <RoundIcon className="bucketOption last" onClick={onRemove} icon="delete" />
    </ButtonsWrapper>
  )
}