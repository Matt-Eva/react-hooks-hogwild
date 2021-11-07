import PigCard from "./PigCard"

const PigPen = ({hogs, hidePig, findPiggies}) => {

    const pigPen = hogs.map(hog => <PigCard hidePig={hidePig} name={hog.name} image={hog.image} 
        achievement={hog["highest medal achieved"]} specialty={hog.specialty} 
        weight={hog.weight} greased={hog.greased} key={hog.name}/>)

    return(
        <>
         <button onClick={findPiggies} style={{marginTop: "10px"}}>Find Hidden Piggies!</button>
        <div>
        {pigPen}
        </div>
        </>
    )
}

export default PigPen;