import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import axios from "axios";
import React, { useEffect, useState } from "react";

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


//Containers 
const ContainerCardsNews = styled(Row)` // Use o componente Row
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
`;

const ContainerCardPrincipal = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
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


// Estilos Card Principal
const StyledCPrincipal = styled(Card)`
    border: 3px solid #5C1D9C;
    box-shadow: 0 4px 8px 0 #4321667d;
    max-width: 100%;
`;

const StyledCBody = styled(Card.Body)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative; 
    text-align: left;

    background-image: url(${(props) => props.imagem_url});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background-color: #003a457c; 
    }
`;

const StyledCTitle = styled(Card.Title)`
    font-family: "Be Vietnam Pro", sans-serif !important;
    color: #ffffffff;
    font-size: 30px;
    font-weight: bold;
    z-index: 3;
    text-align: left;

    @media{
        font-size: 30px;
    }
`;

const StyledCText = styled(Card.Text)`
    font-family: "Fredoka Variable", sans-serif !important;
    color: #ffffffff;
    font-size: 13px;
    z-index: 3;
    @media{
        font-size: 20px;
    }
`;

//Cards Noticias
const StyledCNews = styled(Card)`
    border: 3px solid #5C1D9C;
    box-shadow: 0 4px 8px 0 #4321667d;
    max-width: 100%;
    margin-bottom: 20px;
`;


const StyledCTitleNews = styled(Card.Title)`
    font-family: "Be Vietnam Pro", sans-serif !important;
    color: #ffffffff;
    font-size: 20px;
    font-weight: bold;
    z-index: 3;

    @media{
        font-size: 22px;
    }
`;

const StyledCTextNews = styled(Card.Text)`
    font-family: "Fredoka Variable", sans-serif !important;
    color: #ffffffff;
    font-size: 15px;
    z-index: 3;

    @media{
        font-size: 18px;
    }
`;

const StyledCButton = styled(Button)`
    background-color: #3B83A6;
    width: 100px;
    font-size: 12px;
    font-weight: bold;
    font-family: "Be Vietnam Pro", sans-serif !important;
    z-index: 3;
    padding: 10px
    border: 1px solid #195674;

    &:hover{
        background-color: #195674;
        border: 2px solid #195674;
    };

    @media{
        font-size: 12px;
        width: 150px;
        padding: 5px;
    };
`



export default function Blog(){
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const BACKEND_URL = "http://localhost:3000"
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/posts`);
                setPost(response.data);
                setLoading(false);
            }catch (err) {
                console.error("Erro ao buscar posts:", err);
                setError('Não foi possível carregar as publicações. Verifique se o servidor backend está rodando e se há erro de CORS.');
                setLoading(false);
            };
        };
        
            fetchPosts();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    };

    if (error) {
        return <div><p style={{color: 'red'}}>{error}</p></div>;
    };

    const postPrincipal = post[0];
    const postsRestantes = post.slice(1);

   if (post.length === 0) {
    return <Body><Container><div>Nenhum post disponível.</div></Container></Body>;  
}

    return(
        <Body>
            <Container>
                <div style={{width: '100%', textAlign: 'center', marginBottom: 60, height: 110}}>
                <TituloPrincipal>Blog</TituloPrincipal>
                <Subtitulo>Acompanhe nosso trabalho!</Subtitulo>
            </div>

            <ContainerCardPrincipal>
                <StyledCPrincipal style={{ width: '100%', maxWidth: '53rem', height: 'auto' }}>
                    <StyledCBody imagem_url={postPrincipal.caminho_imagem}>
                        <StyledCTitle>{postPrincipal.Subtitulo}</StyledCTitle>
                        <StyledCText>{postPrincipal.conteudo}</StyledCText>
                        <StyledCButton>Saiba mais</StyledCButton>
                    </StyledCBody>
                </StyledCPrincipal>
            </ContainerCardPrincipal>


            <ContainerCardsNews>
                {postsRestantes.map((postsRestantes) => (
                    <Col xs={12} md={6} lg={4} key={postsRestantes.id}>
                        <StyledCNews>
                            <StyledCBody imagem_url={postsRestantes.caminho_imagem}>
                                <StyledCTitleNews>{postsRestantes.titulo}</StyledCTitleNews>
                                <StyledCTextNews>{postsRestantes.conteudo}</StyledCTextNews>
                                <StyledCButton>Saiba mais</StyledCButton>
                            </StyledCBody>
                        </StyledCNews>
                    </Col>
                ))}
            </ContainerCardsNews>
            </Container>
        </Body>
    )
}