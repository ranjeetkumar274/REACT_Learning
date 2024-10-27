import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from './FoodItems'
import ErrorMsg from './ErrorMsg'
import Container from './Container'
import FoodInputs from './FoodInputs'

function App() {

  let foodItems = ['Sabji', 'Green Vegetables', 'Roti', 'Sallad', 'Milk','Paneer'];

  return (
    
    <>
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMsg items={foodItems}></ErrorMsg> 
      <FoodInputs></FoodInputs>
      <FoodItems items ={foodItems}></FoodItems> 
    </Container>


    {/* <Container>
      <p>healthy food</p>
    </Container> */}


    </>
   
  )
}

export default App
