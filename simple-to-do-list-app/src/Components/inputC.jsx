import React, { useState } from 'react';
import '../Css/Inputcontainer.css';
import Listcontainer from './Listcontainer';

function InputC() {
  const [listitem, setlistitem] = useState("");

  const valuepush = (e) => {
    setlistitem(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) { 
      console.log("Enter tuşuna basıldı");
      
     
      let ul = document.querySelector(".List");
      if (ul && listitem) {
        let li = document.createElement("li");
        li.textContent = listitem;
        ul.appendChild(li);
        setlistitem(""); 
      }
    }
  };

  return (
    <div className='input-container'>
      <input
        className='Addinput'
        placeholder='Yapılacaklar listesine ekleme yap'
        onChange={valuepush}
        onKeyDown={handleKeyDown}
        value={listitem}
      />
      <div>
        <button>Ekle</button>
      </div>
    </div>
  );
}

export default InputC;
