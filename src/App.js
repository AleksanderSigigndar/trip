import './App.css';
import Exp from './component/experience/Exp';
import Header from './component/header/Header';
import Search from './component/search/Search';
import Luxury from './component/luxury/Luxury';
import Book from './component/book/Book';
import Why from './component/why/Why';
import Craft from './component/craft/Craft';
import Customize from './component/customize/Customize';
import Insp from './component/inspiration/Insp';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className ='Container'>
        <div className='Default'>
        <Header />
        <Search/>
        </div>
        <div className='Others'>
          <Exp/>
          <Luxury />
          <Book/>
          <Why/>
          <Craft/>
          <Customize/>
          <Insp/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
