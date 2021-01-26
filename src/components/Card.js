function Card({imgUrl}) {
    return (
      <div className="Card">
        {/* <h2>Card ID</h2> */}
        <img src={imgUrl} alt="pokemon card"/>
        <button>More Info</button>
      </div>
    );
  }
  
export default Card;
  