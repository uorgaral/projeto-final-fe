import styled from "styled-components"
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Logo from '../../../img/Logo.png'
import Table from 'react-bootstrap/Table';

const Body = styled.div`
    display: flex;
    justify-content: end;
    flex-direction: column;
    position: relative;
`

const Foot = styled.div`
    background-color: #E8DEEF;
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    box-shadow: 3px -3px 7px #3c3c3c45;
    position: fixed

     @media (max-width: 768px){
        height: 160px;
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

const ContDoodles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 200px;
    height: 170px;

    @media (max-width: 768px){
        height: 140px;
        width: 90px;
    }
`

const StyledTable = styled(Table)`
    font-family: 'Fredoka Variable', sans-serif;
    color: #3B83A6;
    font-size: 17px;
    background-color: transparent !important;
    border: none !important;  
    border-collapse: collapse;
    width: 400px;

    td, th {
        padding: 3px 0px;
        text-align: center;
        border: none !important; 
        background-color: transparent !important; 
        color: #3B83A6;
    };
    td:hover {
        color: #0d3f58ff; 
        transition: all 0.3s ease;
        cursor: pointer; 
    };
    @media (max-width: 768px){
        font-size: 13px;
        width: 30px;
        padding: 12px 8px;
    }
`

const Icons = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 8px;
    color: #3B83A6;

    svg {
        &:hover {
        color: #0d3f58ff; 
        transition: all 0.3s ease;
        cursor: pointer; 
        }
    };
`;


export default function Footer(){
    return(
        <Body>
            <Foot>
                <ContDoodles>
                    <Img src={Logo}/>
                    <Icons>
                        <BiLogoInstagramAlt size={30}/>
                        <AiOutlineWhatsApp size={28}/>
                    </Icons>
                    </ContDoodles>

                    <StyledTable>
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Página Inicial</td>
                            <td>Sobre</td>
                            <td>Galeria</td>
                            </tr>
                            <tr>
                            <td>Blog</td>
                            <td>Calendário</td>
                            <td>Login</td>
                            </tr>
                        </tbody>
                    </StyledTable>

            </Foot>
        </Body>
    )
}
