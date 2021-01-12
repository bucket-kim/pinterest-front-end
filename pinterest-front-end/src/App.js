import './App.css';
import Header from './Header';
import Mainboard from './Mainboard';

function App() {
  return (
    <div className="App">
      <div className="app__header">
        {/* header */}
        <Header />
      </div>
      <div className="app__body">
        {/* body */}
        <Mainboard />
      </div>
    </div>
  );
}

export default App;
