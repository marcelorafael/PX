import styled, {css} from 'styled-components/native';

import {ButtonProps} from '.';

const wrapperModifiers = {
  container: (theme: DefaultTheme, color) => `
    background-color: ${theme.colors[color]};
  `,
  outline: (theme: DefaultTheme, color) => `
  border-color: ${theme.colors[color]};
  border-width: 1px;
  `,
  // primary: (css) => '',
  // secondary: (css) => '',
};

export const Wrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})<ButtonProps>`
  ${({theme, color = 'primary', variant}) => css`
    width: 100%;
    height: 40px;

    border-radius: 5px;

    ${!!variant && wrapperModifiers[variant](theme, color)}
  `}
`;

export const Text = styled.Text`
  color: red;
`;
