import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/about" component={AboutPage} />
        <Route path="/articles-list" component={ArticlesListPage} />
        <Route path="/article/:name" component={ArticlePage} />
        <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
