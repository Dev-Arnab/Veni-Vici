const BanList = ({ banList, removeFromBanList }) => {
    return (
      <div className="ban-list">
        <h2>🚫 Banned Breeds</h2>
        <ul>
          {banList.map((breed, index) => (
            <li key={index} onClick={() => removeFromBanList(breed)}>
              ❌ {breed.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BanList;
  