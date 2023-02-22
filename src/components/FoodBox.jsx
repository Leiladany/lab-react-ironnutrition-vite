import { Button , Card, Col,} from 'antd'

// Iteration 2

function FoodBox({food , foodsState, setFoodsState}) {
  console.log(food)
function deleteFood(name){
setFoodsState(foodsState.filter(food => food.name!== name))
}
  return (
  <Col key={food.id} >
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
      <img src={food.image} height={60} alt="food" />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <b>Total Calories: {food.calories * food.servings} </b> kcal
      </p>
      <Button style={{backgroundColor:'pink', marginTop:-5}} type="primary" onClick={() => deleteFood(food.name)}> Delete </Button>
      </Card>
    </Col>
  )
}




export default FoodBox;