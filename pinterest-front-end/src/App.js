import './App.css';
import Header from './Header';
import Mainboard from './Mainboard';

function App() {

  let pin = [];

  const makeAPICall = (term) => {
    // make an api call
  }

  const onSearchSubmit = (term) => {
    console.log(term, 'term at App.js');
  }

  return (
    <div className="App">
      <div className="app__header">
        {/* header */}
        <Header onSubmit={onSearchSubmit}/>
      </div>
      <div className="app__body">
        {/* body */}
        <Mainboard />
      </div>
    </div>
  );
}

export default App;
