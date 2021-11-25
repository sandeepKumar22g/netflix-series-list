import React from 'react';
import Netflix, {data} from './Netflix';
import "./App.css"


function App() {
    function Series(data){
        return(
            <Netflix title={data.title} img={data.img} link={data.link} key={data.key}/>
        )
    }
    return(
        <>
            <h1 className="heading">List of some netflix series</h1>
            {data.map(Series)}
        </>
    );
}

export default App;
