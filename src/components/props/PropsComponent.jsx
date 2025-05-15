import ChatGPT from "../../assert/GPT.png"
import  "./MyProp.css"
// import TabButton from "./TabButton"
// import REACT,{useState,Fragment} from "react"
import Section from "./Section"

function MyPropComponent(props)
{
    return <div className="myProp">
                <li>
                <img src={props.image} alt={props.title} id="propImg"/><br/>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                </li>
        </div>
}

function MyPropDestructingObj({image,title,content})
{
    return <li>
    <img src={image} alt={title} id="propImg"/><br/>
    <h3>{title}</h3>
    <p>{content}</p>
    </li>
}

export default function PropMainComponent({mainTitle,desc="Prop"})
{
   // const[name,setName] = REACT.useState('please select button')
    
    const data = [
        {
            title:"Hom2",
            content:"Test 321",
            image:ChatGPT
        }
    ]




    return <div>
            <header>
                <title>{mainTitle}</title>
                <p>This is main component <span>{desc}</span></p>
            <MyPropComponent title="Home" content="Test 123" image={ChatGPT}/>
            <MyPropDestructingObj {...data[0]}/>
            </header>
            <main>
                <Section id="example" dataArr={["JSX","redus","CSS","REDUX"]}/>
                <Section id="example2" dataArr={["JSX2","redus2","CS2S","REDUX2"]} btContainer="menu"/> 
            </main>
        </div>
}
        