/* eslint no-nested-ternary: 0 */
/* eslint import/no-extraneous-dependencies: 0 */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { CloudinaryProvider } from './';
import {
  FontAwesome,
  GridContainer,
  InlineBlockListItem,
  TagList,
} from '../lib/styled-components';

const GET_RECIPE = gql`
  query($slug: String!) {
    recipe(where: { slug: $slug }) {
      id
      title
      prepTime
      cookTime
      description
      tags
      ingredients {
        id
        amount
        prep
        ingredient {
          name
        }
      }
      recipeSteps {
        id
        stepNumber
        instruction
      }
    }
  }
`;

const RecipeCard = ({
  match: {
    params: { slug },
  },
}) => (
  <CloudinaryProvider.Consumer>
    {cloudinary => (
      <Query query={GET_RECIPE} variables={{ slug }}>
        {({ data, loading, error }) => {
          const imgUrl = cloudinary.url(slug, {
            width: 300,
            crop: 'fill',
            fetchFormat: 'auto',
            defaultImage: 'default.jpg',
          });
          return loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error!</p>
          ) : !loading && !data.recipe ? (
            <div>
              <p>Recipe Not Found</p>
              <Link to="/recipes">Back</Link>
            </div>
          ) : (
            <main>
              <GridContainer>
                <GridContainer columns="1" autoRows textAlign="center">
                  <h2>{data.recipe.title}</h2>
                  <p>{data.recipe.description}</p>
                  <div>
                    {data.recipe.cookTime && (
                      <Fragment>
                        <FontAwesome name="clock" />
                        {data.recipe.prepTime && (
                          <span>prep time: {data.recipe.prepTime} </span>
                        )}
                        <span>cook time: {data.recipe.cookTime}</span>
                      </Fragment>
                    )}
                    {data.recipe.tags && (
                      <TagList>
                        {data.recipe.tags.map((tag, index) => (
                          <InlineBlockListItem key={tag}>
                            {tag}
                          </InlineBlockListItem>
                        ))}
                      </TagList>
                    )}
                  </div>
                </GridContainer>
                <img alt={data.recipe.title} src={imgUrl} />
                <h3>Ingredients</h3>
                <ul>
                  {data.recipe.ingredients.map(
                    ({ id, amount, prep, ingredient: { name } }) => (
                      <li key={id}>
                        <p>{amount}</p>
                        <p>{name}</p>
                        {prep && <p>{prep}</p>}
                      </li>
                    )
                  )}
                </ul>
                <h3>Instructions</h3>
                <ul>
                  {data.recipe.recipeSteps.map(
                    ({ id, stepNumber, instruction }) => (
                      <li key={id}>
                        <p>{stepNumber}</p>
                        <p>{instruction}</p>
                      </li>
                    )
                  )}
                </ul>
              </GridContainer>
            </main>
          );
        }}
      </Query>
    )}
  </CloudinaryProvider.Consumer>
);

RecipeCard.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default RecipeCard;
