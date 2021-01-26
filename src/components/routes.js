import About from './About'
import Home from './Home'
import Shop from './Shop'
import DetailedCard from './DetailedCard'

const routes = {
    home: {path: '/', component: Home},
    about: {path: '/about', component: About},
    shop: {path: '/shop', component:Shop},
    detailedCard: {path: '/shop/:id', component: DetailedCard}
}

export default routes