import TabButton from "./TabButton"
import { useState } from "react"


export default function Section({id,dataArr,btContainer="menu"})
{
    const[name,setName] = useState()

  //  console.log("buttonContainer:::"+{btContainer})

    const ButtonContainer = btContainer;

    const helloFun = val=>
        {
            setName(val)
            console.log("Hello Reactuser ::",name)
        }


    return <section id={id}>
        <h2>{id}</h2>
            <ButtonContainer>
                {
                    dataArr.map(data=>(
                        <TabButton key={data} isSelected={name===data?true:undefined} onSelect={()=>setName(data)}>{data}</TabButton>
                    ))
                }
            </ButtonContainer>
        {name?<p>My name is {name}</p>:null}
    </section>
}