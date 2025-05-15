import HomeIcon from "./HomeIcon";
import PlusIcon from "./PlusIcon";


export default function Button({children,mode="filled",Icon,...props}) {
    // Todo: Build this component!
    
    // !!! Important: 
    // Wrap the icon with a <span className="button-icon"> to achieve the target look
    // Also wrap the children prop with a <span>
    
    
    //let name = Icon? "icon-button":mode+"-button"
    
    let name = mode+"-button";
    
    if(Icon)
    {
       name = `${name} icon-button`;
    }
    
    
    
    return < >
          <button className={name} {...props}>{Icon?<span className="button-icon" ><Icon/></span>:null}
          
          <span>{children}</span></button>
       </>
   }
   