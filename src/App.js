import React from 'react';
import Netflix, {data} from './Netflix';
import "./App.css"


function App() {
    return(
        <>
            <h1 className="heading">List of some netflix series</h1>
            <Netflix title={data[0].title} img={data[0].img} link={data[0].link}/>
            <Netflix title={data[1].title} img={data[1].img} link={data[1].link}/>
            <Netflix title={data[2].title} img={data[2].img} link={data[2].link} />
            <Netflix title={data[3].title} img={data[3].img} link={data[3].link}/>
            <Netflix title={data[4].title} img={data[4].img} link={data[4].link}/>
        </>
    );
}

export default App;
