import styled from "styled-components";
import Card from 'react-bootstrap/Card';

import dados from '../../../img/dados.png'
import Logo from "../../../img/Logo.png";
import fundo from "../../../img/FundoImg.png"

import Jeamylle from '../../../img/Profs/Jeamylle.png'
import Claudiene from '../../../img/Profs/Claudiene.jpg'
import Janisi from '../../../img/Profs/Janisi.png'
import Paulo from '../../../img/Profs/Paulo-Carvalho-53.webp'
import Zelia from '../../../img/Profs/Zelia.jpg'
import Daniele from '../../../img/Profs/Daniele-Da-Silva-3.webp'
import Flavio from '../../../img/Profs/Flavio.png'
import Sueli from '../../../img/Profs/sueli.png'
import Alam from '../../../img/Profs/Alam.png'
import Amanda from '../../../img/Profs/Amanda.png'
import Gleicimar from '../../../img/Profs/Gleucimar.jpg'
import AnaP from '../../../img/Profs/Ana Paula.jpg'
import AnaC from '../../../img/Profs/Ana Carolina.png'
import Joelma from '../../../img/Profs/Joelma.png'
import Claudia from './../../../img/Profs/Claudia.png'
import Julia from './../../../img/Profs/Julia.png'
import Adolfo from './../../../img/Profs/Adolfo.png'
import Rosimeire from './../../../img/Profs/Rosimeire.png'


const professores = [
    {
        id: 1,
        name: "Dra. Sueli Moura Bertolino (UFU/ Engenharia Ambiental e Sanitária",
        imgUrl: Sueli
    },
    {
        id: 2,
        name: "Dr. Alam Gustavo Trovó (UFU/Química)",
        imgUrl: Alam
    },
    {
        id: 3,
        name: "Dra. Amanda Danuello Pivatto (UFU/Quimica)",
        imgUrl: Amanda
    },    
    {
        id: 4,
        name: "Drª. Gleicimar Gonçalves Cunha (UFU/Pedagogia ICHPO)",
        imgUrl: Gleicimar
    },
     {
        id: 5,
        name: "Dra. Ana Paula Milla dos Santos Senhuk (UFTM/Engenharia Ambiental)",
        imgUrl: AnaP
    },
    {
        id: 6,
        name: "Dra. Ana Carolina Borella Marfil Anhê, (UFTM/Engenharia Ambiental)",
        imgUrl: AnaC
    },
    {
        id: 7,
        name: "MSc. Joelma Lima Oliveira (IFCE, Campus Juazeiro, Engenharia Ambiental)",
        imgUrl: Joelma
    },
    {
        id: 8,
        name: "MSc. Adolfo Átila Cabral Moreira (IFCE, Campus Juazeiro, Engenharia Ambiental)",
        imgUrl: Adolfo
    },
    {
        id: 9,
        name: "MSc. Rosimeire Alves de Oliveira (IFCE, Campus Juazeiro, Engenharia Ambiental)",
        imgUrl: Rosimeire
    },
    {
        id: 10,
        name: "Dra. Claudia Nunes Santos (UFS/Biologia)",
        imgUrl: Claudia
    },
    {
        id: 11,
        name: "Dra. Júlia Oliveira Penteado (Pós-Dóc FURG/ Tecnologia Ambiental)",
        imgUrl: Julia
    },
]


