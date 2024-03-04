import background from "./background"
import data from "../data.json"
import "../styles/technology.css"
import { useEffect, useState } from "react"
import vehicle from "../assets/technology/image-launch-vehicle-landscape.jpg"
import capsule from "../assets/technology/image-space-capsule-landscape.jpg"
import spaceport from "../assets/technology/image-spaceport-landscape.jpg"
import vehicleP from "../assets/technology/image-launch-vehicle-portrait.jpg"
import capsuleP from "../assets/technology/image-space-capsule-portrait.jpg"
import spaceportP from "../assets/technology/image-spaceport-portrait.jpg"

export default function Technology() {
    window.addEventListener("load", background("technology"))

    
    const [technology, setTechnology] = useState(0)
    const {name , images , description } = data.technology[technology]

    useEffect (() => {
        const list = document.querySelectorAll('.swap span');
		for (let i = 0; i < list.length; i++) {
			list[i].classList.remove('activeTech');
		}
        list[technology].classList.add("activeTech");
    },[technology])


    const image = () => {
        let a =[];
        if(name === "Launch vehicle") {
            a.push(vehicle);
            a.push(vehicleP)
            return a;
        }else if(name === "Spaceport"){
            a.push(spaceport);
            a.push(spaceportP)
            return a;
        }else if(name === "Space capsule"){
            a.push(capsule);
            a.push(capsuleP)
            return a;
        }
    } 

    const handleClick = (id) => { 
        setTechnology(id)
    }
    return (
        <div className="box">
            <h2 className="subheading">
                    <span>03</span>
                    Space launch 101
            </h2>
            <div className="technology">
                
                
                <picture>
                    <source media="(max-width: 1023px)" srcSet={image()[0]} className="tech-img" />
                    <source media="(min-width: 1024px)" srcSet={image()[1]} className="tech-img" />
                    <img src={image()[1]} alt={name} className="tech-img" />
                </picture>
                
                
                <div className="swap">
                    <span className="num" onClick={() => handleClick(0)}>1</span>
                    <span className="num" onClick={() => handleClick(1)}>2</span>
                    <span className="num" onClick={() => handleClick(2)}>3</span>
                </div>

                <div className="text-container">
                    <h3 className="role">the terminology...</h3>
                    <h3 className="name">{name}</h3>
                    <p className="description">{description}</p>
                </div>
            

            </div>
        </div>
        
    )
}