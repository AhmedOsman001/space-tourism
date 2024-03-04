import "../styles/destination.css";
import background from "./background";
import moon from "../assets/destination/image-moon.png"
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import data from "../data.json"
import { useEffect, useState } from "react";

export default function Destination (){
    window.addEventListener("load", background("destination"))
    const [destination , setDestination] = useState(0)
    const {name , images , description, distance , travel} = data.destinations[destination]
    
    const image = () => {
        if(name === "Moon") {
            return moon;
        }else if(name === "Mars"){
            return mars;
        }else if(name === "Europa"){
            return europa;
        }else{
            return titan;
        }
    }   
    useEffect (() => {
        const list = document.querySelectorAll('.change-destination span');
		for (let i = 0; i < list.length; i++) {
			list[i].classList.remove('active');
		}
        list[destination].classList.add("active");
    },[destination])


    const handleClick = (id) => { 
        setDestination(id)
    }




    return (
        <div className="destination">
            <h2 className="subheading">
                <span>01</span>
                PICK YOUR DESTINATION 
            </h2>

            <div className="flex-container">

                <img src={image()} alt={`${name}.png`}  />
                <div className="wrapper">
                    <div className="change-destination">
                    <span className="luminary" onClick={() => handleClick(0)}>Moon</span>
                    <span className="luminary" onClick={() => handleClick(1)}>Mars</span>
                    <span className="luminary" onClick={() => handleClick(2)}>Europa</span>
                    <span className="luminary" onClick={() => handleClick(3)}>Titan</span>
                    </div>

                    <h1 className="name">{name}</h1>
                    
                    <p className="description">{description}</p>

                    <hr />
                    <div className="container">
                        <div className="avg-distance">
                            <h4>AVG. DISTANCE</h4>
                            <span>{distance}</span>
                        </div>

                        <div className="travel-time">
                            <h4>EST. TIME TRAVEL</h4>
                            <span>{travel}</span>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}