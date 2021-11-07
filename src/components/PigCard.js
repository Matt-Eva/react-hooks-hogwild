import {useState} from "react"

const PigCard = ({name, image, achievement, specialty, weight, greased, hidePig}) => {
    
    const[hogInfo, setHogInfo] = useState([]);

    function displayInfo(){
        if (hogInfo.length === 0){
        setHogInfo(
            <div>
                <div>Awarded: {achievement} medal</div>
                <div>Specialty: {specialty}</div>
                <div>Weight: {weight}kg</div>
                <div>{greased ? "Greased": "Not Greased"}</div>
            </div>
        )
        } else{
            setHogInfo([])
        }
    }

    return(
        <div className={`pigTile minPigTile`} onClick={displayInfo} id={name}>
            <img src={image} alt={name} style={{maxWidth: "200px", maxHeight: "90px"}}/>
            <h3 style={{marginTop: "0px", marginBottom:"2px"}}>{name}</h3>
            <button style={{marginBottom: "5px"}} onClick={hidePig}>Hide {name}</button>
           {hogInfo}
        </div>
    )
}

export default PigCard;