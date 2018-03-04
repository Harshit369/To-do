import React from 'react';
import styled from 'styled-components';
import { RoundIcon } from '../../components'

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export default ({ onRemove }) => {
  return (
    <ButtonsWrapper>
      <RoundIcon onClick={onRemove} icon="delete" />
      <RoundIcon onClick="" icon="add" />
    </ButtonsWrapper>
  )
}