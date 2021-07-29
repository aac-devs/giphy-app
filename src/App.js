import { Link, Route } from 'wouter';
import './App.css';
import Detail from './pages/Detail/index';
import Home from './pages/Home/index';
import SearchResults from './pages/SearchResults/index';
import { GifsContextProvider } from './context/GifsContext';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img className="App-logo" alt="Giffy logo" src="/logo.png" />
        </Link>
        <GifsContextProvider>
          <Route component={Home} path="/" />
          <Route component={SearchResults} path="/search/:keyword" />
          <Route component={Detail} path="/gif/:id" />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
