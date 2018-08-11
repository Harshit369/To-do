import React from 'react';
import styled from 'styled-components';
import {Themed} from '../../theme';
import { RoundIcon } from '../../components'

const ButtonsWrapper = Themed(styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-right: 1px solid ${({theme}) => theme.textLight};
  padding-right: 8px;

  .bucketOption {
    margin-bottom: 8px;
    cursor: pointer;
    color: ${({ theme }) => theme.primary};

    &.last {
      margin-top: auto;
      order: 99;
      margin-bottom: 0px;
    }

    &.alert {
      color: ${({ theme }) => theme.alert}
    }
  }
`);

const BucketOptions = ({ onRemove, addTask, editBucket }) => {
  return (
    <ButtonsWrapper>
      <RoundIcon className="bucketOption" onClick={addTask} icon="add" />
      <RoundIcon className="bucketOption" onClick={editBucket} icon="mode_edit" />
      <RoundIcon className="bucketOption last alert" onClick={onRemove} icon="delete" />
    </ButtonsWrapper>
  )
}

export default BucketOptions