const coordenadores = [
    {
        id: 1,
        name: "Drª. Jeamylle Nilin UFU/Biologia",
        role: "Coordenadora Direitos Humanos",
        description: "Bióloga com Doutorado em Ciências Marinhas Tropicais. Desenvolve atividades de ensino, pesquisa e extensão em educação ambiental e popularização da ciência nas áreas de Ecotoxicologia e Resíduos Sólidos. Idealizadora dos projetos Guardiões do Mar e Guardiões das Águas. Coordenadora geral responsável pela articulação das equipes.",
        imgUrl: Jeamylle
    },
    {
        id: 2,
        name: "Dra. Claudiene Santos (UFU/ Pedagogia ICHPO).",
        role: "Coordenação Geral",
        description: "Bióloga com Doutorado em Psicologia. Especialista em Educação Sexual. Coordenação geral das atividades relacionadas às questões de Gênero, Juventudes, Sexualidades, Diversidade Sexual, Saúde, Violências de gênero e Educação Sexual",
        imgUrl: Claudiene
    },
    {
        id: 3,
        name: "Dra. Janisi Sales Aragão (IFCE, Campus Juazeiro, Engenharia Ambiental)",
        role: "Coordenadora Local",
        description: "Graduação e Doutorado em Engenharia de Pesca, Supervisão de atividades relacionadas a qualidade de água, efluentes e resíduos sólidos.",
        imgUrl: Janisi
    },
    {
        id: 4,
        name: "Dr. Paulo Sérgio Martins de Carvalho (UFPE/Zoologia).",
        role: "Coordenador Local",
        description: "Oceanográfo com doutorado em Ecotoxicologia. Desenvolve pesquisas em Ecotoxicologia e avaliação dos efeitos adversos de contaminantes químicos em organismos aquáticos marinhos e de água doce, baseados em estudos de laboratório e de campo.",
        imgUrl: Paulo
    },
    {
        id: 5,
        name: "Drª. Zélia Soares Macedo (UFS/Física)",
        role: "Coordenadora Local",
        description: "Física com doutorado em Física. Coordena a CIENART (Feira Científica de Sergipe) desde 2012. É editora da Revista Feira de Ciência Cultura e coordenadora estadual da Olimpíada Brasileira de Física nas Escolas Públicas (OBFEP). Coordenação local em parceria com a CIENART.",
        imgUrl: Zelia
    },
    {
        id: 6,
        name: "Dra. Daniele Caetano da Silva (UFMT/ Engenharia Química).",
        role: "Coordenadora Local",
        description: "Química com Doutorado em Ciências (Química Analítica e Inorgânica). Realiza a supervisão de atividades relacionadas a Química Analítica Ambiental e Ecotoxicologia.",
        imgUrl: Daniele
    },
    {
        id: 7,
        name: "Dr. Flávio Manoel Rodrigues da Silva Júnior (FURG/Tecnologia Ambiental).",
        role: "Coordenador Local",
        description: "Biólogo com Doutorado em Ciências Fisiológicas. Supervisiona atividades relacionadas a qualidade de água e poluição atmosférica.",
        imgUrl: Flavio
    },
]



//CORPO
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

const TextoAreas = styled.p`
    font-family: Fredoka Variable, sans-serif;
    color: #383838ff;
    font-size: 18px;
    margin-bottom: 3px;

    @media(max-width: 768px){
        font-size: 20px;
        margin-left: 0;
    }
`;


//CONTAINERS
const ContTitulo = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 35px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 768px){
        margin-top: 0;
    }
`;

const ImagemTopo = styled.img`
    display: block;

    @media (max-width: 768px){
        display: none;
   }
`

const ContSubtitulo = styled.div`
    width: 100%;
    text-align: start;
`;

const ContImg = styled.div`
    width: 100%;
    min-height: 300px;
    padding: 10px;
    overflow-x: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
`;

// Criei um componente estilizado para a imagem e o corpo do card
const StyledCard = styled(Card)`
    width: 500px;
    height: 300px;
    display: flex;
    flex-direction: row;
    box-shadow: 0 4px 8px 0 #4321667d;
    flex-shrink: 0;

    @media (max-width: 768px){
        width: 400px;
        height: 450px;
        display: flex;
        align-items: center;
    }
`;

const StyledCardImg = styled(Card.Img)`
    height: 300px;
    width: 200px;
    object-fit: cover;

    @media (max-width: 768px){
        border-radius: 100%;
    }
`;

const StyledCardBody = styled(Card.Body)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
`;

// TEXTOS DO CARD 
const TituloCard = styled(Card.Title)`
    font-family: "Fredoka Variable", sans-serif !important;
    color: #3B83A6;
    font-size: 17px;
`;
const SubtituloCard = styled(Card.Subtitle)`
    font-family: "Fredoka Variable", sans-serif !important;
    color: #3B83A6;
    font-size: 15px;
`;
const TextoCard = styled(Card.Text)`
    font-family: "Be Vietnam Pro", sans-serif !important;
    color: #000000ff;
    font-size: 14px;
`;


const Imagem = styled.img`
    width: 300px;
    height: 300px; 
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 #4321667d;

    @media (max-width: 768px){
        display: none;
    }
`;


