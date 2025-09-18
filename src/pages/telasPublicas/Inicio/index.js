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

const Titulo = styled.h1`
    font-family: 'Playwrite US Modern Variable', sans-serif !important;
    font-size: 50px;
    color: #9B6BCB;
    text-shadow: 3px 3px 5px #9B6BCB7d;
    margin: 0;
    text-align: center;

    @media (max-width: 768px){
        font-size: 30px;
    }
`;

const ContImg = styled.div`
    width: 100vw;
    margin-top: 50px;
    display: flex;
    align-items: center;
    text-align: center
`

export default function BoasVindas(){
    return(
        <Body>
            <ContTitulo>
                <Titulo>Seja bem vindo!</Titulo>
            </ContTitulo>

            <ContImg>
                <Img src={Logo}/>
            </ContImg>
                
        </Body>
    )
}