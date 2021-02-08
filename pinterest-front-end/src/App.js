import './App.css';
import Header from './Header';
import Mainboard from './Mainboard';
import unsplash from './api/unsplash';
import { useEffect, useState } from 'react';
import db from './firebase';

function App() {

  const [newPins, setNewPins] = useState([]);

  const makeAPICall = (term) => {
    // make an api call
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: { 
        query: term, 
        per_page: 30 
      }
    });
  }

  const onSearchSubmit = (term) => {
    let promises = [];
    let searchedPins = [];
    promises.push(
      makeAPICall(term).then((res) => {
        let results = res.data.results;
        results.map((pin) => {
          searchedPins.push(pin);
        })
      })
    );
    Promise.all(promises).then(() => {
      setNewPins(searchedPins)
    })
  }

  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    db.collection("terms").onSnapshot((snapshot) => {
      let snapshotData = snapshot.docs;

      if (snapshotData.length >= 30) {
        snapshotData = snapshotData.slice(snapshotData.length - 10, snapshotData.length);
      }
      snapshotData.map((doc) => {
        promises.push(makeAPICall(doc.data().term)
        .then((res) => {
          let results = res.data.results;
          results.map((object) => {
            pinData.push(object)
          });
          pinData.sort((a, b) => {
            return 0.5 - Math.random();
          })
        }));
      });
      Promise.all(promises).then(() => {
        setNewPins(pinData);
      })
    });

  }

  useEffect(() => {
    getNewPins();
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        {/* header */}
        <Header onSubmit={onSearchSubmit}/>
      </div>
      <div className="app__body">
        {/* body */}
        <Mainboard pins={newPins}/>
      </div>
    </div>
  );
}

export default App;
