/* import { useState } from 'react'
import './App.css'
import { Card, Row, Col, Divider, Button } from 'antd'
import foods from './foods.json'
import AddFoodForm from './components/AddFoodForm'

function App() {
  const [foodsState, setFoodsState] = useState(foods)
  return (
    <div className="App">

    <Button> Hide Form / Add New Food </Button>

    <Divider>Food List</Divider>

    <Row style={{width: '100%', justifyContent: 'center'}}>

      {foodsState.map((food)=> {
        return (
          <Col>
            <Card
            title={food.name}
            style={{width: 230, height: 300, margin: 10}}>
              <img src={food.image} height={60} alt='food' />
              <p>Calories: {food.calories}</p>
              <p>Servings: {food.servings}</p>
              <p>
                <b>Total Calories: {food.calories * food.servings}</b> kcal
              </p>
              <Button type='primary'> Delete</Button>
            </Card>
          </Col>
        )
      })}
    </Row>
    </div>
  )
}

export default App
 */

import './App.css'
import { useState } from 'react'
import { Row, Divider, Button } from 'antd'

import allFoods from './foods.json'
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm'
import Search from './components/Search'

function App() {
  const [foods, setFoods] = useState(allFoods)
  const [showFoods, setShowFoods] = useState(allFoods)
  const [show, setShow] = useState(true)

/*Create new food*/

  const createFood = (food) => {
    const newFoods = [food, ...foods]
    setFoods(newFoods)
    setShowFoods(newFoods)
  }

  /*Delete*/

  const deleteFood = (foodName) => {
    const filteredFoods = foods.filter((food) => food.name !== foodName)
    setFoods(filteredFoods)
    setShowFoods(filteredFoods)
  }

  /*Search*/

  const filterFoods = (searchQuery) => {
    let filteredFoods = foods.filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setShowFoods(filteredFoods)
  }

  const toggleVisibility = () => {
    setShow(!show)
  }

  return (
    <div className="App">
      <Search filterFoods={filterFoods} />
      {show && <AddFoodForm createFood={createFood} />}
      <Button onClick={toggleVisibility} style={{ margin: '10px', backgroundColor: 'pink', color: 'white' }}>
        {show ? 'Hide Form' : 'Add New Food'}
      </Button>
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {showFoods.length ? (
          showFoods.map((food) => {
            return (
              <FoodBox food={food} key={food.name} deleteFood={deleteFood} />
            );
          })
        ) : (
          <div>
            <h3>😵‍💫 Oops! There is no more content to show 😵‍💫</h3>
          </div>
        )}
      </Row>
    </div>
  )
}

export default App