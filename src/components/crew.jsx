import background from "./background"
import data from "../data.json"
import "../styles/crew.css"
import { useEffect, useState } from "react"
import douglas from "../assets/crew/image-douglas-hurley.png"
import mark from "../assets/crew/image-mark-shuttleworth.png"
import victor from "../assets/crew/image-victor-glover.png"
import anousheh from "../assets/crew/image-anousheh-ansari.png"


export default function Crew() {

    window.addEventListener("load" , background("crew"))
    
    const [crew, setCrew] = useState(0)
    const {name , images , role , bio } = data.crew[crew]

    useEffect (() => {
        const list = document.querySelectorAll('.swap span');
		for (let i = 0; i < list.length; i++) {
			list[i].classList.remove('active');
		}
        list[crew].classList.add("active");
    },[crew])


    const image = () => {
        if(name === "Douglas Hurley") {
            return douglas;
        }else if(name === "Mark Shuttleworth"){
            return mark;
        }else if(name === "Victor Glover"){
            return victor;
        }else{
            return anousheh;
        }
    }   

    const handleClick = (id) => { 
        setCrew(id)
    }
    return (
        <div className="crew">
            <h2 className="subheading">
                <span>02</span>
                MEET YOUR CREW
            </h2>
            <div className="wrap-container">
                <div className="img-container">

                <img src={image()} alt={`${name}.png`}  />
                
                
                <div className="swap">
                    <span className="circle" onClick={() => handleClick(0)}></span>
                    <span className="circle" onClick={() => handleClick(1)}></span>
                    <span className="circle" onClick={() => handleClick(2)}></span>
                    <span className="circle" onClick={() => handleClick(3)}></span>
                </div>

                </div>

                <div className="text-container wrapper">
                    <h3 className="role">{role}</h3>
                    <h3 className="name">{name}</h3>

                    <p className="bio">{bio}</p>
                </div>
                
                
            </div>
            

        </div>
    )
}