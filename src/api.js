const getCards = async (pokemonName, set) => {
    const res = await fetch(`https://api.pokemontcg.io/v1/cards?name=${pokemonName}&pageSize=10`, {headers: {Accept: 'application/json'}})
    const cardsData = await res.json()
    const cards = cardsData.cards.map(c => {
        return {
            id: c.id,
            imgUrl: c.imageUrl
        }
    })
    set([...cards])
    console.log(cards)
}


// you can search for a pokemon by id I think
// https://api.pokemontcg.io/v1/cards?id=ex3-7
const getOneCard = async(id) => {
    const res = await fetch(`https://api.pokemontcg.io/v1/cards?id=${id}`, {headers: {Accept: 'application/json'}})
    const data = res.json()
    return data
}

export {getCards, getOneCard}