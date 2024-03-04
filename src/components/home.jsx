import "../styles/home.css";
import background from "./background";


export default function Home () { 

    window.addEventListener("load", background("homepage"))
    return ( 
        <div className="homepage">
                <div className="text">
                    <p className="subheader">
                    SO, YOU WANT TO TRAVEL TO
                    </p>
                    <h1 className="header">
                    SPACE
                    </h1>
                    <p className="intro">
                        Let's face it: if you want to go to space, 
                        you might as well genuinely go to outer 
                        space and not hover kind of on the edge of it.
                        Well sit back, and relaxe because we'll give you a truly out of this
                        world experience!
                    </p>
                </div>
                
                <button className="explore-btn">EXPLORE</button>
            
            
        </div>
    )
}