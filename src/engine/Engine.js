import * as React from "react";
import "core-js";

const Engine = ({ data }) => {
    return (<div className="App">
        <h1>{data.title}</h1>
        {data.images.map(image => <img src={image} alt="" width={300} key={image} />)}
    </div>);
};

export default Engine;