import styled from 'react-emotion';

const GridContainer = styled('div')`
  display: grid;
  grid-template-columns: ${props => props.columns};
  grid-auto-rows: ${props => props.autoRows};
  justify-content: ${props => props.justifyContent};
  text-align: ${props => props.textAlign};
`;

export default GridContainer;
