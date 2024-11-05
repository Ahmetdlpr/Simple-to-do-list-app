import { useState } from 'react'
import '../Css/App.css'
import '../Css/Sing-in.css'
import InputC from '../Components/inputC'
import Header from '../Components/Header'
function App() {

  let App=document.querySelector(".Appcontainer");
 
  
   setTimeout(() => {
       let App = document.querySelector(".Appcontainer"); 
       
       if (App) { 

      App.style.transition = "all 0.5s ease-in";
      App.style.backgroundColor = "#5c53a3";
     App.style.transform="scale(1)";
      let inputcontainer=document.querySelector(".input-container");
     
    }
    
   }, 1000);
  
  return (
      <>
          
          <div className="App">

          <div className="Appcontainer">
                <Header/>
              <InputC/>

          </div>

          </div>  
    </>
  )
}

export default App
