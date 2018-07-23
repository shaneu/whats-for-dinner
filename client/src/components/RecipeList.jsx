/* eslint no-nested-ternary: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { ListContainer } from '../lib/styled-components';

const GET_RECIPES = gql`
  query {
    recipes {
      id
      title
      description
      slug
    }
  }
`;

const RecipeList = () => (
  <Query query={GET_RECIPES}>
    {({ data, loading, error }) =>
      loading ? (
        'Loading...'
      ) : error ? (
        <p>There&apos;s been an error</p>
      ) : (
        <ListContainer>
          {data.recipes.map(({ id, title, description, slug }) => (
            <li key={id}>
              <Link to={`/recipe/${slug}`}>
                <h3>{title}</h3>
              </Link>
              <p>{description}</p>
            </li>
          ))}
        </ListContainer>
      )
    }
  </Query>
);

export default RecipeList;
