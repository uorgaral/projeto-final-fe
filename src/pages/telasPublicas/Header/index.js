import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import Logo from "../../../img/Logo.png";
import { BiCalendar, BiDonateHeart, BiSolidCamera, BiMessageRoundedDots, BiSolidUser, BiChevronDown, BiChevronUp } from "react-icons/bi";
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';


const Body = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: start;
    overflow: hidden;
    box-sizing: border-box; 
`;

const Head = styled.div`
    position: fixed;
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

const Icons = styled.div`
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

const IconWrapper = styled.div`
    color: #3B83A6;
    transition: color 0.3s ease;
    cursor: pointer;
    &:hover {
        color: #0d3f58ff;
    }
`;

const StyledDropdown = styled(Dropdown)`
    display: none;
    @media (max-width: 768px){
        display: block;
    }
`;

const StyledDropdownToggle = styled(Dropdown.Toggle)`
    background-color: #3B83A6;
    border-color: #3B83A6;
    font-family: 'Fredoka Variable', sans-serif;
    
    &:hover, &:focus {
        background-color: #0d3f58ff;
        border-color: #0d3f58ff;
    }

    &.show, &:active {
        background-color: #3B83A6 !important;
        border-color: #3B83A6 !important;
        box-shadow: none !important;
    }

    &::after {
        display: none;
    }
`;

const StyledDropdownMenu = styled(Dropdown.Menu)`
    border: none;
    margin-top: 10px; 
    border-radius: 10px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
`;


const StyledDropdownItem = styled(Dropdown.Item)`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #000;
    font-family: 'Fredoka Variable', sans-serif;
    border: none;
    outline: none;

    &:hover {
        color: #fff;
        background-color: #3B83A6;
    }

    &:active, &:focus {
        background-color: #3B83A6 !important;
        color: #000000ff !important;
        border: none !important;
        outline: none !important;
    }
`;

export default function Header(){
    const [open, setOpen] = useState(false);

    return(
        <Body>
            <Head>
                <Img src={Logo}/>

                {/* DESKTOP */}
                <Icons>
                    <IconWrapper><BiCalendar size={40}/></IconWrapper>
                    <IconWrapper><BiDonateHeart size={40} /></IconWrapper>
                    <IconWrapper><BiSolidCamera size={40} /></IconWrapper>
                    <IconWrapper><BiMessageRoundedDots size={40} /></IconWrapper>
                    <IconWrapper><BiSolidUser size={40} /></IconWrapper>
                </Icons>

                {/* MOBILE */}
                <StyledDropdown onToggle={(isOpen) => setOpen(isOpen)}>
                    <StyledDropdownToggle id="dropdown-item-button">
                        Menu {open ? <BiChevronUp /> : <BiChevronDown />}
                    </StyledDropdownToggle>
                    <StyledDropdownMenu>
                        <StyledDropdownItem as="button"><BiCalendar size={24}/> Calendário</StyledDropdownItem>
                        <StyledDropdownItem as="button"><BiDonateHeart size={24}/> Sobre</StyledDropdownItem>
                        <StyledDropdownItem as="button"><BiSolidCamera size={24}/> Galeria</StyledDropdownItem>
                        <StyledDropdownItem as="button"><BiMessageRoundedDots size={24}/> Blog</StyledDropdownItem>
                        <StyledDropdownItem as="button"><BiSolidUser size={24}/> Login</StyledDropdownItem>
                    </StyledDropdownMenu>
                </StyledDropdown>
            </Head>
        </Body>
    );
}