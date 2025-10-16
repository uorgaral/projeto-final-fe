import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
    width: 1300px; 
    min-height: 80vh;
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

//Textos
const TituloPrincipal = styled.h1`
    font-family: "Chicle", serif !important;
    color: #195674;
    font-size: 60px;
    text-shadow: 1px 0.5px 1px #58268b65;
    margin-inline: 30px;

    @media (max-width: 768px){
        font-size: 55px;
        margin-inline: 10px;
    }
`;

const Subtitulo = styled.p`
    font-family: "Fredoka Variable", sans-serif !important;
    color: #9B6BCB;
    font-size: 30px;
`;


const DivCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 60px;
`

//Card

const StyledCard = styled(Card)`
    width: 25rem;
    border: none;
    align-items: center;
    box-shadow: 0 4px 6px 0 rgba(42, 0, 85, 0.6);
`





export default function Galeria(){
    return(
        <Body>
            <Container>
                <TituloPrincipal>Galeria de Fotos</TituloPrincipal>
                <DivCard>
                <StyledCard>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </StyledCard>
                </DivCard>
            </Container>
        </Body>
    )
}