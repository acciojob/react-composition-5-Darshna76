
import React, {useState} from "react";

const Tabs2 = ({tabs2}) => {
   const [tabClicked, setTabClicked] = useState("Tab A");
    

     function tabClickHandler(content){
        setTabClicked(content);
     }
   
    return(
        <div>
            <ul>
             {
                tabs2.map((tab)=>(
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

export default Tabs2;