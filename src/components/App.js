import React, {useState} from "react";
import Nav from "./Nav";
import UserInput from "./UserInput";
import PigPen from "./PigPen";
import hogs from "../porkers_data";

function App() {
	const [allPigs, setAllPigs] = useState([...hogs])
	const [pigs, setPigs] = useState([...allPigs])
	const [unsortedPigs, setUnsortedPigs] = useState([...allPigs])
	const [greaseLevel, setGreaseLevel] = useState("all")
	const [sortedPigs, setSortedPigs] = useState([...allPigs])

	const displayPigs = pigs.filter(pig =>{
		if(greaseLevel === "all"){
			return true;
		} else if (greaseLevel === "greased") {
			return pig.greased === true;
		} else {
			return pig.greased === false;
		}
	})

	const filterHogs = (e) =>{
		if (e.target.value === "no sort"){
			setPigs([...unsortedPigs]);
			setSortedPigs([...allPigs])
		} else if (e.target.value === "Name"){
			console.log(e.target.value)
			 const sortedNames = pigs.sort((a,b)=>{
				let na = a.name.toLowerCase(), 
					nb = b.name.toLowerCase();

				if (na < nb){
					return -1;
				} else if (na > nb) {
					return 1;
				} 
				return 0
			})
			const allSortedNames = [...allPigs].sort((a,b)=>{
				let na = a.name.toLowerCase(), 
					nb = b.name.toLowerCase();

				if (na < nb){
					return -1;
				} else if (na > nb) {
					return 1;
				} 
				return 0
			})
			setSortedPigs([...allSortedNames])
			setPigs([...sortedNames])
		} else if (e.target.value === "Weight"){
			const sortedWeight = pigs.sort((a,b) =>{
				return b.weight - a.weight;
			})
			const allSortedWeight = [...allPigs].sort((a,b) =>{
				return b.weight - a.weight;
			})
			setSortedPigs([...allSortedWeight])
			setPigs([...sortedWeight])
		}
	}

	const greasedHogs = (e) =>{
		setGreaseLevel(e.target.value)
	}

	const hidePig = (e) =>{
		const noOrder = unsortedPigs.filter(pig => pig.name !== e.target.parentElement.id)
		setUnsortedPigs([...noOrder])
		const hiddenPiggies = pigs.filter(pig => pig.name !== e.target.parentElement.id)
		setPigs([...hiddenPiggies])
	}

	const findPiggies = () =>{
			setPigs([...sortedPigs])
			setUnsortedPigs([...allPigs])
	}

	const addPig = (e, newPig) => {
		e.preventDefault();
		setPigs([...pigs, newPig])
		setAllPigs([...allPigs, newPig])
		setUnsortedPigs([...unsortedPigs, newPig])
	}

	return (
		<div className="App">
			<Nav />
			<UserInput greasedHogs={greasedHogs} filterHogs={filterHogs} addPig={addPig}/>
			<PigPen hogs={displayPigs} hidePig={hidePig} findPiggies={findPiggies}/>
			<footer className="footer"></footer>
		</div>
	);
}

export default App;
