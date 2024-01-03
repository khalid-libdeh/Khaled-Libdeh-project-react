import styled, { css } from "styled-components";
import Button from "./Components/button";
import { IonIcon } from '@ionic/react';
import { moonOutline, heartOutline } from 'ionicons/icons';
import Container from "../Containers/container";
import Welcome from "./Components/welcome";
import { useContext } from "react";
import { ToggleFavContext } from "./layout";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../Dark Mode/darkModeProvider";

const FlexHeader = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    width: 100%;
    
`;

const ButtonsCont = styled.div`
    display: flex;
    gap: 6px;
`

const Title = styled(Link)`
    font-weight: 700;
`
const StyledHeader = styled.header`
    background-color: white;
    color: black;
    ${({ $dark }) => $dark && `
        background-color: #1A1A1A;
        color: white;
    `};
  
    
`

const Header = ({ title, titleColor }) => {

    const [show, setShow] = useContext(ToggleFavContext)
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

    const toggleFav = () => {
        setShow(!show)
    }

    const toggleDark = () => {
        toggleDarkMode()
    }

    return (
        <StyledHeader $dark={darkMode}>
            <FlexHeader>
                <Title to={{ pathname: "/" }} style={{ color: titleColor }}>{title}</Title>
                <ButtonsCont>
                    <Button icon={moonOutline} text="Dark Mode" handleButtons={toggleDark} />
                    <Button key="fav" onClick icon={heartOutline} text="Favourites" handleButtons={toggleFav}>
                    </Button>
                </ButtonsCont>
            </FlexHeader>
            <Welcome />
        </StyledHeader>
    )
}

export default Header