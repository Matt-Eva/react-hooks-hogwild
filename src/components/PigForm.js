import {useState} from "react"

const PigForm = ({addPig}) => {
    const [formData, setFormData] = useState({
        name: "",
        specialty: "",
        greased: "",
        weight: "",
        "highest medal achieved": "",
        image: ""
    })

    const handleInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        if (name === "greased"){
            if(value === "true"){
                value = true
            } else if(value === "false"){
                value = false
            }
        }
            setFormData({
                ...formData,
                [name]: value
            }) 
        
    }

    const resetForm = () =>{
        setFormData({
            name: "",
            specialty: "",
            greased: "",
            weight: "",
            "highest medal achieved": "",
            image: ""
        })
    }

    const newPig = {
        name: formData.name,
        specialty: formData.specialty,
        greased: formData.greased,
        weight: formData.weight,
        "highest medal achieved": formData["highest medal achieved"],
        image: formData.image
    }

    return (
        <div style={{marginTop: "5px", border: "solid 1px"}}>
            <h2 style={{marginBottom: "0px"}}>Add a Pig!</h2>
            <form onSubmit={(e) => {
                e.preventDefault()
                for (const key in newPig){
                    if(key !== "image" && newPig[key] === ""){
                        return alert("Please enter valid pig info")
                    }
                }
                if (newPig.greased === true || newPig.greased === false){
                    addPig(e, newPig)
                    resetForm()
                } else{
                    alert("Please enter true or false for 'Is Greased?'")
                }
            }}>
                <label>Name</label>
                <input 
                type="text"
                name="name"
                value={formData.name}
                className="formInput"
                onChange={handleInput}
                ></input>
                <label>Specialty</label>
                <input 
                type="text"
                name="specialty"
                value={formData.specialty}
                className="formInput"
                onChange={handleInput}
                ></input>
                <label>Is Greased?</label>
                <input 
                type="text"
                name="greased"
                value={formData.greased}
                className="formInput"
                onChange={handleInput}
                placeholder="Enter true or false"
                ></input>
                <label>Weight</label>
                <input 
                type="number"
                name="weight"
                value={formData.weight}
                className="formInput"
                onChange={handleInput}
                placeholder="Enter a number"
                ></input>
                <label>Achievement</label>
                <input 
                type="text"
                name="highest medal achieved"
                value={formData["highest medal achieved"]}
                className="formInput"
                onChange={handleInput}
                ></input><br></br>
                <label>Image</label>
                <input 
                type="file"
                name="image"
                value={formData.image}
                className="formInput"
                onChange={handleInput}
                accept="image/png, image/jpg, image/jpeg"
                ></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default PigForm