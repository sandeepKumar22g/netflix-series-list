import React from 'react'
import "./Netflix.css"

function Netflix(props){
    return(
        <>
        <div className="cards">
            <div className="card">
                <img src={props.img} alt="img" className="card_img" />
                <div className="card_info">
                    <span className="card_category">A Netflix orginal series</span>
                    <h3 className="card_title">{props.title}</h3>
                    <a href={props.link} target="_blank" rel="noopener noreferrer">
                        <button> Watch Now </button>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}
const data =[
    {
        title: "Stranger Things",
        img: "https://wallpapercave.com/wp/wp8441228.jpg",
        link: "https://www.netflix.com/in/title/80057281"
    },
    {
        title: "Squid Game",
        img: "https://wallpapercave.com/dwp1x/wp9938138.jpg", 
        link: "https://www.netflix.com/in/title/81040344"
    },
    {
        title:"Dark",
        img: "https://wallpapercave.com/wp/wp6902930.jpg", 
        link: "https://www.netflix.com/in/title/80100172"
    },
    {
        title: "Money Heist", 
        img: "https://wallpapercave.com/dwp1x/wp6126886.jpg",
        link: "https://www.netflix.com/in/title/80192098"
    },
    {
        title:"Peaky Blinders",
        img:"https://wallpapercave.com/wp/wp5506428.jpg",
        link:"https://www.netflix.com/in/title/80002479"
    }
]

export default Netflix 
export {data}