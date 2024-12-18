
import React, { useState} from 'react'
import data from '../data/data.json'
// import './pokeman.css'

function Pokemon(){
    const [pokemon, setPokemon] = useState(data);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [filtered, setFilter] = useState(data);


    function handlePrev(){
        if(currentIndex>0){
            setCurrentIndex(currentIndex-1);

        }
    }
    function handleNext(){
        if(currentIndex>pokemon.length-1){
            setCurrentIndex(currentIndex+1);

        }

    }
    function handlePokemon(e){
        const selectedPokemon = e.target.value;
        const index = pokemon.findIndex((man) =>
            man.name === selectedPokemon
    ); 

    setCurrentIndex(index);
    }

    const currentMan = pokemon[currentIndex]



return (
    <>
    <div className="pokemon">
    <div className='pokemon-div'>
    </div>
    <div className='data-container'>
        <ul>
            { currentMan && (
                <li key={currentMan.id}>
                    <img src={currentMan.image}/>
                    <h1>{currentMan.name}</h1>
                    <p>{currentMan.description}</p>

                </li>
            )

            }
        </ul>
    </div>
    <div className='btn-div'>
        <button onClick={handlePrev} disabled={currentIndex===0}>Prev</button>
        <button onClick={handlePrev} disabled={currentIndex===pokemon.length-1}>Next</button>
    </div>
    </div>
    </>
    
   );
}

export default Pokemon;