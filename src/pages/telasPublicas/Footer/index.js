import styled from "styled-components"
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import Logo from '../../../img/Logo.png'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

import LEATOX from '../../../img/Logos/LEATOX.png'
import CNPQ from '../../../img/Logos/CNPQ.png'
import FURG from '../../../img/Logos/FURG.png'
import IFCEARA from '../../../img/Logos/IFCEARA.png'
import LOGOUFTM from '../../../img/Logos/LOGOUFTM.png'
import MCTI from '../../../img/Logos/MCTI.png'
import MINIMULHERES from '../../../img/Logos/MINIMULHERES.png'
import UFMT from '../../../img/Logos/UFMT.png'
import UFS from '../../../img/Logos/UFS.png'
import UFU from '../../../img/Logos/UFU.png'
import UPE from '../../../img/Logos/UPE.png'




const Foot = styled.div`
    background-color: #E8DEEF;
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    box-shadow: 3px -3px 7px #3c3c3c45;

     @media (max-width: 768px){
        height: 150px;
    }
`

const Img = styled.img`
    width: 80px;
    height: 80px;

     @media (max-width: 768px){
        width: 50px;
        height: 50px;
    }
`


const StyledTable = styled(Table)`
    font-family: 'Fredoka Variable', sans-serif;
    font-size: 17px;
    background-color: transparent !important;
    border: none !important;  
    border-collapse: collapse;
    width: 400px;
    height: 100px;

    td, th {
        padding: 3px 0px;
        text-align: center;
        border: none !important; 
        background-color: transparent !important; 
        color: #3B83A6 !important;
    };
    td:hover {
        color: #195674 !important; 
        transition: all 0.3s ease;
        cursor: pointer; 
    };
    @media (max-width: 768px){
        font-size: 17px;
        width: 30px;
        padding: 12px 8px;
    }
`;

const Icons = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 8px;
    color: #3B83A6;

    svg {
        &:hover {
        color: #195674; 
        transition: all 0.3s ease;
        cursor: pointer; 
        }
    };
`;

const ContDoodles = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`;



const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 150px;
    width: 1200px;
    justify-content: space-between;
    align-items: center;
`;
const ContainerParc = styled.div`
    display: flex;
    flex-direction: row;
    width: 1000px;
    align-items: center;
    justify-content: space-around;
`;
const ContainerLogos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Texto = styled.p`
    font-family: "Be Vietnam Pro", sans-serif !important;
    color: #3e3e3eff;
    font-size: 13px;
    margin-left: 20px;

    @media(max-width: 768px){
        font-size: 20px;
        margin-left: 0;
    }
`;


export default function Footer(){
    return(
            <Foot>
                <Container>
                    <ContDoodles>
                        <Img src={Logo}/>
                    <Icons>
                        <BiLogoInstagramAlt size={30}/>
                        <AiOutlineWhatsApp size={28}/>
                        <IoIosMail size={30}/>
                    </Icons>
                    </ContDoodles>

                    <StyledTable>
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                            <td><Link to="/sobre">Sobre</Link></td>
                            <td><Link to="/galeria">Galeria</Link></td>
                            </tr>
                            <tr>
                            <td><Link to="/blog">Blog</Link></td>
                            <td><Link to="/login">Login</Link></td>
                            </tr>
                        </tbody>
                    </StyledTable>
                </Container>

                <ContainerParc>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Img src={LEATOX}/>
                        <Texto>Este é projeto do LEATOX/INBIO/UFU</Texto>
                    </div>
                </ContainerParc>

                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <ContainerLogos>
                    <img src={CNPQ} style={{width: 120, height: 100}}/>
                    <Img src={FURG} style={{width: 70, height: 100}}/>
                    <img src={UPE} style={{width: 50, height: 100}}/>
                    <Img src={UFS}/>
                    <Img src={LOGOUFTM}/> 
                    <img src={MCTI} style={{width: 200, height: 50}}/>
                    <Img src={IFCEARA}/>
                    <img src={UFU} style={{width: 60, height: 100}}/>
                    <Img src={UFMT} style={{width: 80, height: 100}}/> 
                    <img src={MINIMULHERES} style={{width: 250, height: 100}}/>
                </ContainerLogos>
                </div>
                
            </Foot>
    )
}
