import styled, { css } from 'styled-components';

interface SwitchTogglerProps {
  dark: boolean;
}

export const SwitchToggler = styled.button<SwitchTogglerProps>`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 25px;
  padding: 5px;
  background: #ccc;
  border: 0;
  border-radius: 100px;
  transition: background 0.4s;

  ${props =>
    props.dark &&
    css`
      background: #8257e5;
    `}

  span {
    position: absolute;
    top: 5px;
    left: 5px;
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 100px;
    background: #fff;
    transition: left 0.4s;

    ${props =>
      props.dark &&
      css`
        left: 40px; ;
      `}
  }
`;
