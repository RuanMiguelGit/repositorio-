import React from 'react'
import pokemons from './Data'
import Pokemon from './Pokemon'

class Pokedex extends React.Component{
    render(){

        return (
            <div className = "poke">
                <h1 className="pokename"> Pokedex</h1>
                <div className ="Gotit">
                {pokemons.map(pokemon => <Pokemon  key={pokemon.id} name ={pokemon.name}  type={pokemon.type} averageWeight={pokemon.averageWeight.value} measurementUnit ={pokemon.averageWeight.measurementUnit} image ={pokemon.image}/>)}
            </div>
            </div>
        )

    }
}

export default Pokedex