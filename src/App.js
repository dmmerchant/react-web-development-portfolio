import './App.css';
import Header from './components/AppSpecific/Header';
import Hero from './components/AppSpecific/Hero';
import Main from './components/AppSpecific/Main';
import Footer from './components/AppSpecific/Footer';

function App() {
  return (
    <div className="portfolio">
      <Header />
      <Hero hero='AboutMe'/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
