
import './App.css';
import Card from './component/Card'
function App() {
  return (
    <div className="App">
      <Card/>
    </div>
  );
}

export default App;





// import React, { useState } from "react";
// // import "./styles.css";

// const questions = [
//   "How are you?",
//   "How old are you?",
//   "How many family members do you have?",
// ];

// export default function App() {
//   const [index, setIndex] = useState(0);
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [familyMembers, setFamilyMembers] = useState("");

//   const handleNameSubmit = (e) => {
//     e.preventDefault();
//     setIndex(index + 1);
//   };

//   const handleAgeSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       name,
//       age,
//       familyMembers,
//     };
//     console.log(data); // store the data in the particular person's object
//     setIndex(index + 1);
//   };

//   const handlePrevious = () => {
//     setIndex(index - 1);
//   };

//   const handleNext = () => {
//     setIndex(index + 1);
//   };

//   return (
//     <div className="App">



//       <div className="card">


        
//         {index === 0 && (
//           <form onSubmit={handleNameSubmit}>
//             <h3>{questions[index]}</h3>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//             <button type="submit">Next</button>
//           </form>
//         )}






//         {index === 1 && (
//           <form onSubmit={handleAgeSubmit}>
//             <h3>{questions[index]}</h3>
//             <input
//               type="number"
//               placeholder="Enter your age"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//               required
//             />
//             <button type="submit">Send</button>
//             <button type="button" onClick={handlePrevious}>
//               Previous
//             </button>
//           </form>
//         )}




//         {index === 2 && (
//           <form onSubmit={handleAgeSubmit}>
//             <h3>{questions[index]}</h3>
//             <input
//               type="number"
//               placeholder="Enter number of family members"
//               value={familyMembers}
//               onChange={(e) => setFamilyMembers(e.target.value)}
//               required
//             />
//             <button type="submit">Send</button>
//             <button type="button" onClick={handlePrevious}>
//               Previous
//             </button>
//           </form>
//         )}
//       </div>



//     </div>
//   );
// }
