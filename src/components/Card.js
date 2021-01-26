import {Link} from 'react-router-dom'
import {CardsContext} from '../contexts/SearchContext'
import {useContext} from 'react'

function Card({imgUrl, id}) {
  const [cards, setCards] = useContext(CardsContext)

  const deleteHandler = e => {
    // we are going to filter the cards array, this will go to each item in the array and check the condition that we passed, so each item in the array is a state and we are going to check if that *state's* id is equal to the id of that particular card, it will return false so it will be removed from the array
    setCards(cards.filter(state => state.id !== id))
  }

    return (
      <div className="Card">
        {/* <h2>Card ID</h2> */}
        <img src={imgUrl} alt="pokemon card"/>
        <div className="buttons">
          <Link to={`/shop/${id}`}><button>More Info</button></Link>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </div>
    );
  }
  
export default Card;
  