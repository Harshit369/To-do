import React from 'react';
import styled from 'styled-components';
import { RoundIcon } from '../../components'

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-right: 1px solid #ededed;
  padding-right: 8px;
`

export default ({ onRemove }) => {
  return (
    <ButtonsWrapper>
      <RoundIcon onClick="" icon="add" />
      <RoundIcon onClick={onRemove} icon="delete" />
    </ButtonsWrapper>
  )
}