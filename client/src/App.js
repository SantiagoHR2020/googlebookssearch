import logo from './logo.svg';
import './App.css';
import SearchPage from './pages/searchPage'
import NavBar from './component/navBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchPage />
    </div>
  );
}

export default App;
