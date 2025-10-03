import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

import fundo from "../../../img/FundoImg.png"

const noticias = [
    {
        id: 1,
        titulo: "Primeira notícia",
        conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt nec orci non efficitur. Morbi sit amet egestas quam. Aliquam non ligula luctus, ultricies lectus sed, vestibulum libero. Sed leo tellus, suscipit a magna et, viverra tempor leo.",
        caminho_imagem: "https://i.pinimg.com/736x/03/1a/bd/031abd4e12d32ad150880bd978742fa2.jpg"
    },
    {
        id: 2,
        titulo: "Segunda notícia",
        conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt nec orci non efficitur. Morbi sit amet egestas quam. Aliquam non ligula luctus, ultricies lectus sed, vestibulum libero. Sed leo tellus, suscipit a magna et, viverra tempor leo.",
        caminho_imagem: "https://i.pinimg.com/736x/57/b3/4e/57b34e9fa725c2720b23b56aa5ef85de.jpg"
    },
    {
        id: 3,
        titulo: "Terceira notícia",
        conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt nec orci non effici tur. Morbi sit amet egestas quam. Aliquam non ligula luctus, ultricies lectus sed, vestibulum libero. Sed leo tellus, suscipit a magna et, viverra tempor leo.",
        caminho_imagem: "https://i.pinimg.com/736x/f1/9b/b1/f19bb155ae63f6e551cae96b71f96f0b.jpg"
    },
    {
        id: 4,
        titulo: "Quarta notícia",
        conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt nec orci non effici tur. Morbi sit amet egestas quam. Aliquam non ligula luctus, ultricies lectus sed, vestibulum libero. Sed leo tellus, suscipit a magna et, viverra tempor leo.",
        caminho_imagem: "https://i.pinimg.com/736x/95/a7/de/95a7de79e70485e7dc04687c3bfe7f04.jpg"
    },
    {
        id: 5,
        titulo: "Quinta notícia",
        conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt nec orci non effici tur. Morbi sit amet egestas quam. Aliquam non ligula luctus, ultricies lectus sed, vestibulum libero. Sed leo tellus, suscipit a magna et, viverra tempor leo.",
        caminho_imagem: "https://i.pinimg.com/736x/c3/ce/db/c3cedb115e5486bd1dc8ae334199b591.jpg"
    },
    {
        id: 6,
        titulo: "Sexta notícia",
        conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt nec orci non effici tur. Morbi sit amet egestas quam. Aliquam non ligula luctus, ultricies lectus sed, vestibulum libero. Sed leo tellus, suscipit a magna et, viverra tempor leo.",
        caminho_imagem: "https://i.pinimg.com/736x/78/0d/48/780d4805058b989df68bb00a562fdbd5.jpg"
    }
]

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
    return(
        <Body>
            <Container>
                <div style={{width: '100%', textAlign: 'center', marginBottom: 60, height: 110}}>
                <TituloPrincipal>Blog</TituloPrincipal>
                <Subtitulo>Acompanhe nosso trabalho!</Subtitulo>
            </div>

            <ContainerCardPrincipal>
                <StyledCPrincipal style={{ width: '100%', maxWidth: '53rem', height: 'auto' }}>
                    <StyledCBody imagem_url={"https://i.pinimg.com/474x/d2/87/1c/d2871c8da6df4cc2ee74f98a3dc7af33.jpg"}>
                        <StyledCTitle>Notícia mais recente</StyledCTitle>
                        <StyledCText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt nec orci non effici tur. Morbi sit amet egestas quam. Aliquam non ligula luctus, ultricies lectus sed, vestibulum libero. Sed leo tellus, suscipit a magna et, viverra tempor leo.</StyledCText>
                        <StyledCButton>Saiba mais</StyledCButton>
                    </StyledCBody>
                </StyledCPrincipal>
            </ContainerCardPrincipal>


            <ContainerCardsNews>
                {noticias.map((noticia) => (
                    <Col xs={12} md={6} lg={4} key={noticia.id}>
                        <StyledCNews>
                            <StyledCBody imagem_url={noticia.caminho_imagem}>
                                <StyledCTitleNews>{noticia.titulo}</StyledCTitleNews>
                                <StyledCTextNews>{noticia.conteudo}</StyledCTextNews>
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