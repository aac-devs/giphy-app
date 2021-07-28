import { Link, Route } from 'wouter';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/gif/colombia">Gifs de Colombia</Link>
        <Link to="/gif/ecuador">Gifs de Ecuador</Link>
        <Link to="/gif/chile">Gifs de Chile</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
