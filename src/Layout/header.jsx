import styled from "styled-components";
import Button from "./Components/button";
import { IonIcon } from '@ionic/react';
import { moonOutline, heartOutline } from 'ionicons/icons';
import Container from "../Containers/container";
import Welcome from "./Components/welcome";
import { useContext } from "react";
import { ToggleFavContext } from "./layout";
import { Link } from "react-router-dom";

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
    background-color: var(--bg-default);
`

const Header = ({ title, titleColor }) => {

    const [show, setShow] = useContext(ToggleFavContext)

    const toggleFav = () =>{
        setShow(!show)
    }

    return (
        <StyledHeader>
            <FlexHeader>
                <Title to={{pathname:"/"}} style={{ color: titleColor }}>{title}</Title>
                <ButtonsCont>
                    <Button icon={moonOutline} text="Dark Mode" />
                    <Button key="fav" onClick icon={heartOutline} text="Favourites" hanleButtons={toggleFav}>
                    </Button>
                </ButtonsCont>
            </FlexHeader>
            <Welcome />
        </StyledHeader>
    )
}

export default Header