import PigForm from "./PigForm";

const UserInput = ({filterHogs, greasedHogs, addPig}) => {
    
    return(
        <div style={{alignItems: "center"}}>
            <label style={{verticalAlign: "middle"}}>Sort By</label>
            <select style={{margin: "0px 20px 0px 5px", verticalAlign: "middle"}} onChange={filterHogs}>
                <option value="no sort">No Sort</option>
                <option value="Name">Name</option>
                <option value="Weight">Weight</option>
            </select>
            <label style={{verticalAlign: "middle"}}>Grease Level</label>
            <select style={{margin: "0px 20px 0px 5px", verticalAlign: "middle"}} onChange={greasedHogs}>
                <option value="all">All</option>
                <option value="greased">Greased</option>
                <option value="ungreased">Not Greased</option>
            </select>
           <PigForm addPig={addPig}/>
        </div>
    )
}

export default UserInput; 