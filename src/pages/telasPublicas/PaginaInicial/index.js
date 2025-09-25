import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LogoG1 from '../../../img/logoG1.png'
import LogoComUFU from '../../../img/logoComUFU.png'
import LogoFC from '../../../img/logoFC.png'

import imgMeninas from '../../../img/imgMeninas.png'
import imgCientistas from '../../../img/imgCientistas.png'
import imgMulheres from '../../../img/imgMulheres.jpg'
import imgGrupoMeninasRindo from '../../../img/ImgMeninasRindo.jpg'


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

    .carousel-item {
    transition: transform 0.6s ease-in-out;
  }

    @media (max-width: 768px){
        display: none;
    };
`

// const ContLegenda = styled.div`
//     background-color: #0000006a;
//     padding: 10px;
//     border-radius: 5px;
// `

// const TituloCarrosel = styled.h1`
//     font-family: 'Fredoka Variable', sans-serif;
// `

// const CarouselLegenda = styled.p`
//     font-family: 'lexend';
//     font-size: 17px;
// `


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

const TituloPrincipal = styled.h1`
    font-family: 'Style Script', sans-serif !important;
    color: #683f91ff;
    font-size: 80px;
    text-shadow: 2px 2px 4px #48207075;
`

const ContCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
`

const CardTitulo = styled(Card.Title)`
    font-family: 'Fredoka Variable', sans-serif;
    color: #683f91ff;
`
const CardTexto = styled(Card.Text)`
    font-family: 'lexend';
    color: #000000ff;
    font-size: 15px;
`

const CardLink = styled(Card.Link)`
    font-family: 'Fredoka Variable', sans-serif;
    color: #3B83A6;
    transition: color 0.3s ease;

    &:hover{
        color: #0f4058ff;
    };
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
                        <img src={imgCientistas} style={{ height: 639, objectFit: 'cover', width: '100%'}}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={imgMeninas} style={{ height: 639, objectFit: 'cover', width: '100%'}}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={imgMulheres} style={{ height: 639, objectFit: 'cover', width: '100%'}}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={imgGrupoMeninasRindo} style={{ height: 639, objectFit: 'cover', width: '100%'}}/>
                    </Carousel.Item>
                </Carousel>
            </ContCarrossel>

            <ContConteudo>
                <ContTitulo>
                    <TituloPrincipal>Guardiãs das Águas</TituloPrincipal>
                </ContTitulo>
                

                <ContCard>
                    {/* Card 1 */}
                    <Card style={{ width: '18rem', height: '20rem', border: '3px solid #683f91ff', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'}}>
                        <StyledCardBody>
                            <img src={LogoG1} style={{width: 20, height: 20}}/>
                            <CardTitulo>Mulheres na ciência: com orçamento de R$ 1 milhão, professora da UFU desenvolve projeto com alunas de escolas públicas de seis estados do Brasil</CardTitulo>
                            <CardLink href="https://g1.globo.com/mg/triangulo-mineiro/noticia/2025/02/02/mulheres-na-ciencia-com-orcamento-de-r-1-milhao-professora-da-ufu-desenvolve-projeto-com-alunas-de-escolas-publicas-de-seis-estados-do-brasil.ghtml">Leia a reportagem!</CardLink>
                        </StyledCardBody>
                    </Card>
                    {/* Card 2 */}
                    <Card style={{ width: '18rem', height: '20rem', border: '3px solid #683f91ff', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'}}>
                        <StyledCardBody>
                            <img src={LogoComUFU} style={{width: 126, height: 20}}/>
                            <CardTitulo>MULHERES NA CIÊNCIA
                                'Uma oportunidade totalmente diferente do que já vivi'
                                Programa Futuras Cientistas reúne alunas e professoras da educação básica na UFU</CardTitulo>
                            <CardLink href="https://comunica.ufu.br/noticias/2025/02/uma-oportunidade-totalmente-diferente-do-que-ja-vivi">Leia a reportagem!</CardLink>
                        </StyledCardBody>
                    </Card>
                    {/* Card 3 */}
                    <Card style={{ width: '18rem', height: '20rem', border: '3px solid #683f91ff', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'}}>
                        <StyledCardBody>
                            <img src={LogoFC} style={{width: 62, height: 20}}/>
                            <CardTitulo>Programa Futuras Cientistas - Imersão Científica 2026. 
                                Alunas do segundo ano do ensino médio e professoras do ensino básico podem participar!
                                Inscrições abertas até 06 de outubro.</CardTitulo>
                            <CardLink href="https://www.futurascientistas.com.br/">Se inscreva!</CardLink>
                        </StyledCardBody>
                    </Card>
                </ContCard>
            </ContConteudo>
        </Body>
    )
}
