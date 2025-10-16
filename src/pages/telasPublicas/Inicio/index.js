import React from "react";
import styled from "styled-components";
import img from "../../../img/FundoImg.png"
import Logo from "../../../img/Logo.png"

const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    position: absolute;

    background-image: url(${img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 768px){
        position: absolute;
        background-image: url(${img});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100vw;
        height: 100vh;
    }

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background-color: #a3f0ffa2; 
  }

    > * {
        position: relative;
        z-index: 1;
  }
`
const Img = styled.img`
    width: 400px;
    height: 400px;
    margin: 0 auto;

    @media (max-width: 768px){
        width: 200px;
        height: 200px;
    }
`

const ContTitulo = styled.div`
    width: 100vw;
    margin: 0 auto;
    text-align: center;

    @media (max-width: 768px){
        width: 100vw;
        margin: 0 auto;
        text-align: center
    }
`

const ContImg = styled.div`
    width: 100vw;
    margin-top: 50px;
    display: flex;
    align-items: center;
    text-align: center
`
//TITULOS
const TituloPrincipal = styled.h1`
    font-family: "Chicle", serif !important;
    color: #5C1D9C;
    font-size: 80px;
    text-shadow: 1px 0.5px 1px #58268b65;
    margin-inline: 30px;

    @media (max-width: 768px){
        font-size: 40px;
        margin-inline: 10px;
    }
`;

const Subtitulo = styled.p`
    font-family: "Fredoka Variable", sans-serif !important;
    color: #3B83A6;
    font-size: 30px;
    text-shadow: 1px 0.5px 1px #58268b65;
    margin-left: 20px;
    margin-bottom: 0;
`;


export default function BoasVindas(){
    return(
        <Body>
            <ContTitulo>
                <TituloPrincipal>Seja bem vindo!</TituloPrincipal>
            </ContTitulo>

            <ContImg>
                <Img src={Logo}/>
            </ContImg>
                
        </Body>
    )
}