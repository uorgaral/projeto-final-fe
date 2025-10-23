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
    width: 1280px;
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
const ContainerCardsNews = styled(Row)`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    width: 100%;
`;

const ContainerCardPrincipal = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    width: 100%;
`;

//Textos
const TituloPrincipal = styled.h1`
    font-family: "Chicle", serif !important;
    color: #5C1D9C;
    font-size: 60px;
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


const Texto = styled.p`
    font-family: "Be Vietnam Pro", sans-serif !important;
    color: #000000ff;
    font-size: 20px;
    margin-left: 20px;
    @media(max-width: 768px){
        font-size: 20px;
        margin-left: 0;
    }
`;

//Geral 
const StyledCBody = styled(Card.Body)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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

// Estilos Card Principal
const StyledCPrincipal = styled(Card)`
    border: 3px solid #5C1D9C;
    box-shadow: 0 4px 8px 0 #4321667d;
    width: 60%;
    height: 340px;
    margin-bottom: 20px;
    overflow: hidden;
`;

const StyledCTitle = styled(Card.Title)`
    font-family: "Be Vietnam Pro", sans-serif !important;
    color: #ffffffff;
    font-size: 30px;
    font-weight: bold;
    z-index: 3;
    text-align: left;
`;

const StyledCText = styled(Card.Text)`
    font-family: "Fredoka Variable", sans-serif !important;
    color: #ffffffff;
    font-size: 20px;
`;

// Card mini
const StyledCMini = styled(Card)`
    border: 3px solid #5C1D9C;
    box-shadow: 0 4px 8px 0 #4321667d;
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
`;


const StyledCTitleMini = styled(Card.Title)`
    font-family: "Be Vietnam Pro", sans-serif !important;
    color: #ffffffff;
    font-size: 20px;
    font-weight: bold;
    z-index: 3;
    text-align: left;
`;

const StyledCTextMini = styled(Card.Text)`
    font-family: "Fredoka Variable", sans-serif !important;
    color: #ffffffff;
    font-size: 10px;
    z-index: 3;
`;


const limitarTexto = (texto, limite) => {
    if (!texto) return '';
    if (texto.length <= limite) {
        return texto;

    }
    return texto.substring(0, limite) + '...';
};

export default function Blog(){
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const BACKEND_URL = "http://localhost:3000"

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/blog`);
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
                <div style={{width: '100%', textAlign: 'center', marginBottom: 40}}>
                <TituloPrincipal>Blog</TituloPrincipal>
                <Subtitulo>Acompanhe nosso trabalho!</Subtitulo>
            </div>
            <ContainerCardPrincipal>
                <StyledCPrincipal>
                    <StyledCBody imagem_url={`${BACKEND_URL}${postPrincipal.caminho_imagem}`}>
                        <StyledCTitle>{postPrincipal.titulo}</StyledCTitle>
                        <StyledCText>{limitarTexto(postPrincipal.conteudo + "...",  200)}</StyledCText>
                        <StyledCButton>Saiba mais</StyledCButton>
                    </StyledCBody>
                </StyledCPrincipal>
            </ContainerCardPrincipal>
            <ContainerCardsNews>
                {postsRestantes.map((postsRestantes) => (
                    <Col xs={12} md={6} lg={4} key={postsRestantes.idpost}>
                        <StyledCMini>
                            <StyledCBody imagem_url={`${BACKEND_URL}${postsRestantes.caminho_imagem}`}>
                                <StyledCTitleMini>{postsRestantes.titulo}</StyledCTitleMini>
                                <StyledCTextMini>{limitarTexto(postsRestantes.conteudo + "...",  50)}</StyledCTextMini>
                                <StyledCButton>Saiba mais</StyledCButton>
                            </StyledCBody>
                        </StyledCMini>
                    </Col>
                ))}
            </ContainerCardsNews>
            </Container>
        </Body>

    )
}