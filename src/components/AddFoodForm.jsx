import { Divider, Input } from 'antd';
import { useState } from 'react'

// Iteration 4
function AddFoodForm({setFoodsState}) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [calories, setCalories] = useState(0)
  const [servings, setServings] = useState(0)

function handleSubmit(event) {
  event.preventDefault()
  let newFood = {name, image, calories, servings}
  //setFoodsState(newFood)
  setFoodsState(previousFoods => {
    return [...previousFoods, newFood]
  })
  setName('')
  setImage('')
  setCalories(0)
  setServings(0)
}
return (
<form onSubmit={handleSubmit}>
  <Divider>Add Food Entry</Divider>
  <label>Name</label>
  <Input value={name} type="text" onChange={event => setName(event.target.value)} />
  <label>Image</label>
  {/* render antd <Input /> type="text" here */}
  {<Input value={image} type="text" onChange={event => setImage(event.target.value)} />}
  <label>Calories</label>
  {/* render antd <Input /> type="number" here */}
  {<Input value={calories} type="number" onChange={event => setCalories(event.target.value)} />}
  <label>Servings</label>
  {/* render antd <Input /> type="number" here */}
  {<Input value={servings} type="number" onChange={event => setServings(event.target.value)} />}
  <button type="submit">Create</button>
</form>
);
}

export default AddFoodForm;