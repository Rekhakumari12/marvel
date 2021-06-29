import './App.css';
import Navbar from '../components/Navbar';
import Main from '../components/Main'
import Features from '../components/Features';
import Showcase from '../components/Showcase';
import Prototype from '../components/Prototype';
import Footer from '../components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Main />
        <Features />
        <Showcase />
        <Prototype />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
