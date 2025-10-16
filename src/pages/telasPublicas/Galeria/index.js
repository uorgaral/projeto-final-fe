import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import fundo from "../../../img/FundoImg.png"

const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    position: relative;
    
    background-image: url(${fundo});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-bottom: 100px;

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background-color: #a3f0ff7c; 
        z-index: 1;
    }

    @media (max-width: 768px){
        background-image: none;
        padding-bottom: 0;
    }
`;


const Container = styled.div`
    background-color: #fefefeff;
    box-shadow: 0 4px 8px 0 #56268594;
    max-width: 1280px; 
    min-height: 90vh;
    margin-top: 61px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    z-index: 2;
    overflow-x: hidden;
    padding: 20px;

    @media (max-width: 768px){
        width: 100%; 
        height: 100%;
        margin-top: 0;
        padding: 8px;
        box-shadow: none;
        border-radius: none;
    }
`;



export default function Blog(){
    return(
        <Body>
            <Container>
            </Container>
        </Body>
    )
}