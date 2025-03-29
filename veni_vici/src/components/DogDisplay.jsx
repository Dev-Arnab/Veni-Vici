// import { useState, useEffect } from "react";

// const DogDisplay = ({ addToBanList, banList, addToHistory }) => {
//   const [dog, setDog] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchDog = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch("https://dog.ceo/api/breeds/image/random");
//       const data = await response.json();
//       const breed = data.message.split("/")[4];

//       if (!banList.includes(breed)) {
//         setDog({ image: data.message, breed });
//         addToHistory({ image: data.message, breed });
//       } else {
//         fetchDog();
//       }
//     } catch (error) {
//       console.error("Error fetching dog:", error);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchDog();
//   }, []);

//   return (
//     <div className="dog-container">
//       {loading ? <p>Loading...</p> : dog && (
//         <>
//           <img src={dog.image} alt={dog.breed} className="dog-image" />
//           <div className="button-container">
//             <button className="breed-button" onClick={() => addToBanList(dog.breed)}>
//               {dog.breed.toUpperCase()}
//             </button>
//             <button onClick={fetchDog} className="fetch-button">Discover Another Dog</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default DogDisplay;
