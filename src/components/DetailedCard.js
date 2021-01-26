// this will be the webpage of what a particular card details would look like
import { useEffect, useState } from 'react'
import {getOneCard} from '../api'
import {Link} from 'react-router-dom'

export default function DetailedCard({match}) {
    const pokeID = match.params.id
    const [oneCard, setOneCard] = useState({})

    useEffect(()=>{
        getOneCard(pokeID, setOneCard)
    }, [])

    // I will use effect here is because that I will automatically show the information of that particular card. 

    return (
        <div className="DetailedCard">
            <h2>{oneCard.name}</h2>
            <div className="CardPhoto">
                <img src={oneCard.imgUrl} alt={oneCard.name}/>
            </div>
            <h3>{oneCard.type}</h3>
            <div className="CardAttacks">
                <p>{oneCard.abilityName1}: {oneCard.abilityDescription1}</p>
                {   oneCard.abilityName &&
                    <p>{oneCard.abilityName2}: {oneCard.abilityDescription2}</p>
                }
            </div>
            <Link to="/shop">
                <button>Return</button>
            </Link>
        </div>
    )
}

