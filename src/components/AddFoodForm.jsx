import { useState } from 'react'
import { Input } from 'antd'

function AddFoodForm({ createFood }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [calories, setCalories] = useState(0)
  const [servings, setServings] = useState(0)

  const handleName = (e) => setName(e.target.value)
  const handleImage = (e) => setImage(e.target.value)
  const handleCalories = (e) => setCalories(e.target.value)
  const handleServings = (e) => setServings(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    let newFood = { name, image, calories, servings }
    createFood(newFood)
  }

  return (
    <div style={{ maxWidth: '25vw', margin: '20px auto' }}>
      <h4>Add Food</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <Input placeholder='Name' value={name} type="text" onChange={handleName} />
        <label htmlFor="image">Image</label>
        <Input placeholder='Image' value={image} type="text" onChange={handleImage} />
        <label htmlFor="calories">Calories</label>
        <Input value={calories} type="number" onChange={handleCalories} />
        <label htmlFor="servings">Servings</label>
        <Input value={servings} type="number" onChange={handleServings} />

        <button style={{width: 100, margin: '10px' }}>Create Food</button>
      </form>
    </div>
  )
}

export default AddFoodForm;