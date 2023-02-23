import { useState } from "react"
import {Input} from "antd"

const AddFood = (props) => {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleNameInput = e => setName(e.target.value)

    const handleImageInput = e => setImage(e.target.value)

    const handleCaloriesInput = e => setCalories(e.target.value)

    const handleServingsInput = e => setServings(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = {name, image, calories, servings}

        props.addNewFood(newFood)
        setName('');
        setImage('');
        setCalories(0);
        setServings(0);
    }


    return (
        <div>
            <h3>Add Food</h3>
            <form onSubmit={handleSubmit}>

                <label>Name</label>
                <Input value={name} type="text" onChange={handleNameInput} />

                <label>Image</label>
                <Input value={image} type="text" onChange={handleImageInput} />

                <label>Calories</label>
                <Input value={calories} type="number" onChange={handleCaloriesInput} />

                <label>Servings</label>
                <Input value={servings} type="number" onChange={handleServingsInput} />

                <button type='submit'>Add Food</button>

            </form>
        </div>
    )
} 

export default AddFood