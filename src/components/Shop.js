// this will be a the shop, I will have a form here that the user can search for a particular pokemon cards
import Card from './Card'
import Form from './Form'
// could I import my context here?
import {CardsContext} from '../contexts/SearchContext'
import { useContext } from 'react';

function Shop() {
  const [cards, setCards] = useContext(CardsContext)

    return (
      <div className="Shop">
        <h1>Shop</h1>
        <div className="ShopContainer">
          <p>Type in a Pokemon to search for cards</p>
          <Form/>
          {/* <Card/> */}
        </div>
        <div className="CardsContainer">
          {
            cards.map(c => (
              <Card key={c.id} imgUrl={c.imgUrl} id={c.id}/>
            ))
          }
        </div>
      </div>
    );
  }
  
export default Shop;
  