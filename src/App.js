import React from 'react';
import { Divider, Input } from 'antd';
import './App.css';

function App() {

  return (
    <Divider>
      <form onSubmit={presion}>
        <p>
          <Input type="letter" name="frase1" />
        </p>
        <p>
          <Input type="submit" value="Evaluar" />
        </p>
      </form>
	  </Divider>
     );


    function presion(e) { 
      e.preventDefault();
      let palabra=(e.target.frase1.value)
      let vocales = ['a', 'e', 'i', 'o', 'u'];
      let contador = 0;
      
      for(let i=0; i < palabra.length; i++){
        for(let l=0; l < vocales.length; l++){

          if(palabra[i] == vocales[l]){contador++;}
        }

      }
      alert(' vocales encontradas: ' +contador);
    }
  }
  export default App;
