import './App.css';
import React, { Component } from 'react';

export default class App extends Component() {
  state = {
    recipes[
      {
        id: 1,
        name: 'eggs',
        ingredients: ['eggs', 'water', 'salt'],
        directions: ['boil water', 'add eggs', 'salt to taste']
      }
    ]
  }
  render() {
    return (
      <div>
        {this.state.recipes.map(r => <p key=r.id > { r.name }</p>)
  } 
        <RecipeDetails recipe={this.state.recipes[0]} />
      </div >
    );
  }
}


