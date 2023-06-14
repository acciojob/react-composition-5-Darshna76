
import React from "react";
import './../styles/App.css';
import Tabs1 from "./Tabs1";
import Tabs2 from "./Tabs2" 

const App = () => {
  const tabs1 = [{titles:'Tab 1',contents:'Tab 1'},{titles:'Tab 2',contents:'Tab 2'},{titles:'Tab 3',contents:'Tab 3'}]
  const tabs2 = [{titles:'Tab A',contents:'Tab A'},{titles:'Tab B',contents:'Tab B'},{titles:'Tab C',contents:'Tab C'}]

  return (
    <div>
        <Tabs1
          tabs1={tabs1}
        ></Tabs1>
       <Tabs2 tabs2={tabs2} >
        </Tabs2>
    </div>
  )
}

export default App
