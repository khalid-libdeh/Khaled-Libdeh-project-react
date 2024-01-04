import styled, { css } from "styled-components";
import Button from "./Components/button";
import { IonIcon } from '@ionic/react';
import { moonOutline, heartOutline } from 'ionicons/icons';
import Container from "../Containers/container";
import Welcome from "./Components/welcome";
import { useToggleFav } from "./layout";
import { Link } from "react-router-dom";
import { useDarkMode } from "../Dark Mode/darkModeProvider";

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

    const [show, setShow] = useToggleFav()
    const { darkMode, toggleDarkMode } = useDarkMode()

    const toggleFav = () => {
        setShow(!show)
    }

    const toggleDark = () => {
        toggleDarkMode()
    }

    return (
        <StyledHeader $dark={darkMode}>
            <FlexHeader>
                <Title to={{ pathname: "/Khaled-Libdeh-project-react" }} style={{ color: titleColor }}>{title}</Title>
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