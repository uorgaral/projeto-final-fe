import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import fundo from "../../../img/FundoImg.png"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

const GridGaleria = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); /* Cria colunas responsivas */
    gap: 30px; 
    padding: 20px;
    justify-items: center;
`;

// Card (revisado para usar a largura máxima, já que o grid cuida da responsividade)
const StyledCard = styled(Card)`
    width: 100%; /* Largura máxima dentro do item do grid */
    max-width: 400px;
    border: none;
    box-shadow: 0 4px 6px 0 rgba(42, 0, 85, 0.6);
`;


export default function Galeria(){
    const [imagens,, setImagens] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
        useEffect(() => {
            const BACKEND_URL = "http://localhost:3000"
            const fetchImagem = async () => {
                try {
                    const response = await axios.get(`${BACKEND_URL}/galeria`);
                    setImagens(response.data);
                    setLoading(false);
                }catch (err) {
                    console.error("Erro ao buscar imagens:", err);
                    setError('Não foi possível carregar as imagens. Verifique se o servidor backend está rodando e se há erro de CORS.');
                    setLoading(false);
                };
            };
            
                fetchImagem();
        }, []);
    
        if (loading) {
            return <div>Carregando...</div>;
        };
    
        if (error) {
        return <div><p style={{color: 'red'}}>{error}</p></div>;
        };

    
       if (imagens.length === 0) {
        return <Body><Container><div>Nenhuma imagem disponível.</div></Container></Body>;  
    }

    return(
        <Body>
            <Container>
                <TituloPrincipal>Galeria de Fotos</TituloPrincipal>

                <GridGaleria>
                    {imagens.map((item, index) => (
                        <StyledCard key={item.idimagem}>
                            <Card.Img
                                variant="top"
                                src={item.caminho_imagem}
                                style={{ height: '250px', objectFit: 'cover' }}></Card.Img>
                            <Card.Body>
                                <Card.Title>{item.titulo || `#{index + 1}`}</Card.Title>
                                <Button as={Link} to={`/blog/${item.idPost}`}>Veja mais</Button>
                            </Card.Body>
                        </StyledCard>
                    ))}
                </GridGaleria>
            </Container>
        </Body>
    )
}