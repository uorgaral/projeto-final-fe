import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import Logo from "../../../img/Logo.png";
import Dropdown from 'react-bootstrap/Dropdown';

const Head = styled.div`
    background-color: #E8DEEF;
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    box-shadow: 3px 3px 7px #3c3c3c45;
    z-index: 10;
`;

const Img = styled.img`
    width: 60px;
    height: 60px;
`;

const Botoes = styled.div`
    display: flex;
    gap: 15px;
    color: #3B83A6;
    @media (max-width: 768px){
        display: none;
    }
    svg {
        transition: color 0.3s ease;
        cursor: pointer;
        &:hover {
            color: #0d3f58ff;
        }
    }
`;

const BotoesWrapper = styled.div`
    color: #3B83A6;
    transition: color 0.3s ease;
    cursor: pointer;
    font-family: 'fredoka variable';
    font-size: 20px;
    &:hover {
        color: #0d3f58ff;
    }
`;

const StyledDropdown = styled(Dropdown)`
    display: none;

    @media (max-width: 768px){
        display: block;
    };
`;

const StyledDropdownToogle = styled(Dropdown.Toggle)`
    background-color: #3B83A6;
    font-family: 'fredoka variable';

    &:hover {
        background-color: #013e5cff;
    }
`




export default function Header(){

    return(
        <>
            <Head>
                <Img src={Logo}/>

                {/* DESKTOP */}
                <Botoes>
                    <BotoesWrapper href="#/action-2" >Sobre</BotoesWrapper>
                    <BotoesWrapper href="#/action-2" >Blog</BotoesWrapper>
                    <BotoesWrapper href="#/action-2" >Galeria</BotoesWrapper>
                    <BotoesWrapper href="#/action-2" >Eventos</BotoesWrapper>
                    <BotoesWrapper href="#/action-2" >Login</BotoesWrapper>
                </Botoes>

                {/* MOBILE */}
                <StyledDropdown>
                <StyledDropdownToogle id="dropdown-basic">
                    Menu
                </StyledDropdownToogle>

                <Dropdown.Menu>
                    
                    <Dropdown.Item href="#/action-2" style={{fontFamily: 'fredoka variable'}}>Sobre</Dropdown.Item>
                    <Dropdown.Item href="#/action-1" style={{fontFamily: 'fredoka variable'}}>Blog</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" style={{fontFamily: 'fredoka variable'}}>Galeria</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" style={{fontFamily: 'fredoka variable'}}>Eventos</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" style={{fontFamily: 'fredoka variable'}}>Login</Dropdown.Item>
                </Dropdown.Menu>
                </StyledDropdown>
            </Head>
        </>
    );
}
