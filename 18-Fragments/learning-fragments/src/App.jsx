import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from './FoodItems'
import ErrorMsg from './ErrorMsg'

function App() {

  let foodItems = ['Sabji', 'Green Vegetables', 'Roti', 'Sallad', 'Milk','Paneer'];

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMsg items={foodItems}></ErrorMsg> 
      <FoodItems items ={foodItems}></FoodItems>
      
    </>
   
  )
}

export default App
