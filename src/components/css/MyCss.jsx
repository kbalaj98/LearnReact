import React from "react";
import './Mycss.css'
import TextCss from "./Csstext";
import CssTable from "./CssTable";

function Csstest()
{
    const data = new Array(100).fill(false)


    return (<>

        <CssTable/>
       <TextCss/>
        <body className="bg-image">
        <div> 
           { data.map((val,index)=><p>This value {index}</p>)} 
           </div>
        </body>
    

    </>);
}

export default Csstest