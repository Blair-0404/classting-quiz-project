import React from 'react';
import { ButtonContainer, Title } from './style';
import { ButtonProps } from './types';
import { Link } from 'react-router-dom';

function Button({ title, buttonClick, isClickable, isEnding }: ButtonProps) {
  return (
    isEnding ? (
        <Link to="/result">
          <ButtonContainer onClick={buttonClick} disabled={!isClickable}>
            <Title>{title}</Title>
          </ButtonContainer>
        </Link>) :
      (<ButtonContainer onClick={buttonClick} disabled={!isClickable}>
        <Title>{title}</Title>
      </ButtonContainer>)
  
  );
  
}

export default Button;
