import React,{useState} from "react";

const data=[
    ["1","2","3"],
    ["4","5"],
    ["6","7","8"],
    ["hello","world"]
]

export default function ActiveTab()
{
    const [activeTab,setActiveTab] = useState(0)

    return (<div>
        <menu>
            <input type="button" onClick={()=>setActiveTab(0)} value="tab 1"/>
            <input type="button" onClick={()=>setActiveTab(1)} value="tab 2"/>
            <input type="button" onClick={()=>setActiveTab(2)} value="tab 3"/>
            <input type="button" onClick={()=>setActiveTab(3)} value="tab 4"/>
        </menu>

        {data[activeTab].map((data)=>(<li>{data}</li>))}
        
    </div>);
}