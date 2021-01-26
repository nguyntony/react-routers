import {Link} from 'react-router-dom'


function Card({imgUrl, id}) {
    return (
      <div className="Card">
        {/* <h2>Card ID</h2> */}
        <img src={imgUrl} alt="pokemon card"/>
        <Link to={`/shop/${id}`}><button>More Info</button></Link>
      </div>
    );
  }
  
export default Card;
  