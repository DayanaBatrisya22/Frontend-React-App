import './App.css';
import Body from './Body/Body';
import Header from './Header/HeaderComponent';
import Footer from './Footer/FooterComponent';

function App() {
  return (
    <div className="App">
      <div className="Header"> 
        <Header></Header>
      </div>
      <div className='Body'>
        <Body></Body>
      </div>
      <div className='Footer'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
