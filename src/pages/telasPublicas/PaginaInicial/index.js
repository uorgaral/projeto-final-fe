import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel';
import placeholder from '../../../img/imgPlaceholder.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';



const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  width: 100%;
  background-color: white;
  overflow-x: hidden;
  justify-content: space-between;
`;

const ContCarrossel = styled.div`
    width: 100%;
    height: 639px;
    margin-top: 81px;

    @media (max-width: 768px){
        display: none;
    };
`

const ContLegenda = styled.div`
    background-color: #0000006a;
    padding: 10px;
    border-radius: 5px;
`

const TituloCarrosel = styled.h1`
    font-family: 'Fredoka Variable', sans-serif;
`

const CarouselLegenda = styled.p`
    font-family: 'lexend';
    font-size: 17px;
`
const ContConteudo = styled.div`
    height: 700px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 25px;

    @media (max-width: 768px){
        margin-top: 81px;
    }
`

const ContTitulo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
`
const ContCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
`
const TituloPrincipal = styled.h1`
    font-family: 'Style Script', sans-serif !important;
    color: #683f91ff;
    font-size: 80px;
`
const CardTitulo = styled(Card.Title)`
    font-family: 'Fredoka Variable', sans-serif;
    color: #683f91ff;
`
const CardSubtitulo = styled(Card.Subtitle)`
    font-family: 'lexend';
`
const CardTexto = styled(Card.Text)`
    font-family: 'lexend';
`
const CardLink = styled(Card.Link)`
    font-family: 'Fredoka Variable', sans-serif;
    color: #3B83A6;
    transition: color 0.3s ease;

    &:hover{
        color: #0f4058ff;
    };
`

const ContLink = styled.div`
    width: 100%;
    border: 1px solid black;
`
const StyledCardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function PaginaInicial(){
    return(
        <Body>
            <ContCarrossel>
                <Carousel>
                    <Carousel.Item>
                        <img src={placeholder} style={{ height: 639, objectFit: 'cover', width: '100%'}}/>
                        <Carousel.Caption style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <ContLegenda>
                                <TituloCarrosel>Exemplo de fotos</TituloCarrosel>
                                <CarouselLegenda>Quase fiquei doida fazendo isso</CarouselLegenda>
                            </ContLegenda>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={placeholder} style={{ height: 639, objectFit: 'cover', width: '100%'}}/>
                        <Carousel.Caption style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <ContLegenda>
                                <TituloCarrosel>Exemplo de fotos</TituloCarrosel>
                                <CarouselLegenda>Deu tudo certo bb</CarouselLegenda>
                            </ContLegenda>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={placeholder} style={{ height: 639, objectFit: 'cover', width: '100%'}}/>
                        <Carousel.Caption style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <ContLegenda>
                                <TituloCarrosel>Exemplo de fotos</TituloCarrosel>
                                <CarouselLegenda>Queria fazer um site de gatinhos :(</CarouselLegenda>
                            </ContLegenda>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </ContCarrossel>

            <ContConteudo>
                <ContTitulo>
                    <TituloPrincipal>Guardiãs das Águas</TituloPrincipal>
                </ContTitulo>
                

                <ContCard>
                    <Card style={{ width: '18rem', height: '15rem', border: '3px solid #683f91ff', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'}}>
                        <StyledCardBody>
                            <CardTitulo>O que é o projeto Guardiãs das Águas?</CardTitulo>
                            <CardTexto>Descubra nossos objetivos e como nós conseguimos auxiliar a comunidade local clicando aqui!</CardTexto>
                            <CardLink href="#">Clique aqui</CardLink>
                        </StyledCardBody>
                    </Card>

                    <Card style={{ width: '18rem', height: '15rem', border: '3px solid #683f91ff', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'}}>
                        <StyledCardBody>
                            <CardTitulo>Blog</CardTitulo>
                            <CardTexto>Acesse nosso blog para ter acesso a mais informações sobre saneamento básico e atualizações sobre o projeto!</CardTexto>
                            <CardLink href="#">Clique aqui</CardLink>
                        </StyledCardBody>
                    </Card>

                    <Card style={{ width: '18rem', height: '15rem', border: '3px solid #683f91ff', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'}}>
                        <StyledCardBody>
                            <CardTitulo>EDITAR</CardTitulo>
                            <CardTexto>Descubra nossos objetivos e como nós conseguimos auxiliar a comunidade local clicando aqui!</CardTexto>
                            {/* Você pode remover a div extra e usar apenas o CardLink */}
                            <CardLink href="#">Clique aqui</CardLink>
                        </StyledCardBody>
                    </Card>
                </ContCard>
                

            </ContConteudo>

        </Body>
    )
}
