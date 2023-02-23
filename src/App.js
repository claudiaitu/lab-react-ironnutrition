import './App.css';
import foodData from "./foods.json";
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';

function App() {

  const [foods, setFoods] = useState(foodData)

  const foodItems = foods.map(food => (
    <FoodBox food={food}/>
  ));

  const addNewFood = (newFood) => {
    setFoods([newFood, ...foods])
  }


  return (
    <div className="App">
      <h2>Food List</h2>
      <Search />
      <AddFood addNewFood= {addNewFood}/>
        <ul>
          {foodItems}
        </ul>

        
    </div>
  );
}

export default App;