// I may need to use context here
// import {SearchContext, SearchProvider} from '../contexts/SearchContext'
import { useContext, useState } from 'react'
import {CardsContext} from '../contexts/SearchContext'
import {getCards} from '../api'

function Form() {
    const [search, setSearch] = useState('')
    const [cards, setCards] = useContext(CardsContext)
    const [userSearch, setUserSearch] = useState('')

    // handler 
    const inputHandler = e => {
        setSearch(e.target.value)
    }

    const formHandler = e => {
        e.preventDefault()
        getCards(search, setCards)
        setUserSearch(search)
        setSearch('')
    }

    return (

            <div className="form">
                {/* <p>{search}</p> */}
                <form onSubmit={formHandler}>
                    <input type="text" value={search} onChange={inputHandler}/>
                    <input type="submit" value="Search"/>
                    {/* {
                        cards.length === 0 && 
                        <p>No results</p>
                    } */}
                </form>
                {
                    cards.length > 0 && 
                    <div className="Searched">Results for <strong>{userSearch}</strong></div>
                }
            </div>

    )
}

export default Form