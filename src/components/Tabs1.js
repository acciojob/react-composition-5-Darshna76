
import React, {useState} from "react";

const Tabs1 = ({tabs1}) => {
   const [tabClicked, setTabClicked] = useState("Tab 1");
    

     function tabClickHandler(content){
        setTabClicked(content);
     }
   
    return(
        <div>
            <ul>
             {
                tabs1.map((tab)=>(
                    <li
                     onClick={()=>tabClickHandler(tab.contents)}
                    >{tab.titles}</li>
                ))
             }
             </ul>
             {
                <p>This is the content for {tabClicked}.</p>
             }
        </div>
    )

}

export default Tabs1;