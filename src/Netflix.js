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
        link: "https://www.netflix.com/in/title/80057281",
        key: 1
    },
    {
        title: "Squid Game",
        img: "https://wallpapercave.com/dwp1x/wp9938138.jpg", 
        link: "https://www.netflix.com/in/title/81040344",
        key: 2
    },
    {
        title:"Dark",
        img: "https://wallpapercave.com/wp/wp6902930.jpg", 
        link: "https://www.netflix.com/in/title/80100172",
        key: 3
    },
    {
        title: "Money Heist", 
        img: "https://wallpapercave.com/dwp1x/wp6126886.jpg",
        link: "https://www.netflix.com/in/title/80192098",
        key: 4
    },
    {
        title:"Peaky Blinders",
        img:"https://wallpapercave.com/wp/wp5506428.jpg",
        link:"https://www.netflix.com/in/title/80002479",
        key: 5
    },
    {
        title: "DareDevil",
        img: "https://wallpapercave.com/dwp1x/wp10190262.jpg",
        link: "https://www.netflix.com/in/title/80018294?source=35",
        key: 6
    },
    {
        title: "Narcos",
        img: "https://wallpapercave.com/wp/wp5275212.jpg",
        link: "https://www.netflix.com/in/title/80025172",
        key: 7
    },
    {
        title: "Godless",
        img: "https://wallpapercave.com/wp/wp2688876.jpg",
        link: "https://www.netflix.com/in/title/80097141",
        key: 8
    },
    {
        title: "After Life",
        img: "https://wallpapercave.com/wp/wp7132080.jpg",
        link: "https://www.netflix.com/in/title/80998491",
        key: 9
    },
    {
        title: "Ozark",
        img: "https://wallpapercave.com/wp/wp5934003.jpg",
        link: "https://www.netflix.com/in/title/80117552",
        key: 10
    },
    {
        title: "Bodyguard",
        img: "https://wallpapercave.com/dwp1x/wp10278650.jpg",
        link: "https://www.netflix.com/in/title/80235864",
        key: 11
    },
    {
        title: "Mindhunter",
        img: "https://wallpapercave.com/wp/wp2228941.jpg",
        link: "https://www.netflix.com/in/title/80114855",
        key: 12
    },
    {
        title: "The Last Kingdom",
        img: "https://wallpapercave.com/wp/wp3844918.jpg",
        link: "https://www.netflix.com/in/title/80074249?source=imdb",
        key: 13
    },
    {
        title: "You",
        img: "https://wallpapercave.com/wp/wp5180052.jpg",
        link: "https://www.netflix.com/in/title/80211991",
        key: 14
    },
    {
        title: "Sacred Games",
        img: "https://wallpapercave.com/dwp1x/wp4025666.png",
        link: "https://www.netflix.com/in/title/80115328?source=imdb",
        key: 15
    }
]

export default Netflix 
export {data}