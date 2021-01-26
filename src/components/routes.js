import About from './About'
import Home from './Home'
import Shop from './Shop'
import DetailedCard from './DetailedCard'
import {BrowserRouter as Route} from 'react-router-dom'

const routes = {
    home: {path: '/', component: Home},
    about: {path: '/about', component: About},
    shop: {path: '/shop', component:Shop},
    detailedCard: {path: '/shop/:id', component: DetailedCard}
}

const allRoutes = [
    <Route path='/' component={Home} exact/>,
    <Route path='/about' component={About}/>,
    <Route path='/shop' component={Shop} exact/>,
    <Route path='/shop/:id' component={DetailedCard}/>,
]

// allRoutes do not work right now
export {routes, allRoutes}