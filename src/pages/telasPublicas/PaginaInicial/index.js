import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
//
import LogoG1 from '../../../img/logoG1.png'
import LogoComUFU from '../../../img/logoComUFU.png'
import LogoFC from '../../../img/logoFC.png'
//
import imgMeninas from '../../../img/imgMeninas.png'
import imgCientistas from '../../../img/imgCientistas.png'
import imgMulheres from '../../../img/imgMulheres.jpg'
import imgGrupoMeninasRindo from '../../../img/ImgMeninasRindo.jpg'
//

const ContCarrossel = styled.div`
    width: 100%;

    .carousel-item {
    transition: transform 0.5s ease-in-out;
  }

    @media (max-width: 768px){
      display: none;
    };
`
const ContConteudo = styled.div`
    min-height: 70vh; 
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 25px;
    overflow-y: hidden;
`

const ContTitulo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
`

const TituloPrincipal = styled.h1`
    font-family: "Style Script", cursive !important;
    color: #683f91ff;
    font-size: 80px;
    text-shadow: 2px 2px 4px #48207075;

    @media (max-width: 768px){
        font-size: 50px
    };
`

const ContCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 15px;
    }
`

const CardTexto = styled(Card.Title)`
    font-family: 'Fredoka Variable', sans-serif;
    color: #683f91ff;
`

const CardLink = styled(Card.Link)`
    font-family: 'Fredoka Variable', sans-serif;
    color: #3B83A6;
    transition: color 0.3s ease;

    &:hover{
        color: #195674;
    };
`
const StyledCardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;



export default function PaginaInicial(){
    return(
        <>
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
                    <Card style={{ width: '18rem', height: '20rem', border: '3px solid #683f91ff', boxShadow: '0 4px 8px 0 #4321667d'}}>
                        <StyledCardBody>
                            <img src={LogoG1} style={{width: 40, height: 40}}/>
                            <CardTexto>Mulheres na ciência: com orçamento de R$ 1 milhão, professora da UFU desenvolve projeto com alunas de escolas públicas de seis estados do Brasil</CardTexto>
                            <CardLink href="https://g1.globo.com/mg/triangulo-mineiro/noticia/2025/02/02/mulheres-na-ciencia-com-orcamento-de-r-1-milhao-professora-da-ufu-desenvolve-projeto-com-alunas-de-escolas-publicas-de-seis-estados-do-brasil.ghtml">Leia a reportagem!</CardLink>
                        </StyledCardBody>
                    </Card>
                    {/* Card 2 */}
                    <Card style={{ width: '18rem', height: '20rem', border: '3px solid #683f91ff', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4)'}}>
                        <StyledCardBody>
                            <img src={LogoComUFU} style={{width: 126, height: 20}}/>
                            <CardTexto>MULHERES NA CIÊNCIA
                                'Uma oportunidade totalmente diferente do que já vivi'
                                Programa Futuras Cientistas reúne alunas e professoras da educação básica na UFU</CardTexto>
                            <CardLink href="https://comunica.ufu.br/noticias/2025/02/uma-oportunidade-totalmente-diferente-do-que-ja-vivi">Leia a reportagem!</CardLink>
                        </StyledCardBody>
                    </Card>
                    {/* Card 3 */}
                    <Card style={{ width: '18rem', height: '20rem', border: '3px solid #683f91ff', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'}}>
                        <StyledCardBody>
                            <img src={LogoFC} style={{width: 62, height: 20}}/>
                            <CardTexto>Programa Futuras Cientistas - Imersão Científica 2026. 
                                Alunas do segundo ano do ensino médio e professoras do ensino básico podem participar!
                                Inscrições abertas até 06 de outubro.</CardTexto>
                            <CardLink href="https://www.futurascientistas.com.br/">Se inscreva!</CardLink>
                        </StyledCardBody>
                    </Card>
                </ContCard>
            </ContConteudo>
        </>
    )
}