export default function Sobre(){
    return(
        <Body>
            <Container>

                <div style={{display: 'flex', flexDirection: 'row', justifyContent: "space-around", alignItems: 'center'}}>
                    <div style={{marginTop: 35, width: 1000, alignItems: 'center'}}>
                        <ContTitulo>
                        <ImagemTopo src={Logo} style={{width: 70, height: 70}}/>
                        <TituloPrincipal>Projeto Guardiãs das Águas</TituloPrincipal>
                        </ContTitulo>

                        <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                            <div style={{width: '50%', marginRight: 100}}>
                                <Texto>O projeto Guardiãs das Águas - meninas pelo Saneamento tem apoio do
                                CNPq/MCTI/MMulheres (Chamada nº
                                31/2023), com vigência até 2028, busca
                                incentivar meninas e mulheres a atuarem
                                em pesquisas sobre conservação
                                ambiental e saneamento.
                                As Guardiãs das Águas são alunas de
                                ensino básico e superior, que irão
                                desenvolver pesquisas em diversas áreas
                                do saneamento.
                            </Texto>
                            </div>
                            <Imagem src={dados}/>
                        </div>


                        <div style={{marginTop: 40, marginBottom: 60}}>
                            <ContSubtitulo>
                        <Subtitulo>Nosso objetivo</Subtitulo>
                        </ContSubtitulo>
                        <Texto>Promover o pensamento crítico acerca da cidadania, empoderamento feminino e meio ambiente;</Texto>
                        <Texto>Incentivar a atuação de meninas nas carreiras das áreas exatas, engenharias e computação;</Texto>
                        <Texto>Fortalecer grupos locais que desenvolvem pesquisas relacionadas ao saneamento ambiental;</Texto>
                        <Texto>Mulheres e meninas atuando como agentes multiplicadoras em suas comunidades, estimulando a percepção ambiental em relação a
                            importância do saneamento ambiental, sobretudo em relação a concervação dos recursos hídricos.</Texto>
                        </div>
                        
                        
                        
                        <ContSubtitulo>
                                <Subtitulo>Áreas Temáticas</Subtitulo>
                        </ContSubtitulo>
                        <div style={{width: '100%', height: 600, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                            <Card style={{width: '20rem', height: 530,boxShadow: '0px 4px 6px 0px rgba(42, 0, 85, 0.6)', border: 'none'}}>
                                <Card.Body> 
                                    <Card.Title style={{fontFamily: "Fredoka Variable, sans-serif", color: '#5C1D9C', fontSize: 23}}>Saneamento Ambiental</Card.Title>
                                    <TextoAreas>- Qualidade do ar, das águas e do solo</TextoAreas>
                                    <TextoAreas>- Ecologia aplicada a eng. sanitária</TextoAreas>
                                    <TextoAreas>- Análise de dados</TextoAreas>
                                    <TextoAreas>- Divulgação Científica</TextoAreas>
                                    <TextoAreas>- Recursos hídricos</TextoAreas>
                                    <TextoAreas>- Análise de traços e Quím. ambiental</TextoAreas>
                                    <TextoAreas>- Ensino de ciências e matemática</TextoAreas>
                                    <TextoAreas>- Tratamento de águas de abastecimento e residuárias</TextoAreas>
                                    <TextoAreas>- Ciências ambientais</TextoAreas>
                                    <TextoAreas>- Resíduos sólidos, domésticos e industriais</TextoAreas>
                                    <TextoAreas>- Sensoriamento remoto da atmosfera</TextoAreas>
                                </Card.Body>
                            </Card>
                            <Card style={{width: '20rem', height: 530,boxShadow: '0px 4px 6px 0px rgba(42, 0, 85, 0.6)', border: 'none'}}>
                                <Card.Body> 
                                    <Card.Title style={{fontFamily: "Fredoka Variable, sans-serif", color: '#5C1D9C', fontSize: 23}}>Direitos Humanos</Card.Title>
                                    <TextoAreas>- Invisibilidade das mulheres nas Ciências exata, engenharia e computação</TextoAreas>
                                    <TextoAreas>- Desafios para o ingresso e permanênciade meninas e mulheres na ciência</TextoAreas>
                                    <TextoAreas>- Estereótipos e desigualdades de gênero</TextoAreas>
                                    <TextoAreas>- Assédio moral e sexual e suas consequências</TextoAreas>
                                    <TextoAreas>- Maternidade e carreira</TextoAreas>
                                </Card.Body>
                            </Card>
                            </div>
                        </div>
                </div>
                        

                <ContSubtitulo>
                <Subtitulo>Quem somos</Subtitulo>
                </ContSubtitulo>

                <div style={{marginBottom: 50}}>
                    <ContSubtitulo>
                    <Subtitulo>Coordenadores do projeto</Subtitulo>
                    </ContSubtitulo>

                <ContImg>
                    {coordenadores.map(card => (
                        <StyledCard key={card.id}>
                            <StyledCardImg src={card.imgUrl} />
                            <StyledCardBody>
                                <TituloCard>{card.name}</TituloCard>
                                <SubtituloCard>{card.role}</SubtituloCard>
                                <TextoCard>{card.description}</TextoCard>
                            </StyledCardBody>
                        </StyledCard>
                    ))}
                </ContImg>
                </div>

                <div>
                    <ContSubtitulo>
                    <Subtitulo>Professores Colaboradores</Subtitulo>
                </ContSubtitulo>

                <ContImg>
                    {professores.map(card => (
                        <StyledCard key={card.id}>
                            <StyledCardImg src={card.imgUrl} />
                            <StyledCardBody>
                                <TituloCard>{card.name}</TituloCard>
                            </StyledCardBody>
                        </StyledCard>
                    ))}
                </ContImg>
                </div>         
            </Container>
        </Body>
    );
}