import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

function App() {
  return (
    <div className="container">
      <Todo/>
    </div>
  );
}

export default App;














// import './App.css';
// import Todo from './Todo';
// import { useEffect, useState } from 'react';

// const initialList = [{
// 	animal:"Lion",
// 	color:"tan",
// 	legs:4
// },{
// 	animal:"Dog",
// 	color:"black",
// 	legs:4
// },{
// 	animal:"Cat",
// 	color:"white",
// 	legs:4
// },{
// 	animal:"Elephant",
// 	color:"gray",
// 	legs:4
// },{
// 	animal:"Tiger",
// 	color:"orange",
// 	legs:4
// }]
// function App() {

// 	const [animal, setAnimal] = useState("");
// 	const [color, setColor] = useState("");
// 	const [legs, setLegs] = useState("");
	
// 	const [list, setList] = useState(initialList);

// 	const [editAnimal, setEditAnimal] = useState("");
// 	const [editColor, setEditColor] = useState("");
// 	const [editLegs, setEditLegs] = useState("");

// 	const [isEditButtonClicked,setIsEditButtonCLicked] = useState(false)
// 	const [editId,setEditId] = useState("")

// 	// useEffect(()=>{
// 	// 	console.log(list)
// 	// },[list])

// 	const handleSubmit = (e) => {
// 		e.preventDefault();

// 		if (animal.trim() !== "" && color.trim() !== "" && legs.trim() !== "") {
// 			setList((prev)=> {
// 				return [...prev, {animal:animal,color: color, legs: legs}]
// 			})
		
// 		}
// 		else {
// 			console.log("should not be empty")
// 		}};

// 	const handleDelete = (e) => { //{animal:Cat, color:white, legs:4}
// 		console.log('item is',e)
// 		const updatedList = list.filter((item) => item.animal != e.animal);
//         setList(updatedList);
// 	}
// 	const something = (ei) => {
// 		console.log(ei)
// 	}	

// 	const handleEdit= (e) => {
// 		setEditId(e.animal)
// 		console.log(e)
// 		setIsEditButtonCLicked(true)
// 		setEditAnimal(e.animal)
// 		setEditColor(e.color)
// 		setEditLegs(e.legs)
// 		// const updatedList = list.map((item) => {
// 		// 	if (item.animal === e.animal) {
// 		// 		item.animal= editAnimal;
// 		// 		item.color= editColor;
// 		// 		item.legs= editLegs;
// 		// 	}
// 		// 	return item;
// 		// });
// 	}
// 	const handleUpdate = () => {
// 		setIsEditButtonCLicked(false)
// 			const updatedList = list.map((item) => {
// 				if (item.animal == editId){
// 				item.animal = editAnimal;
// 				item.color = editColor;
// 				item.legs = editLegs;
// 				}
// 				return item
// 			})

// 			setList(updatedList)

// 		}
		
	
	
	
// 	return (
// 		<>
		
// 		  <div className="container">
// 		  <p>{editId}</p>
// 			<form onSubmit={handleSubmit}>
// 			  <input
// 				placeholder="Animal"
// 				onChange={(e) => setAnimal(e.target.value)}
// 				value={animal}
// 				type="text"
// 			  />
// 			  <input
// 				placeholder="Color"
// 				onChange={(e) => setColor(e.target.value)}
// 				value={color}
// 				type="text"
// 			  />
// 			  <input
// 				placeholder="No of legs"
// 				onChange={(e) => setLegs(e.target.value)}
// 				value={legs}
// 				type="text"
// 			  />
	  
// 			  <button className="btn btn-dark" type="submit">
// 				Submit
// 			  </button>
// 			</form>
// 		  </div>
	  
// 		  <div className="row mt-3">
// 			<h3>Animals</h3>
// 			<div>
// 			  <ul>
// 				{list.map((item, index) => (
// 				  <li key={index}>
// 					{isEditButtonClicked == true && editId == item.animal ?  
// 					<> <input
// 					placeholder="Animal"
// 					onChange={(e) => setEditAnimal(e.target.value)}
// 					value={editAnimal}
// 					className="form-control"
// 					type="text"
// 				  />
// 				  <input
// 					placeholder="Color"
// 					onChange={(e) => setEditColor(e.target.value)}
// 					value={editColor}
// 					className="form-control"
// 					type="text"
// 				  />
// 				  <input
// 					placeholder="Legs"
// 					onChange={(e) => setEditLegs(e.target.value)}
// 					value={editLegs}
// 					className="form-control"
// 					type="text"
// 				  />	
// 				  <button onClick={() => {handleUpdate()}}>Update </button>			  
// 				  </>  : <p> {item.animal} - {item.color} - {item.legs} </p>}
					

// 					<button className="btn btn-danger" onClick={()=>{
// 						handleDelete(item)
// 					}}>
// 			 			Delete
// 					</button>
// 					<button
//                       className="btn btn-warning"
//                       onClick={() => handleEdit(item)}
//                     >
//                       Edit
//                     </button>
// 				  </li>
// 				))}
				
// 			  </ul>
// 			</div>
// 			<div className="d-flex gap-2"></div>
			
// 		  </div>
// 		</>
// 	  );
// }	  
// export default App;
