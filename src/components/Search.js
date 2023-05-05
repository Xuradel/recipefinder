import React from 'react'
import { useEffect, useState } from 'react'
import Recipe from './Recipe'

const APP_ID = "a9755c4f"
const APP_KEY = "4733e643b1925fd8f6305ef31ab433a6"

const Search = () => {
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [word, setWord] = useState('')

    useEffect(() => {
        getRecipes();
    }, [word])

    const getRecipes = () => {
        fetch(`https://api.edamam.com/search?q=${word}&app_id=${APP_ID}&app_key=${APP_KEY}`)
            .then((response) => response.json())
            .then((data) => { setRecipes(data.hits) })
    }

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
        // e.prevent.default()
        setWord(search)
        setSearch('')
        console.log(word)
    }

    return (
        <div className='main-container'>
            <div className='search-box'>
                <img className="logo" src={require("../images/recipe.png")} alt='logo'></img>
                <input className='search-bar' type='text' value={search} onChange={updateSearch}
                    placeholder='Enter food name' />
                <button className='search-button' type='submit' onClick={getSearch}>
                <svg className='find' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="search"><path d="M448.3 424.7L335 311.3c20.8-26 33.3-59.1 33.3-95.1 0-84.1-68.1-152.2-152-152.2-84 0-152 68.2-152 152.2s68.1 152.2 152 152.2c36.2 0 69.4-12.7 95.5-33.8L425 448l23.3-23.3zM120.1 312.6c-25.7-25.7-39.8-59.9-39.8-96.3s14.2-70.6 39.8-96.3 59.9-40 96.2-40c36.3 0 70.5 14.2 96.2 39.9s39.8 59.9 39.8 96.3-14.2 70.6-39.8 96.3c-25.7 25.7-59.9 39.9-96.2 39.9-36.3.1-70.5-14.1-96.2-39.8z"></path></svg>
                </button>
            </div>
            <div className='banner'>
                <img src={require("../images/banner.png")}></img>
            </div>


            {/* <form onSubmit={getSearch} className='search-form' >
                <input className='search-bar' type='text' value={search} onChange={updateSearch} />
                <button className='search-button' type='submit'>search</button>
            </form> */}
            <div className='grid'>
                {recipes.map(recipe => (
                    <Recipe
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        i1={recipe.recipe.ingredientLines[0]}
                        i2={recipe.recipe.ingredientLines[1]}
                        i3={recipe.recipe.ingredientLines[2]}
                        i4={recipe.recipe.ingredientLines[3]}
                        i5={recipe.recipe.ingredientLines[4]}
                        i6={recipe.recipe.ingredientLines[5]}
                        i7={recipe.recipe.ingredientLines[6]}
                        i8={recipe.recipe.ingredientLines[7]}
                        i9={recipe.recipe.ingredientLines[8]}
                        i10={recipe.recipe.ingredientLines[9]}
                        i11={recipe.recipe.ingredientLines[10]}
                        i12={recipe.recipe.ingredientLines[11]}
                        i13={recipe.recipe.ingredientLines[12]}
                        i14={recipe.recipe.ingredientLines[13]}
                        i15={recipe.recipe.ingredientLines[14]}
                    />
                ))}
            </div>
        </div>
    )

}

export default Search
