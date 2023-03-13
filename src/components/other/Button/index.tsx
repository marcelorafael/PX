import React from 'react';
import * as S from './styles';

export type ColorTypes = 'primary' | 'secondary';

export type VariantTypes = 'container' | 'outline';

export interface ButtonProps {
  title?: string;
  children?: JSX.Element;
  color?: ColorTypes;
  variant?: VariantTypes;
  onPress?: () => void;
}

const Button = ({
  title,
  children,
  color = 'primary',
  variant = 'container',
  onPress,
}: ButtonProps) => {
  return (
    <S.Wrapper color={color} variant={variant} onPress={onPress}>
      <S.Text>{title}</S.Text>
      {children}
    </S.Wrapper>
  );
};

export default Button;
