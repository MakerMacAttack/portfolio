import './App.css';
import Footer from './components/shared/Footer/Footer';
import NavBar from './components/shared/NavBar/NavBar';
import MainContainer from './containers/MainContainer/MainContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
