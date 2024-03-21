import React, { useState, useEffect  } from "react";
import Amazon from "./assets/amazon.png"
import Sirio from "./assets/sirio.png"
import Vnw from "./assets/vnw.png"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
  `

const Info = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40vh;
` 

const Patrocinadores = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60vh;
`
const Img = styled.img`
  width: 15vw;
`

function App(){
  //Sintaxe para useState
  const [marca, setMarca] = useState(Vnw)

  //Sintaxe para useEffect
  useEffect(()=>{
    if(marca === Vnw){
      document.querySelector("div").style.backgroundColor="#FFD700"
      document.querySelector("div").style.transition="ease-in-out 0.9s"
      document.querySelector("div > h2").style.color = "#FFA500"  
    }

    else if(marca === Amazon){
      document.querySelector("div").style.backgroundColor="#FFA500"
      document.querySelector("div").style.transition="ease-in-out 0.9s"
      document.querySelector("div > h2").style.color = "#1E90FF"
    }

    else if(marca === Sirio){
      document.querySelector("div").style.backgroundColor="#1E90FF"
      document.querySelector("div").style.transition="ease-in-out 0.9s"
      document.querySelector("div > h2").style.color = "#FFD700"
    }
    else{
      document.querySelector("div").style.backgroundColor="#FFFFFF"
    }
  })

  return(
    <section>
      <GlobalStyle />
      <Info>
        <Img src={marca} alt=""/>
        <h2>PATROCINADORA OFICIAL DO CICLO 'TALENTOS DIGITAIS DA ESCOLA VAI NA WEB'
        </h2>
      </Info>

      <Patrocinadores>

        <Img onClick ={()=>{setMarca(Amazon)}}src={Amazon} alt=""/>
        <Img onClick ={()=> {setMarca(Vnw)}}src={Vnw} alt=""/>
        <Img onClick= {()=>{setMarca(Sirio)}}src={Sirio} alt=""/>
      </Patrocinadores>
      
    </section>
  )
}

export default App