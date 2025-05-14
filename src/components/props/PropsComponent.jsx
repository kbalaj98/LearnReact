import ChatGPT from "../../assert/GPT.png"
import  "./MyProp.css"
import TabButton from "./TabButton"
import REACT,{useState} from "react"

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
    const[name,setName] = useState()
    const data = [
        {
            title:"Hom2",
            content:"Test 321",
            image:ChatGPT
        }
    ]

    const helloFun = val=>
    {
        setName(val)
        console.log("Hello Reactuser ::",name)
    }



    return <div>
        <header>
            <title>{mainTitle}</title>
            <p>This is main component <span>{desc}</span></p>
        <MyPropComponent title="Home" content="Test 123" image={ChatGPT}/>
        <MyPropDestructingObj {...data[0]}/>
        </header>
        <main>
        <section id="example">
            <h2>Example</h2>
            <menu>
                <TabButton isSelected={name==="JSX"?true:undefined} onSelect={()=>setName("JSX")}>JSX</TabButton>
                <TabButton isSelected={name==="redus"?true:undefined} onSelect={()=>setName("redus")}>redus</TabButton>
                <TabButton isSelected={name==="CSS"?true:undefined} onSelect={()=>setName("CSS")}>CSS</TabButton>
                <TabButton isSelected={name==="REDUX"?true:undefined} onSelect={()=>setName("REDUX")}>REDUX</TabButton>
            </menu>

        </section>
        <section id="example2">
            <h2>Example2</h2>
            <menu>
                <TabButton isSelected={name==="JSX2"?true:undefined} onSelect={()=>helloFun("JSX2")}>JSX2</TabButton>
                <TabButton isSelected={name==="redus2"?true:undefined} onSelect={()=>setName("redus2")}>redus2</TabButton>
                <TabButton isSelected={name==="CS2S"?true:undefined} onSelect={()=>setName("CS2S")}>CS2S</TabButton>
                <TabButton isSelected={name==="REDUX2"?true:undefined} onSelect={()=>setName("REDUX2")}>REDUX2</TabButton>
            </menu>

            {name?<p>My name is {name}</p>:null}

        </section>
        </main>

        
        </div>
}
        