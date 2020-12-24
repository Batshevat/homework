import React, { Component } from 'react';

export default class recipeDetails extends Component {
    render() {
        return (
            <div>
                <>
                    <h2>{this.props.recipe.name}</h2>
                    <h3>{this.props.recipe.ingredients.map(i, index) =><p key={index}>{i}</p>}</h3>
                    <h3>{this.props.recipe.directions.map(d, index) =><p key={index}>{d}</p>}</h3>
                </>
            </div>
        )
    }
}