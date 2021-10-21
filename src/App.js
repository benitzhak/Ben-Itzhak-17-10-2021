import './styles/main.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FavPage } from './pages/FavPage';
import { AppHeader } from './cmps/AppHeader';
import { useSelector } from 'react-redux';

const App = () => {

  const {isDarkMode} = useSelector(state => state.weatherModule)

  return (
    <section className={"main-app " + (isDarkMode? 'dark' : '')}>
      <Router>
        <AppHeader/>
        <Switch>
          <Route path="/favorites" component={FavPage}/>
          <Route path="/" component={HomePage}/>
        </Switch>
      </Router>
    </section>
  );
}


export default App 
