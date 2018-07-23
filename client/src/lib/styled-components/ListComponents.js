import styled from 'react-emotion';

const UnorderdList = styled('ul')`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavContainer = styled(UnorderdList)``;

export const ListContainer = styled(UnorderdList)``;

export const TagList = styled(UnorderdList)`
  display: flex;
  width: 50%;
  margin: 0 auto;
`;

export const InlineBlockListItem = styled(UnorderdList)`
  flex: 1;
  width: 100%;
  font-weight: 200;
`;
