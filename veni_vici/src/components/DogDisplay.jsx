// import { useState, useEffect } from "react";

// const DogDisplay = ({ addToBanList, banList, addToHistory }) => {
//   const [dog, setDog] = useState(null);

//   const fetchDog = async () => {
//     try {
//       const res = await fetch("https://api.thedogapi.com/v1/breeds");
//       const data = await res.json();

//       console.log("API Response:", data); // Debugging: Check API response

//       // Filter out banned breeds
//       const filteredDogs = data.filter((dog) => !banList.includes(dog.name));

//       if (filteredDogs.length === 0) {
//         setDog(null);
//         return;
//       }

//       // Pick a random dog
//       const randomDog = filteredDogs[Math.floor(Math.random() * filteredDogs.length)];

//       // Construct the image URL manually
//       const imageUrl = randomDog?.reference_image_id
//         ? `https://cdn2.thedogapi.com/images/${randomDog.reference_image_id}.jpg`
//         : "https://via.placeholder.com/300";

//       console.log("Selected Dog:", randomDog); // Debugging: Check selected dog info
//       console.log("Image URL:", imageUrl); // Debugging: Verify image URL

//       setDog({
//         name: randomDog.name,
//         height: randomDog.height.imperial + " inches",
//         weight: randomDog.weight.imperial + " lbs",
//         lifespan: randomDog.life_span,
//         image: imageUrl, // Use fixed image URL
//       });

//       addToHistory({
//         breed: randomDog.name,
//         image: imageUrl,
//       });

//     } catch (error) {
//       console.error("Error fetching dog data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchDog();
//   }, []);

//   return (
//     <div className="dog-container">
//       <h2>🐾 Discover a New Dog!</h2>

//       {dog ? (
//         <div className="dog-card">
//           <img src={dog.image} alt={dog.name} className="dog-image" />

//           <div className="dog-info">
//             <button className="ban-button" onClick={() => addToBanList(dog.name)}>
//               🚫 {dog.name}
//             </button>
//             <p><strong>Height:</strong> {dog.height}</p>
//             <p><strong>Weight:</strong> {dog.weight}</p>
//             <p><strong>Life Expectancy:</strong> {dog.lifespan}</p>
//           </div>
//         </div>
//       ) : (
//         <p>No more dogs available! Try removing some from the ban list.</p>
//       )}

//       <button className="discover-button" onClick={fetchDog}>🔄 Discover Another Dog</button>
//     </div>
//   );
// };

// export default DogDisplay;

import { useState, useEffect } from "react";

const DogDisplay = ({ addToBanList, banList, addToHistory }) => {
  const [dog, setDog] = useState(null);

  const fetchDog = async () => {
    try {
      const res = await fetch("https://api.thedogapi.com/v1/breeds");
      const data = await res.json();

      console.log("API Response:", data); // Debugging: Check API response

      // Filter out banned breeds and attributes
      const filteredDogs = data.filter((dog) => 
        !banList.includes(dog.name) &&
        !banList.includes(dog.height.imperial) &&
        !banList.includes(dog.weight.imperial) &&
        !banList.includes(dog.life_span)
      );

      if (filteredDogs.length === 0) {
        setDog(null);
        return;
      }

      // Pick a random dog
      const randomDog = filteredDogs[Math.floor(Math.random() * filteredDogs.length)];

      // Construct the image URL manually
      const imageUrl = randomDog?.reference_image_id
        ? `https://cdn2.thedogapi.com/images/${randomDog.reference_image_id}.jpg`
        : "https://via.placeholder.com/300";

      console.log("Selected Dog:", randomDog); // Debugging: Check selected dog info
      console.log("Image URL:", imageUrl); // Debugging: Verify image URL

      setDog({
        name: randomDog.name,
        height: randomDog.height.imperial + " inches",
        weight: randomDog.weight.imperial + " lbs",
        lifespan: randomDog.life_span,
        image: imageUrl,
      });

      addToHistory({
        breed: randomDog.name,
        image: imageUrl,
      });

    } catch (error) {
      console.error("Error fetching dog data:", error);
    }
  };

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div className="dog-container">
      <h2>🐾 Discover a New Dog!</h2>

      {dog ? (
        <div className="dog-card">
          <img src={dog.image} alt={dog.name} className="dog-image" />

          <div className="dog-info">
            <button className="ban-button" onClick={() => addToBanList(dog.name)}>
              🚫 {dog.name}
            </button>
            <button className="attribute-button" onClick={() => addToBanList(dog.height)}>
              📏 Height: {dog.height}
            </button>
            <button className="attribute-button" onClick={() => addToBanList(dog.weight)}>
              ⚖️ Weight: {dog.weight}
            </button>
            <button className="attribute-button" onClick={() => addToBanList(dog.lifespan)}>
              ⏳ Life Expectancy: {dog.lifespan}
            </button>
          </div>
        </div>
      ) : (
        <p>No more dogs available! Try removing some from the ban list.</p>
      )}

      <button className="discover-button" onClick={fetchDog}>🔄 Discover Another Dog</button>
    </div>
  );
};

export default DogDisplay;
