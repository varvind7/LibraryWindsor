import styled from 'styled-components';

const DashAppHolder = styled.div`
  font-family: #4482FF;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  input,
  textarea,
  span,
  div,
  img,
  svg {
    &::selection {
      background: #4482FF;
      color: #fff;
    }
  }
`;

export default DashAppHolder;
