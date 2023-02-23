import { useState } from "react"


const Search = ({foods, filteredFoods}) => {
    const [letter, setEachLetter] = useState('');

    const handleTextInput = (e) => {
        setEachLetter(e.target.value);
    };

    const handleSearch = () => {
     const newFoods = [...foods].filter((food) => 
        food.name.toLowerCase().includes(letter.toLowerCase())
     );
     filteredFoods(newFoods);
    };

   



    return (
        <div>
            <label>Search</label>
            <input type="text" value={letter} onChange={handleTextInput}/>
            <button type="submit" onClick={handleSearch}>Search</button>
        </div>
    )
}

export default Search;