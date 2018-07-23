import server from './server';

server.start(() =>
  console.log(`GraphQL server is running on http://localhost:4000`)
);
