import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './styles/App.scss';
import Nav from './components/Nav'
import {routes, allRoutes} from './components/routes'
import {CardsProvider} from './contexts/SearchContext'

function App() {
  return (
    <Router>
      <div className="App">
        <CardsProvider>
          <Nav/>
  
          <Switch>
            <Route {...routes.home} exact/>
            <Route {...routes.about}/>
            <Route {...routes.shop} exact/>
            <Route {...routes.detailedCard}/>

            {/* {...allRoutes} */}
          </Switch>

          </CardsProvider>
      </div>
    </Router>
  );
}

export default App;
