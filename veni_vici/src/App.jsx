import { useState } from "react";
import DogDisplay from "./components/DogDisplay";
import "./index.css";

const App = () => {
  const [banList, setBanList] = useState([]);
  const [history, setHistory] = useState([]);

  const addToBanList = (breed) => {
    if (!banList.includes(breed)) {
      setBanList([...banList, breed]);
    }
  };

  const addToHistory = (dog) => {
    setHistory([...history, dog]);
  };

  return (
    <div className="app-container">
      {/* Description at the Top */}
      <h1>🐶 Veni Vici: Discover Random Dog Breeds! 🎉</h1>
      <p>
        Click "Discover Another Dog" to explore random breeds! If you don’t want to see a particular breed again, click on its name to add it to the **ban list**.
        Your previously seen dogs will be stored in the **history panel**, including their images. Have fun discovering new furry friends! 🐾✨
      </p>

      <DogDisplay addToBanList={addToBanList} banList={banList} addToHistory={addToHistory} />

      <div className="side-panel">
        <div className="ban-list">
          <h2>🚫 Banned Breeds</h2>
          <ul>
            {banList.length > 0 ? (
              banList.map((breed, index) => <li key={index}>{breed.toUpperCase()}</li>)
            ) : (
              <p>No breeds banned yet.</p>
            )}
          </ul>
        </div>

        <div className="history">
          <h2>📜 History</h2>
          <div className="history-container">
            {history.length > 0 ? (
              history.map((dog, index) => (
                <div key={index} className="history-item">
                  <img src={dog.image} alt={dog.breed} className="history-image" />
                  <p>{dog.breed.toUpperCase()}</p>
                </div>
              ))
            ) : (
              <p>No history yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
