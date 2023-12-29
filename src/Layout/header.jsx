import styled from "styled-components";
import Button from "./Components/button";
import { IonIcon } from '@ionic/react';
import { moonOutline, heartOutline } from 'ionicons/icons';
import Container from "../Containers/container";

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

const Title = styled.span`
    font-weight: 700;
`
const StyledHeader = styled.header`
    background-color: var(--bg-default);
`

const Header = ({ title, titleColor }) => {
    return (
        <StyledHeader>
            <FlexHeader>
                <Title style={{ color: titleColor }}>{title}</Title>
                <ButtonsCont>
                    <Button icon={moonOutline} text="Dark Mode" />
                    <Button icon={heartOutline} text="Favourites">
                    </Button>
                </ButtonsCont>
            </FlexHeader>
        </StyledHeader>
    )
}

export default Header