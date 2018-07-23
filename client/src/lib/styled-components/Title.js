import styled from 'react-emotion';

export const LargeTitle = styled('h1')`
  display: none;
  @media (min-width: 34.375rem) {
    display: block;
  }
`;

export const SmallTitle = styled('h1')`
  display: block;

  @media (min-width: 34.375rem) {
    display: none;
  }
`;
