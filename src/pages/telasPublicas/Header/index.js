import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import Logo from "../../../img/Logo.png";
import { BiCalendar, BiDonateHeart, BiSolidCamera, BiMessageRoundedDots, BiSolidUser, BiChevronDown, BiChevronUp } from "react-icons/bi";
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
                <Icons>
                    <IconWrapper><BiCalendar size={40}/></IconWrapper>
                    <IconWrapper><BiDonateHeart size={40} /></IconWrapper>
                    <IconWrapper><BiSolidCamera size={40} /></IconWrapper>
                    <IconWrapper><BiMessageRoundedDots size={40} /></IconWrapper>
                    <IconWrapper><BiSolidUser size={40} /></IconWrapper>
                </Icons>

                {/* MOBILE */}
                <StyledDropdown>
                <StyledDropdownToogle id="dropdown-basic">
                    Menu
                </StyledDropdownToogle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" style={{fontFamily: 'fredoka variable'}}>Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" style={{fontFamily: 'fredoka variable'}}>Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" style={{fontFamily: 'fredoka variable'}}>Something else</Dropdown.Item>
                </Dropdown.Menu>
                </StyledDropdown>
            </Head>
        </>
    );
}
