import React from 'react';
import {ButtonContainer, Title} from './style'
import { ButtonProps } from './types';

function Button({ title, buttonClick }: ButtonProps) {
  return (
    <ButtonContainer onClick={buttonClick}>
      <Title>{title}</Title>
    </ButtonContainer>
  );
}

export default Button;
