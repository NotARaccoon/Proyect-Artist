import styled from 'styled-components'

export const ButtonContainer = styled.button`
    background:transparent;
    border:.1rem var(--mainOrange) solid;
    border-radius:5px;
    border-color: ${props =>
      props.cart ? "var(--mainRed)":"var(--mainOrange)"};
    color: ${props =>
      props.cart ? "var(--mainRed)":"var(--mainOrange)"};
    cursor:pointer;
    transition: all .2s ease-in-out;
    margin: .2rem;
  &:hover{
    background:${props =>
      props.cart ? "var(--lightRed)":"var(--lightOrange)"};
    color: var(--mainDark);
  }
  &:focus{
    outline:none;
  }
`;
