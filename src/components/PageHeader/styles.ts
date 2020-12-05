import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-self: center;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    text-decoration: none;
    border: 0;
    background: transparent;
    color: #a8a8b3;
    transition: 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;
