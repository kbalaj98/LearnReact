import React from "react";
import './Mycss.css'

function Csstest()
{
    const data = new Array(100).fill(false)


    return (<>
       
        <body className="bg-image">
        <div> 
           { data.map((val,index)=><p>This value {index}</p>)} 
           </div>
        </body>
    

    </>);
}

export default Csstest