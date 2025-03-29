const History = ({ history }) => {
    return (
      <div className="history">
        <h2>📜 History</h2>
        {history.length === 0 ? <p>No history yet.</p> : (
          <div className="history-container">
            {history.map((dog, index) => (
              <div key={index} className="history-item">
                <img src={dog.image} alt={dog.breed} className="history-image" />
                <p>{dog.breed.toUpperCase()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default History;
  