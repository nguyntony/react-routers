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
    // console.log(cards)
}


// you can search for a pokemon by id I think
// https://api.pokemontcg.io/v1/cards?id=ex3-7
const getOneCard = async(id, set) => {
    const res = await fetch(`https://api.pokemontcg.io/v1/cards?id=${id}`, {headers: {Accept: 'application/json'}})
    const data = await res.json()
    console.log(data)
    const card = data.cards[0]
    set({
        name: card.name,
            imgUrl: card.imageUrlHiRes,
            type: card.types[0],
            abilityName1: card.attacks[0] ? card.attacks[0].name : null,
            abilityDescription1: card.attacks[0] ? card.attacks[0].text : null,
            abilityName2: card.attacks[1] ? card.attacks[1].name : null,
            abilityDescription2: card.attacks[1] ? card.attacks[1].text : null
    })
    // console.log(card)
}

export {getCards, getOneCard}