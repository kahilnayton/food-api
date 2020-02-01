
import React, { Component } from 'react'
import Food from './components/Food.js'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      food: null
    }
  }


  componentDidMount() {
    let meal = async () => await this.getFood()

  }

  // Filter by main ingredient
  async getFood() {
    const res = await axios({
      method: 'GET',
      baseURL: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'
    })
    let foodData = res.data
    this.setState({
      food: foodData
    })
  }


  // renderFood() {
  //   let { food } = this.state
  //   console.log(food)
  //   return food ? food.map(food => (
  //     <p className="food" key={food.meals.strMeal}> {food.meals.strMeal}</p>
  //   )) : <p>Loading</p>
  // }



  render() {
    let { food } = this.state
    return (
      <div className="App">
        <h2>Hello food</h2>
        <button onClick={async () => await this.getFood()}>Get food</button>
        {food ?
          <Food food={food} /> : <h1>no food</h1>}

        <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" placeholder="jane@example.com"></input>



      </div>
    );
  }
}

export default App;
