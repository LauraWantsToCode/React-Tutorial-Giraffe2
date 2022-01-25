import React from "react"
import CountButton from "../CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"
// above imports all react 



const App = () => { 
    return (
    <div>
        this is any other text
        <CountButton incrementBy={1} buttonColor={"blue"} />
        we have included one of the components above. Now adding more text here. 
        Or could add more components
        <CountButton incrementBy={5} buttonColor={"green"} /> 
        <CountButton incrementBy={7} buttonColor={"red"} />  
        <SearchBar /> 
    </div>
    )
  }

  // above adding incrementBy would allow us to use same components with different values. 

  export default App
  // the above allows for this code to be available to other files in src folder


  
// reusing components, and building components that can be reused. 
// jsx is similar to HTML
// all code goes within the body in html
// now we create documents for each component - countbutton

// anything we create needs to be imported here!!! to this file.
// it is done by placing the name of the function < xx/> within the function in this file. 
// React imports the document itself

// each new component should be in its own file

