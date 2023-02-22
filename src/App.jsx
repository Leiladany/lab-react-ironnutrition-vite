import { useState } from 'react'
import foods from './foods.json'
import './App.css'
import FoodBox from './components/FoodBox'
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App() {

  const [foodsState, setFoodsState] = useState(foods)
  const [searchName, setSearchName] = useState('')

  function handleForm() {

    const text = document.querySelector('.display-form-button').textContent

    if (text === 'Add New Food') {
      document.querySelector('.food-form').style.display = 'block'
      document.querySelector('.display-form-button').textContent = 'Hide form'
      }else {
        document.querySelector('.food-form').style.display = 'none'
        document.querySelector('.display-form-button').textContent = 'Add New Food'
      }
    }
    return (
    <div className="App">
      {/* Display Add Food component here */}
      <div className='food-form' >
        <AddFoodForm setFoodsState={setFoodsState} />
      </div>
      <Button style={{backgroundColor: 'pink'}} className='display-form-button' type="primary" onClick={() => handleForm()}>Add New Food </Button>
      {/* Display Search component here */}
      <Search searchName={searchName} setSearchName = {setSearchName}/>
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodsState.filter((food) => {
          if (searchName === ""){
            return food
          }else if (food.name.toLowerCase().includes(searchName.toLowerCase())){
            return food;
          }}).map((food)=> {
            return  (<FoodBox food={food} foodsState = {foodsState} setFoodsState = {setFoodsState} />)
            }
          )
        }
      </Row>
    </div>
  )
}

export default App;