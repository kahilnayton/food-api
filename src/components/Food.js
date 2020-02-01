import React, { Component } from 'react';

class Food extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // food: []
        }
        console.log(this.props.food.meals[1].strMeal)
    }

    render() {
        return (
            <div className="food">
                <h1>{this.props.food.meals[1].strMeal}</h1>

            </div>

        )
    }
}


export default Food;