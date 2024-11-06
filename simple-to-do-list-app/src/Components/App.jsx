import { useState } from 'react'
import '../Css/App.css'
import '../Css/Sing-in.css'
import InputC from '../Components/inputC'
import Header from '../Components/Header'
import Listcontainer from '../Components/Listcontainer'
function App() {

  let App=document.querySelector(".Appcontainer");
 
  
  
  
let Logininput=document.querySelector(".Logininput");
let Appcontainer=document.querySelector(".Appcontainer");



       const Login=()=>{
        document.querySelector(".signincontainer").remove();
  


        setTimeout(() => {
          let App = document.querySelector(".Appcontainer"); 
          
          if (App) { 
   
         App.style.transition = "all 0.5s ease-in";
         App.style.backgroundColor = "#5c53a3";
        App.style.transform="scale(1)";
         let inputcontainer=document.querySelector(".input-container");
        
       }
       
      }, 1000);
       }

  return (
      <>



          <div className="App">
         

        {/* Sing in componenti*/}  
         <div className='signincontainer'>
          <h2>Yeni bir yapılacaklar listesi oluşturmak için giriş yapın...</h2>
          <div><button onClick={Login} className='Loginbtn'>Liste oluştur</button></div>
         </div>
        {/* ----------------------------------------------------------------------------------*/}  









         <div className="Appcontainer">
              

          

              <Header/>
              <InputC/>
              <Listcontainer/>
  
  
            </div>
      

          </div>  
    </>
  )
}

export default App
